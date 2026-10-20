import { afterEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import {
  AGENT_TOOL_NAMES,
  AgentToolRefusal,
  PAID_TOOLS,
  STOP_TOOL,
  createAgentRun,
  createAgentTools,
  toMicro,
  type AgentToolSchema,
  type FindLeadsInput,
} from "../src/agent-tools/index.js";
import { apiError, client, json, mockFetch } from "./helpers.js";

afterEach(() => vi.unstubAllGlobals());

const CAMPAIGN_ID = "4f1c2b8e-0b7a-4c1e-9a55-2f6f1d2c3b4a";
const APPROVAL_URL = "https://app.layrcake.dev/approvals/a1";
const charged = (credits: string) => ({ request_id: "req_1", credits_charged: credits, credits_available: "250" });
const lead = { fingerprint: "f1", full_name: "Ada Lovelace", title: "Head of Sales", company_name: "Acme", company_domain: "acme.com", work_email: null, work_email_status: null, mobile_phone: null, linkedin_url: null, location: "London", observed_at: null };
const found = () => json({ result: { leads: [lead], total_found: 1 }, layrcake: charged("3") });
const enriched = () => json({ result: { contact: { work_email: "ada@acme.com" } }, layrcake: charged("5.000000") });
const verified = (email: string, status = "valid") => json({ result: { email, status }, layrcake: charged("1.250000") });
const drafted = () => json({ result: { campaign_id: CAMPAIGN_ID, state: "draft", removed: { total: 0 } } });
const preview = () => json({ result: { status: "needs_confirmation", campaign_id: CAMPAIGN_ID, confirmation_token: "tok_1", approval_url: APPROVAL_URL } });
const plan = (credits: string) => json({ result: { dry_run: true, advisory: true, evaluated_at: "2026-10-20T00:00:00Z", plan: { verb: "x", credits_estimate: credits, would_exceed: [], warnings: [] } }, layrcake: charged("0") });

function setup(replies: Parameters<typeof mockFetch>, options: { budget?: number; dryRun?: boolean } = {}) {
  const fetch = mockFetch(...replies);
  return { fetch, ...createAgentTools({ client: client(fetch, { maxRetries: 0 }), budget: 100, runId: "run-test", ...options }) };
}

const ada = { full_name: "Ada Lovelace", company_domain: "acme.com" };
const steps = [{ subject: "Hi", body: "Hi {{first_name}}" }];

describe("createAgentTools", () => {
  it("returns the five tools with prices in their descriptions", () => {
    const { tools, shouldStop } = setup([]);
    expect(Object.keys(tools)).toEqual([...AGENT_TOOL_NAMES]);
    expect(Object.values(tools).map((t) => t.name)).toEqual([...AGENT_TOOL_NAMES]);
    expect(tools.find_leads.description).toMatch(/0\.25 credits per person/);
    expect(tools.verify_email.description).toMatch(/1\.25 credits/);
    expect(tools.launch_campaign.parameters.properties).not.toHaveProperty("confirmation_token");
    expect(PAID_TOOLS).toEqual(["find_leads", "enrich", "verify_email"]);
    expect(STOP_TOOL).toBe("launch_campaign");
    expect(shouldStop()).toBe(false);
  });

  it("refuses a budget that is not positive", () => {
    expect(() => setup([], { budget: 0 })).toThrow(/positive/);
    expect(() => setup([], { budget: Number.NaN })).toThrow(/positive/);
  });

  it("caps each paid call at the budget left and sends an idempotency key", async () => {
    const { tools, fetch, summary } = setup([found(), enriched()]);
    const result = await tools.find_leads.execute({ audience: "Sales leaders", titles: ["Head of Sales"] });
    expect(result).toMatchObject({ leads: [{ full_name: "Ada Lovelace", company_domain: "acme.com" }], total_found: 1, credits_charged: "3", budget_left: 97 });
    expect(fetch.url(0)).toBe("https://api.layrcake.dev/v1/find_leads");
    expect(fetch.body(0)).toMatchObject({ budget_credits: 100, dry_run: false, limit: 10 });
    expect(fetch.header(0, "idempotency-key")).toMatch(/^run-test-find_leads-[0-9a-f]{24}$/);
    await tools.enrich.execute(ada);
    expect(fetch.body(1)).toEqual({ person: ada, want: ["work_email"], budget_credits: 97, dry_run: false });
    expect(summary()).toMatchObject({ found: 1, spent: 8 });
  });

  it("gives the same call the same idempotency key, and a dry run its own", async () => {
    const live = setup([verified("ada@acme.com"), verified("ada@acme.com")]);
    await live.tools.verify_email.execute({ email: "ada@acme.com" });
    await live.tools.verify_email.execute({ email: "ada@acme.com" });
    expect(live.fetch.header(0, "idempotency-key")).toBe(live.fetch.header(1, "idempotency-key"));
    const dry = setup([plan("1.25")], { dryRun: true });
    await dry.tools.verify_email.execute({ email: "ada@acme.com" });
    expect(dry.fetch.header(0, "idempotency-key")).not.toBe(live.fetch.header(0, "idempotency-key"));
  });

  it("runs parallel paid calls one at a time so the budget stays exact", async () => {
    const { tools, fetch, summary } = setup([enriched(), enriched()], { budget: 6 });
    const results = await Promise.allSettled([tools.enrich.execute(ada), tools.enrich.execute({ full_name: "Bob Smith", company_domain: "acme.com" })]);
    expect(results.map((r) => r.status)).toEqual(["fulfilled", "fulfilled"]);
    expect([fetch.body(0).budget_credits, fetch.body(1).budget_credits]).toEqual([6, 1]);
    expect(summary().spent).toBe(10);
  });

  it("refuses paid calls once the budget is spent", async () => {
    const { tools, fetch } = setup([enriched()], { budget: 5 });
    await tools.enrich.execute(ada);
    const error = await tools.enrich.execute({ full_name: "Bob Smith", company_domain: "acme.com" }).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(AgentToolRefusal);
    expect(error).toMatchObject({ code: "budget_spent", message: expect.stringMatching(/budget of 5 credits is spent/) });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("requires a filter on find_leads before calling the API", async () => {
    const { tools, fetch } = setup([]);
    await expect(tools.find_leads.execute({ audience: "Anyone" })).rejects.toMatchObject({ code: "missing_filter", message: expect.stringMatching(/at least one of titles/) });
    expect(fetch).not.toHaveBeenCalled();
  });

  it("refuses bad arguments with a readable reason and drops unknown ones", async () => {
    const { tools, fetch } = setup([drafted()], { dryRun: true });
    const error = await tools.create_campaign.execute({ name: "", leads: [], steps: [{ body: "x", wait_days: 1.5 }] } as never).catch((e: unknown) => e);
    expect(error).toMatchObject({ code: "invalid_input" });
    expect((error as Error).message).toBe(
      "Fix the arguments: name must have at least 1 character; leads must have at least 1 item; steps[0].wait_days must be a whole number.",
    );
    await expect(tools.launch_campaign.execute({ campaign_id: "not-a-uuid" })).rejects.toThrow(/campaign_id must be a UUID/);
    expect(fetch).not.toHaveBeenCalled();
    await tools.create_campaign.execute({ name: "Q4", leads: [{ email: "a@b.co", first_name: null, extra: 1 }], steps } as never);
    expect(fetch.body(0)).toEqual({ name: "Q4", leads: [{ email: "a@b.co" }], steps, dry_run: true });
  });

  it("drafts campaigns only for emails verify_email passed in this run", async () => {
    const { tools, summary } = setup([verified("ada@acme.com"), verified("bob@acme.com", "invalid"), drafted()]);
    await expect(tools.verify_email.execute({ email: "ada@acme.com" })).resolves.toMatchObject({ keep: true, budget_left: 98.75 });
    await expect(tools.verify_email.execute({ email: "bob@acme.com" })).resolves.toMatchObject({ keep: false });
    await expect(tools.create_campaign.execute({ name: "Q4", leads: [{ email: "bob@acme.com" }], steps })).rejects.toMatchObject({
      code: "unverified",
      message: "Verify these first, or drop them: bob@acme.com",
    });
    await expect(tools.create_campaign.execute({ name: "Q4", leads: [{ email: "ADA@acme.com" }], steps })).resolves.toMatchObject({ campaign_id: CAMPAIGN_ID, state: "draft" });
    expect(summary()).toMatchObject({ kept: 1, catchAll: 0, spent: 2.5 });
  });

  it("stops at the approval link and never sends a confirmation token", async () => {
    const { tools, fetch, summary, shouldStop } = setup([preview()]);
    const result = await tools.launch_campaign.execute({ campaign_id: CAMPAIGN_ID, confirmation_token: "tok_1" } as never);
    expect(result).toMatchObject({ status: "needs_confirmation", approval_url: APPROVAL_URL });
    expect(fetch.body(0)).toEqual({ campaign_id: CAMPAIGN_ID, dry_run: false });
    expect(summary().approvalUrl).toBe(APPROVAL_URL);
    expect(shouldStop()).toBe(true);
    for (const call of [() => tools.verify_email.execute({ email: "x@acme.com" }), () => tools.create_campaign.execute({ name: "Q4", leads: [{ email: "x@acme.com" }], steps })]) {
      await expect(call()).rejects.toMatchObject({ code: "approval_pending", message: expect.stringMatching(/waiting for approval/) });
    }
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("keeps the reason when the launch preview fails", async () => {
    const { tools, summary, shouldStop } = setup([apiError(422, "no_sending_capacity", "Connect mailboxes first")]);
    await expect(tools.launch_campaign.execute({ campaign_id: CAMPAIGN_ID })).rejects.toThrow(/Connect mailboxes/);
    expect(summary()).toMatchObject({ launchError: "no_sending_capacity: Connect mailboxes first", approvalUrl: null });
    expect(shouldStop()).toBe(true);
  });

  it("sends dry_run on every call and returns the plan", async () => {
    const { tools, fetch, summary } = setup([plan("3"), plan("5"), plan("1.25"), plan("0"), plan("0")], { dryRun: true });
    const results = [
      await tools.find_leads.execute({ audience: "Sales leaders", titles: ["Head of Sales"] }),
      await tools.enrich.execute(ada),
      await tools.verify_email.execute({ email: "ada@acme.com" }),
      // Nothing is verified in a dry run, so create_campaign takes any address.
      await tools.create_campaign.execute({ name: "Q4", leads: [{ email: "ada@acme.com" }], steps }),
      await tools.launch_campaign.execute({ campaign_id: CAMPAIGN_ID }),
    ];
    expect(results.map((r) => "dry_run" in r && r.would_cost_up_to)).toEqual(["3", "5", "1.25", "0", "0"]);
    for (let i = 0; i < 5; i++) expect(fetch.body(i)).toMatchObject({ dry_run: true });
    expect(summary()).toMatchObject({ spent: 0, approvalUrl: null });
  });
});

describe("createAgentRun", () => {
  it("applies the same rules for hook-based agents", () => {
    const run = createAgentRun({ budget: 100, runId: "run-hooks" });
    expect(run.ceiling()).toBe(100);
    expect(run.ceiling(40)).toBe(40);
    run.charge("5.000000");
    run.charge(1.25);
    expect(run.spent).toBe(6.25);
    expect(run.ceiling()).toBe(93.75);
    expect(run.recordVerification("Ada@Acme.com", "catch_all_valid")).toBe(true);
    expect(run.unverified(["ada@acme.com", "bob@acme.com"])).toEqual(["bob@acme.com"]);
    expect(run.refusal(true)).toBeNull();
    run.recordLaunch({ result: { status: "launched", campaign_id: "c1" } });
    expect(run.refusal(false)).toBeNull();
    run.recordLaunch({ status: "needs_confirmation", confirmation_token: "tok", approval_url: APPROVAL_URL });
    expect(run.approvalUrl).toBe(APPROVAL_URL);
    expect(run.refusal(false)?.code).toBe("approval_pending");
    expect(run.summary()).toEqual({ found: 0, kept: 1, catchAll: 1, spent: 6.25, approvalUrl: APPROVAL_URL, launchError: null });
  });

  it("never offers a ceiling above 2000 credits", () => {
    expect(createAgentRun({ budget: 5000 }).ceiling()).toBe(2000);
  });

  it("generates a run id when none is given", async () => {
    const run = createAgentRun({ budget: 1 });
    expect(run.runId).toMatch(/^[0-9a-f-]{36}$/);
    await expect(run.idempotencyKey("enrich", {})).resolves.toMatch(new RegExp(`^${run.runId}-enrich-[0-9a-f]{24}$`));
  });

  it("says what it needs when there is no Web Crypto", () => {
    vi.stubGlobal("crypto", undefined);
    expect(() => createAgentRun({ budget: 1 })).toThrow(/needs Web Crypto/);
  });
});

describe("toMicro", () => {
  it("reads decimal credit strings and numbers exactly", () => {
    expect(toMicro("1.250000") + toMicro("0.25")).toBe(1_500_000);
    expect(toMicro("3")).toBe(3_000_000);
    expect(toMicro(0.1 + 0.2)).toBe(300_000);
    expect(toMicro(undefined)).toBe(0);
    expect(toMicro("-1")).toBe(0);
    expect(toMicro("abc")).toBe(0);
  });
});

describe("argument schemas", () => {
  const schema = createAgentTools({ client: client(mockFetch()), budget: 1 }).tools.find_leads.inputSchema;

  it("implement Standard Schema with JSON Schema", () => {
    expect(schema["~standard"]).toMatchObject({ version: 1, vendor: "layrcake" });
    expect(schema["~standard"].validate({ audience: "x", titles: ["CFO"], limit: null })).toEqual({ value: { audience: "x", titles: ["CFO"], limit: 10 } });
    expect(schema["~standard"].validate({ titles: "CFO" })).toEqual({
      issues: [
        { message: "audience is required", path: ["audience"] },
        { message: "titles must be a list", path: ["titles"] },
      ],
    });
  });

  it("emit JSON Schema for each target and hand out a fresh copy", () => {
    const draft7 = schema["~standard"].jsonSchema.input({ target: "draft-07" });
    expect(draft7).toMatchObject({ $schema: "http://json-schema.org/draft-07/schema#", type: "object", required: ["audience"], additionalProperties: false });
    expect(schema["~standard"].jsonSchema.input({ target: "draft-2020-12" }).$schema).toBe("https://json-schema.org/draft/2020-12/schema");
    expect(schema["~standard"].jsonSchema.input({ target: "openapi-3.0" })).not.toHaveProperty("$schema");
    expect(() => schema["~standard"].jsonSchema.input({ target: "draft-04" })).toThrow(/no JSON Schema for target/);
    (draft7.properties as Record<string, unknown>).audience = "changed";
    expect(schema["~standard"].jsonSchema.input({ target: "draft-07" }).properties).toHaveProperty("audience.type", "string");
  });

  it("carry the argument type", () => {
    expectTypeOf(schema).toEqualTypeOf<AgentToolSchema<FindLeadsInput>>();
  });
});
