/** What a person needs to approve before an external action runs. */
export interface ApprovalRequest {
  /** Single-use token. Send it back on the same call once a person approves. */
  confirmationToken: string;
  /** Console page where a signed-in person approves. Null if the API sent none. */
  approvalUrl: string | null;
  /** Whether an approval email went out: queued, reused, suppressed_rate_limit or no_approver. */
  approvalEmail: string | null;
}

/** A response whose result asks for human approval. */
export type NeedsApproval<T extends { result: unknown }> = T & {
  result: Extract<T["result"], { confirmation_token?: string }> & {
    confirmation_token: string;
    approval_url?: string;
  };
};

/** Result statuses that mean the action already ran, even if a token is echoed back. */
const DONE_STATUSES = new Set(["launched", "purchased", "sent", "approved", "in_progress"]);

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);

function resultOf(input: unknown): unknown {
  return isRecord(input) && "result" in input ? input.result : input;
}

/**
 * Returns what a person must approve, or null when the call needs no approval.
 * Accepts a method's response or its `result`.
 *
 * The SDK never approves anything. Show `approvalUrl` to a person. After they
 * approve, repeat the call with `confirmation_token` set to `confirmationToken`.
 */
export function getApproval(input: unknown): ApprovalRequest | null {
  const result = resultOf(input);
  if (!isRecord(result)) return null;
  const token = result.confirmation_token;
  if (typeof token !== "string" || token.length === 0) return null;
  if (typeof result.status === "string" && DONE_STATUSES.has(result.status)) return null;
  return {
    confirmationToken: token,
    approvalUrl: typeof result.approval_url === "string" ? result.approval_url : null,
    approvalEmail: typeof result.approval_email === "string" ? result.approval_email : null,
  };
}

/** True when the response is a preview waiting for a person. Narrows the result type. */
export function isApprovalRequired<T extends { result: unknown }>(response: T): response is NeedsApproval<T> {
  return getApproval(response) !== null;
}
