import { afterEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { OperationTimeoutError, getApproval, isApprovalRequired, type LaunchCampaignResponse } from "../src/index.js";
import { client, json, meta, mockFetch } from "./helpers.js";

afterEach(() => vi.useRealTimers());

const op = (state: string, extra: Record<string, unknown> = {}) => ({
  operation_id: "6f1c1c1e-0000-4000-8000-000000000001",
  kind: "research_company",
  state,
  progress: { total: 3, done: 1 },
  result: null,
  error: null,
  created_at: "2026-10-18T12:00:00Z",
  completed_at: null,
  ...extra,
});

describe("waitForOperation", () => {
  it("polls until a terminal state and returns the operation", async () => {
    vi.useFakeTimers();
    // Live bodies are wrapped: { result: <operation> }.
    const fetch = mockFetch(json({ result: op("queued") }), json({ result: op("running") }), json({ result: op("succeeded", { result: { brief: "ok" } }) }));
    const pending = client(fetch).waitForOperation("op-1", { intervalMs: 1_000 });
    await vi.advanceTimersByTimeAsync(999);
    expect(fetch).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1);
    expect(fetch).toHaveBeenCalledTimes(2);
    await vi.advanceTimersByTimeAsync(1_000);
    const done = await pending;
    expect(done.state).toBe("succeeded");
    expect(done.result).toEqual({ brief: "ok" });
    expect(fetch.url(0)).toBe("https://api.layrcake.dev/v1/operations/op-1");
    expect(fetch.init(0).method).toBe("GET");
  });

  it.each(["failed", "cancelled", "partially_succeeded", "unknown"])("returns on %s without throwing", async (state) => {
    const fetch = mockFetch(json(op(state, { error: state === "failed" ? "provider failed" : null })));
    const done = await client(fetch).waitForOperation("op-1");
    expect(done.state).toBe(state);
  });

  it("throws OperationTimeoutError with the last state seen", async () => {
    vi.useFakeTimers();
    const fetch = mockFetch(json({ result: op("running") }), json({ result: op("running") }), json({ result: op("running") }));
    const pending = client(fetch).waitForOperation("op-1", { intervalMs: 1_000, timeoutMs: 2_000 }).catch((e: unknown) => e);
    await vi.advanceTimersByTimeAsync(2_000);
    const err = await pending;
    expect(err).toBeInstanceOf(OperationTimeoutError);
    expect((err as OperationTimeoutError).operation.state).toBe("running");
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  it("stops when the signal aborts", async () => {
    vi.useFakeTimers();
    const controller = new AbortController();
    const fetch = mockFetch(json(op("running")), json(op("running")));
    const pending = client(fetch).waitForOperation("op-1", { signal: controller.signal }).catch((e: unknown) => e);
    await vi.advanceTimersByTimeAsync(10);
    controller.abort();
    const err = await pending;
    expect((err as Error).name).toBe("AbortError");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("approvals", () => {
  const launchPreview = {
    status: "needs_confirmation",
    campaign_id: "c1",
    confirmation_token: "tok_1",
    approval_url: "https://console.layrcake.dev/approvals?id=tok_1",
    approval_email: "queued",
  };

  it("returns the approval URL and token from a preview", async () => {
    const fetch = mockFetch(json({ result: launchPreview, layrcake: meta }));
    const res = await client(fetch).launchCampaign({ campaign_id: "c1" });
    expect(getApproval(res)).toEqual({
      confirmationToken: "tok_1",
      approvalUrl: "https://console.layrcake.dev/approvals?id=tok_1",
      approvalEmail: "queued",
    });
    expect(isApprovalRequired(res)).toBe(true);
    if (isApprovalRequired(res)) {
      expectTypeOf(res.result.confirmation_token).toEqualTypeOf<string>();
    }
  });

  it("accepts a bare result too", () => {
    expect(getApproval({ status: "quote", confirmation_token: "t", quote: {} })?.confirmationToken).toBe("t");
  });

  it("returns a null URL when the API sends none", () => {
    expect(getApproval({ result: { status: "needs_confirmation", confirmation_token: "t" } })?.approvalUrl).toBeNull();
  });

  it.each([
    ["a launched campaign", { status: "launched", campaign_id: "c1", confirmation_token: "tok_1" }],
    ["a sent reply", { status: "sent", sent_reply_id: "r1" }],
    ["a dry run", { dry_run: true, advisory: true, plan: {} }],
    ["a 202 approval state", { status: "approved", approval: { id: "a1" } }],
    ["no result", null],
  ])("is null for %s", (_label, result) => {
    expect(getApproval({ result })).toBeNull();
    expect(isApprovalRequired({ result })).toBe(false);
  });

  it("narrows the launch result type", () => {
    const res = {} as LaunchCampaignResponse;
    if (isApprovalRequired(res)) {
      expectTypeOf(res.result.confirmation_token).toEqualTypeOf<string>();
      expectTypeOf(res.result.status).toEqualTypeOf<"needs_confirmation" | "launched">();
    }
  });
});
