import { Layrcake } from "layrcake";
import { AgentToolRefusal, createAgentRun, type AgentRun, type AgentRunOptions, type AgentRunSummary } from "./run.js";
import { defineSchema, type AgentToolSchema, type JsonSchema } from "./schema.js";

/** The tools, in the order an agent uses them. */
export const AGENT_TOOL_NAMES = ["find_leads", "enrich", "verify_email", "create_campaign", "launch_campaign"] as const;
export type AgentToolName = (typeof AGENT_TOOL_NAMES)[number];
/** The tools that charge credits. Each carries budget_credits. */
export const PAID_TOOLS: readonly AgentToolName[] = ["find_leads", "enrich", "verify_email"];
/** The tool that ends a run: it returns an approval link, and a person takes it from there. */
export const STOP_TOOL = "launch_campaign" satisfies AgentToolName;

// ---- Arguments ----------------------------------------------------------------

export interface FindLeadsInput {
  /** Who you want, in plain words. */
  audience: string;
  titles?: string[];
  industries?: string[];
  locations?: string[];
  company_domains?: string[];
  company_headcount?: { min?: number; max?: number };
  /** Default 10, at most 25. */
  limit?: number;
}
export interface EnrichInput {
  full_name: string;
  company_domain: string;
}
export interface VerifyEmailInput {
  email: string;
}
export interface CampaignLead {
  email: string;
  first_name?: string;
  last_name?: string;
  company_name?: string;
  location?: string;
}
export interface CampaignStep {
  subject?: string;
  /** Plain text. Use {{first_name}}. */
  body: string;
  wait_days?: number;
}
export interface CreateCampaignInput {
  name: string;
  leads: CampaignLead[];
  steps: CampaignStep[];
}
export interface LaunchCampaignInput {
  campaign_id: string;
}

const strings = (maxItems: number, description: string): JsonSchema => ({ type: "array", items: { type: "string" }, maxItems, description });
const UUID_PATTERN = "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$";

/** The JSON Schema for each tool's arguments. */
export const AGENT_TOOL_PARAMETERS: Readonly<Record<AgentToolName, JsonSchema>> = {
  find_leads: {
    type: "object",
    properties: {
      audience: { type: "string", minLength: 1, description: "Who you want, in plain words" },
      titles: strings(50, 'Job titles, e.g. ["Head of Sales", "VP Sales"]'),
      industries: strings(50, 'LinkedIn industry names or everyday words, e.g. ["Software Development"]'),
      locations: strings(50, 'e.g. ["London, United Kingdom"]'),
      company_domains: strings(100, "Only people at these companies"),
      company_headcount: {
        type: "object",
        properties: { min: { type: "integer", minimum: 1 }, max: { type: "integer", minimum: 1 } },
        additionalProperties: false,
      },
      limit: { type: "integer", minimum: 1, maximum: 25, default: 10 },
    },
    required: ["audience"],
    additionalProperties: false,
  },
  enrich: {
    type: "object",
    properties: { full_name: { type: "string", minLength: 1 }, company_domain: { type: "string", minLength: 1 } },
    required: ["full_name", "company_domain"],
    additionalProperties: false,
  },
  verify_email: {
    type: "object",
    properties: { email: { type: "string", minLength: 3 } },
    required: ["email"],
    additionalProperties: false,
  },
  create_campaign: {
    type: "object",
    properties: {
      name: { type: "string", minLength: 1, maxLength: 120 },
      leads: {
        type: "array",
        minItems: 1,
        maxItems: 50,
        items: {
          type: "object",
          properties: {
            email: { type: "string" },
            first_name: { type: "string" },
            last_name: { type: "string" },
            company_name: { type: "string" },
            location: { type: "string", maxLength: 200 },
          },
          required: ["email"],
          additionalProperties: false,
        },
      },
      steps: {
        type: "array",
        minItems: 1,
        maxItems: 3,
        items: {
          type: "object",
          properties: {
            subject: { type: "string", minLength: 1, maxLength: 300, description: "Subject line" },
            body: { type: "string", minLength: 1, description: "Plain text. Use {{first_name}}." },
            wait_days: { type: "integer", minimum: 0, maximum: 60 },
          },
          required: ["body"],
          additionalProperties: false,
        },
      },
    },
    required: ["name", "leads", "steps"],
    additionalProperties: false,
  },
  launch_campaign: {
    type: "object",
    properties: { campaign_id: { type: "string", format: "uuid", pattern: UUID_PATTERN } },
    required: ["campaign_id"],
    additionalProperties: false,
  },
};

