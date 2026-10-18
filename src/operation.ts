/**
 * The body of GET /v1/operations/{id}.
 *
 * The OpenAPI spec does not describe this response yet, so this type is written
 * by hand from the API's behaviour. It is the one hand-written response type.
 */
export interface Operation {
  operation_id: string;
  /** The verb that started it, such as `research_company` or `prospect_picture`. */
  kind: string;
  state: OperationState;
  progress: { total: number | null; done: number | null };
  /** The verb's output once the operation finishes. Shape depends on `kind`. */
  result: unknown;
  /** A short public reason when the operation failed, otherwise null. */
  error: string | null;
  created_at: string;
  completed_at: string | null;
  /** Per-part progress for operations made of parts, such as a prospect picture. */
  items?: Array<{ key: string; state: string; credits_charged?: string }>;
  /** One page of rows for operations that return lists. Pass `next_cursor` back as `cursor`. */
  page?: Record<string, unknown>;
}

/**
 * Where an operation is. `unknown` means a provider's outcome could not be
 * confirmed and Layrcake is reconciling it. Do not repeat the action while an
 * operation is `unknown`.
 */
export type OperationState =
  | "queued"
  | "running"
  | "waiting_external"
  | "succeeded"
  | "partially_succeeded"
  | "failed"
  | "cancelled"
  | "unknown"
  | (string & {});

/** States after which polling stops. */
export const TERMINAL_OPERATION_STATES: readonly string[] = [
  "succeeded",
  "partially_succeeded",
  "failed",
  "cancelled",
  "unknown",
];

export function isTerminalOperationState(state: string): boolean {
  return TERMINAL_OPERATION_STATES.includes(state);
}

export interface WaitForOperationOptions {
  /** Time between polls. Default 2000 ms. */
  intervalMs?: number;
  /** Give up after this long and throw OperationTimeoutError. Default 600000 ms (10 minutes). */
  timeoutMs?: number;
  /** Abort the wait. */
  signal?: AbortSignal;
}
