import { getApproval, LayrcakeError } from "layrcake";

const MICRO = 1_000_000;

/** The API refuses a budget_credits above this on a single call. */
export const MAX_CALL_CEILING = 2000;

/** verify_email answers that are safe to send to. Everything else is dropped. */
export const SENDABLE_STATUSES: readonly string[] = ["valid", "catch_all_valid"];

/** Why a tool call was refused before it reached the API. */
export type AgentToolRefusalCode = "approval_pending" | "budget_spent" | "unverified" | "missing_filter" | "invalid_input";

/**
 * A call the agent tools refused before it reached the API. Nothing was charged.
 * The message is written for the model: it says what to do next.
 */
export class AgentToolRefusal extends Error {
  override readonly name = "AgentToolRefusal";
  readonly code: AgentToolRefusalCode;

  constructor(code: AgentToolRefusalCode, message: string) {
    super(message);
    this.code = code;
  }
}

/**
 * Credits arrive as decimal strings ("1.250000"). This counts them in whole
 * micro-credits so a running total never drifts. Numbers are accepted too.
 * Anything unreadable counts as 0.
 */
export function toMicro(credits: unknown): number {
  if (typeof credits === "number") return Number.isFinite(credits) && credits > 0 ? Math.round(credits * MICRO) : 0;
  const match = /^(\d+)(?:\.(\d{1,6}))?$/.exec(String(credits ?? "0").trim());
  return match ? Number(match[1]) * MICRO + Number((match[2] ?? "").padEnd(6, "0")) : 0;
}

interface WebCrypto {
  randomUUID?: () => string;
  subtle?: { digest(algorithm: string, data: Uint8Array): Promise<ArrayBuffer> };
}

function webCrypto(): Required<WebCrypto> {
  const c = (globalThis as { crypto?: WebCrypto }).crypto;
  if (!c?.subtle || !c.randomUUID) {
    throw new Error(
      "layrcake/agent-tools needs Web Crypto (globalThis.crypto). Use Node 20 or later, Bun, Deno or an edge runtime. On Node 18, start node with --experimental-global-webcrypto.",
    );
  }
  return c as Required<WebCrypto>;
}