/** What each tool tells the model, prices included. Prices: https://docs.layrcake.dev/pricing.html */
export const AGENT_TOOL_DESCRIPTIONS: Readonly<Record<AgentToolName, string>> = {
  find_leads:
    "Find people who match an audience. Send audience plus at least one of titles, industries, locations or company_domains. 0.25 credits per person found, 3 minimum.",
  enrich: "Find one person's work email from their full name and company domain. 5 credits when found, free when not.",
  verify_email: "Check that an address can receive mail. Keep valid and catch_all_valid. Drop everything else. 1.25 credits.",
  create_campaign: "Save a draft campaign for people whose emails passed verify_email. Drafts never send. Free.",
  launch_campaign: "Ask a person to approve the draft. Sends nothing. Returns a preview and an approval link. Call it once, last.",
};

// ---- Results ------------------------------------------------------------------

/** What a dry-run call returns instead of data. Nothing is charged. */
export interface DryRunPlan {
  dry_run: true;
  would_cost_up_to: string;
  would_exceed: string[];
  warnings: unknown[];
}
export interface FoundLead {
  full_name: string | null;
  title: string | null;
  company_name: string | null;
  company_domain: string | null;
  location: string | null;
}
/** Billing facts on a paid tool's result. */
export interface ChargedOutput {
  credits_charged: string | undefined;
  budget_left: number;
}
export type FindLeadsOutput = DryRunPlan | ({ leads: FoundLead[]; total_found: number | null } & ChargedOutput);
export type EnrichOutput = DryRunPlan | ({ work_email: string | null } & ChargedOutput);
export type VerifyEmailOutput = DryRunPlan | ({ email: string; status: string; keep: boolean } & ChargedOutput);
export type CreateCampaignOutput = DryRunPlan | { campaign_id: string; state: string; removed: unknown };
export type LaunchCampaignOutput = DryRunPlan | { status: string; approval_url: string | null; preview: Record<string, unknown> };

// ---- Tools --------------------------------------------------------------------

/** One framework-neutral tool. Framework packages wrap these. */
export interface AgentTool<I, O> {
  readonly name: AgentToolName;
  readonly description: string;
  /** Standard Schema with JSON Schema. The AI SDK and Mastra take it as inputSchema. */
  readonly inputSchema: AgentToolSchema<I>;
  /** The plain JSON Schema, for function-calling APIs that take one. */
  readonly parameters: JsonSchema;
  /** Validates the arguments, applies the run rules and calls the API. Throws AgentToolRefusal or LayrcakeError. */
  execute(input: I): Promise<O>;
}

export interface AgentTools {
  find_leads: AgentTool<FindLeadsInput, FindLeadsOutput>;
  enrich: AgentTool<EnrichInput, EnrichOutput>;
  verify_email: AgentTool<VerifyEmailInput, VerifyEmailOutput>;
  create_campaign: AgentTool<CreateCampaignInput, CreateCampaignOutput>;
  launch_campaign: AgentTool<LaunchCampaignInput, LaunchCampaignOutput>;
}

export interface AgentToolsOptions extends AgentRunOptions {
  /** A Layrcake client. Defaults to `new Layrcake()`, which reads LAYRCAKE_API_KEY. */
  client?: Layrcake;
}

export interface AgentToolKit {
  tools: AgentTools;
  /** The run state the tools share. */
  run: AgentRun;
  /** What the run did so far. */
  summary(): AgentRunSummary;
  /** True once launch_campaign has been called. Use it to end an agent loop at the approval link. */
  shouldStop(): boolean;
}

type Plan = { credits_estimate: string; would_exceed: string[]; warnings: unknown[] };
const isPlan = (result: unknown): result is { plan: Plan } => typeof result === "object" && result !== null && "plan" in result;
const planOutput = ({ plan }: { plan: Plan }): DryRunPlan => ({
  dry_run: true,
  would_cost_up_to: plan.credits_estimate,
  would_exceed: plan.would_exceed,
  warnings: plan.warnings,
});

function parse<T>(schema: AgentToolSchema<T>, input: unknown): T {
  const result = schema["~standard"].validate(input);
  if (result.issues) throw new AgentToolRefusal("invalid_input", `Fix the arguments: ${result.issues.map((issue) => issue.message).join("; ")}.`);
  return result.value;
}

function define<I, O>(name: AgentToolName, execute: (input: I) => Promise<O>): AgentTool<I, O> {
  const parameters = AGENT_TOOL_PARAMETERS[name];
  const inputSchema = defineSchema<I>(parameters);
  return { name, description: AGENT_TOOL_DESCRIPTIONS[name], inputSchema, parameters, execute: async (input) => execute(parse(inputSchema, input)) };
}

/**
 * The Layrcake agent tools for one run, with no framework attached.
 *
 * The rules from https://layrcake.dev/agents.md are enforced in code: each paid call
 * carries budget_credits set to what is left of `budget` and paid calls run one at a
 * time, `dryRun` reaches every call, every call carries an idempotency key,
 * create_campaign takes only addresses verify_email passed in this run, and
 * launch_campaign has no confirmation_token argument, so a model can ask for approval
 * but never give it. After launch_campaign returns an approval link, every tool refuses.
 */
export function createAgentTools({ client, ...options }: AgentToolsOptions): AgentToolKit {
  const run = createAgentRun(options);
  const api = client ?? new Layrcake();
  const { dryRun } = run;
  const charged = (layrcake: { credits_charged?: string } | null | undefined): ChargedOutput => ({ credits_charged: layrcake?.credits_charged, budget_left: run.left });

  const tools: AgentTools = {
    find_leads: define("find_leads", async (input: FindLeadsInput): Promise<FindLeadsOutput> => {
      if (!input.titles?.length && !input.industries?.length && !input.locations?.length && !input.company_domains?.length) {
        throw new AgentToolRefusal("missing_filter", "Add at least one of titles, industries, locations or company_domains.");
      }
      const idempotencyKey = await run.idempotencyKey("find_leads", input);
      const { result, layrcake } = await run.paid((ceiling) => api.findLeads({ ...input, budget_credits: ceiling, dry_run: dryRun }, { idempotencyKey }));
      if (isPlan(result)) return planOutput(result);
      run.recordFound(result.leads.length);
      const leads = result.leads.map(({ full_name, title, company_name, company_domain, location }) => ({ full_name, title, company_name, company_domain, location }));
      return { leads, total_found: result.total_found, ...charged(layrcake) };
    }),

    enrich: define("enrich", async (person: EnrichInput): Promise<EnrichOutput> => {
      const idempotencyKey = await run.idempotencyKey("enrich", person);
      // Only work_email: mobile lookups cost more, and these tools only email.
      const { result, layrcake } = await run.paid((ceiling) => api.enrich({ person, want: ["work_email"], budget_credits: ceiling, dry_run: dryRun }, { idempotencyKey }));
      if (isPlan(result)) return planOutput(result);
      return { work_email: result.contact?.work_email ?? null, ...charged(layrcake) };
    }),

    verify_email: define("verify_email", async ({ email }: VerifyEmailInput): Promise<VerifyEmailOutput> => {
      const idempotencyKey = await run.idempotencyKey("verify_email", email);
      const { result, layrcake } = await run.paid((ceiling) => api.verifyEmail({ email, budget_credits: ceiling, dry_run: dryRun }, { idempotencyKey }));
      if (isPlan(result)) return planOutput(result);
      const keep = run.recordVerification(email, result.status);
      return { email, status: result.status, keep, ...charged(layrcake) };
    }),

    create_campaign: define("create_campaign", async (input: CreateCampaignInput): Promise<CreateCampaignOutput> => {
      const refusal = run.refusal(false);
      if (refusal) throw refusal;
      const unverified = run.unverified(input.leads.map((lead) => lead.email));
      // A dry run verifies nothing, so it cannot hold the draft to verified addresses.
      if (!dryRun && unverified.length) throw new AgentToolRefusal("unverified", `Verify these first, or drop them: ${unverified.join(", ")}`);
      const { result } = await api.createCampaign({ ...input, dry_run: dryRun }, { idempotencyKey: await run.idempotencyKey("create_campaign", input) });
      if (isPlan(result)) return planOutput(result);
      return { campaign_id: result.campaign_id, state: String(result.state), removed: result.removed as unknown };
    }),

    launch_campaign: define("launch_campaign", async ({ campaign_id }: LaunchCampaignInput): Promise<LaunchCampaignOutput> => {
      run.markLaunchAttempted();
      const refusal = run.refusal(false);
      if (refusal) throw refusal;
      // Only campaign_id and dry_run are sent. There is no way to pass confirmation_token from here.
      const response = await api.launchCampaign({ campaign_id, dry_run: dryRun }, { idempotencyKey: await run.idempotencyKey("launch_campaign", campaign_id) }).catch((error: unknown) => {
        // An agent loop usually stops after this tool, so keep the reason for the final report.
        run.recordLaunchError(error);
        throw error;
      });
      if (isPlan(response.result)) return planOutput(response.result);
      const approvalUrl = run.recordLaunch(response);
      return { status: String(response.result.status), approval_url: approvalUrl, preview: response.result as Record<string, unknown> };
    }),
  };

  return { tools, run, summary: () => run.summary(), shouldStop: () => run.launchAttempted };
}