async function sha256Hex(text: string): Promise<string> {
  const digest = await webCrypto().subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export interface AgentRunOptions {
  /** Credit ceiling for the whole run. Every paid call is capped at what is left. 1 credit is $0.01. */
  budget: number;
  /** Send dry_run: true on every call. Each call returns a plan with its cost and charges nothing. */
  dryRun?: boolean;
  /** Stable per run. Idempotency keys derive from it, so a repeated call is never charged twice. Defaults to a random UUID. */
  runId?: string;
}

export interface AgentRunSummary {
  /** People returned by find_leads. */
  found: number;
  /** Addresses verify_email marked valid or catch_all_valid. */
  kept: number;
  /** How many of the kept addresses were catch_all_valid. */
  catchAll: number;
  /** Credits charged so far in this run. */
  spent: number;
  /** Where a person approves the campaign. Set once launch_campaign returns a preview. */
  approvalUrl: string | null;
  /** Why launch_campaign failed, if it did. */
  launchError: string | null;
}

/** A paid call's response. Only the billing facts are read. */
type Charged = { layrcake?: { credits_charged?: unknown } | null };

/**
 * The state of one agent run, shared by every tool in it. Framework packages and
 * hooks use it to apply the same rules: one budget, verify before a campaign,
 * stop at the approval link.
 */
export interface AgentRun {
  readonly budget: number;
  readonly dryRun: boolean;
  readonly runId: string;
  /** Credits charged so far. */
  readonly spent: number;
  /** Credits left in the budget. */
  readonly left: number;
  /** Where a person approves the campaign, once launch_campaign has asked. */
  readonly approvalUrl: string | null;
  /** True once launch_campaign has been called, whatever it returned. */
  readonly launchAttempted: boolean;
  /**
   * Why the next call must not run, or null when it may. Once a campaign waits for
   * approval every call is refused. A paid call is also refused when the budget is spent.
   */
  refusal(paid: boolean): AgentToolRefusal | null;
  /** budget_credits for the next paid call: what is left, at most 2000, rounded down to the cent. */
  ceiling(requested?: number): number;
  /** Adds a call's credits_charged (a decimal string or a number) to the total. */
  charge(credits: unknown): void;
  recordFound(count: number): void;
  /** Records a verify_email answer. Returns true when the address is safe to send to. */
  recordVerification(email: string, status: string): boolean;
  /** The addresses in the list that have not passed verify_email in this run. */
  unverified(emails: readonly string[]): string[];
  /** Marks that launch_campaign was called, so an agent loop can stop. */
  markLaunchAttempted(): void;
  /** Reads a launch_campaign answer. After an approval request every call is refused. */
  recordLaunch(response: unknown): string | null;
  /** Keeps the reason a launch failed, for the final report. */
  recordLaunchError(error: unknown): void;
  /** `${runId}-${tool}-${hash}`: the same call in the same run always gets the same key. */
  idempotencyKey(tool: string, input: unknown): Promise<string>;
  /**
   * Runs a paid call. Calls run one at a time, even when a model calls tools in
   * parallel, so each sees the exact budget left. Refuses after an approval request
   * or once the budget is spent, then counts what the call charged.
   */
  paid<T extends Charged>(call: (ceiling: number) => Promise<T>): Promise<T>;
  summary(): AgentRunSummary;
}

/** Creates the state for one agent run. Create one per run, never share it between runs. */
export function createAgentRun({ budget, dryRun = false, runId }: AgentRunOptions): AgentRun {
  if (!(typeof budget === "number" && budget > 0 && Number.isFinite(budget))) throw new Error("budget must be a positive number of credits.");
  const id = runId ?? webCrypto().randomUUID();
  const budgetMicro = Math.round(budget * MICRO);
  const state = {
    spentMicro: 0,
    found: 0,
    kept: 0,
    catchAll: 0,
    approvalPending: false,
    approvalUrl: null as string | null,
    launchAttempted: false,
    launchError: null as string | null,
    verified: new Set<string>(),
  };
  const leftMicro = () => budgetMicro - state.spentMicro;
  let queue: Promise<unknown> = Promise.resolve();

  const run: AgentRun = {
    budget,
    dryRun,
    runId: id,
    get spent() {
      return state.spentMicro / MICRO;
    },
    get left() {
      return leftMicro() / MICRO;
    },
    get approvalUrl() {
      return state.approvalUrl;
    },
    get launchAttempted() {
      return state.launchAttempted;
    },
    refusal(paid) {
      if (state.approvalPending) return new AgentToolRefusal("approval_pending", "The campaign is waiting for approval. Stop and report the approval link.");
      if (paid && leftMicro() < MICRO / 100) return new AgentToolRefusal("budget_spent", `The run budget of ${budget} credits is spent. Stop and report.`);
      return null;
    },
    ceiling(requested) {
      const limit = requested !== undefined && Number.isFinite(requested) && requested > 0 ? requested : Infinity;
      return Math.floor(Math.min(leftMicro() / MICRO, MAX_CALL_CEILING, limit) * 100) / 100;
    },
    charge(credits) {
      state.spentMicro += toMicro(credits);
    },
    recordFound(count) {
      state.found += count;
    },
    recordVerification(email, status) {
      const keep = SENDABLE_STATUSES.includes(status);
      const address = email.trim().toLowerCase();
      if (keep && !state.verified.has(address)) {
        state.verified.add(address);
        state.kept += 1;
        if (status === "catch_all_valid") state.catchAll += 1;
      }
      return keep;
    },
    unverified(emails) {
      return emails.filter((email) => !state.verified.has(String(email).trim().toLowerCase()));
    },
    markLaunchAttempted() {
      state.launchAttempted = true;
    },
    recordLaunch(response) {
      const approval = getApproval(response);
      if (approval) {
        state.approvalPending = true;
        state.approvalUrl = approval.approvalUrl ?? state.approvalUrl;
      }
      return state.approvalUrl;
    },
    recordLaunchError(error) {
      if (error instanceof LayrcakeError) state.launchError = `${error.code}: ${error.message}`;
      else if (error instanceof Error) state.launchError = error.message;
    },
    async idempotencyKey(tool, input) {
      return `${id}-${tool}-${(await sha256Hex(JSON.stringify({ input, dryRun }))).slice(0, 24)}`;
    },
    paid(call) {
      const next = queue.then(async () => {
        const refusal = run.refusal(true);
        if (refusal) throw refusal;
        const response = await call(run.ceiling());
        run.charge(response.layrcake?.credits_charged);
        return response;
      });
      queue = next.catch(() => undefined);
      return next;
    },
    summary() {
      return {
        found: state.found,
        kept: state.kept,
        catchAll: state.catchAll,
        spent: state.spentMicro / MICRO,
        approvalUrl: state.approvalUrl,
        launchError: state.launchError,
      };
    },
  };
  return run;
}
