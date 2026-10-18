export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/** Wire facts for one operation. Generated from the spec into OPERATIONS. */
export interface OperationSpec {
  readonly id: string;
  readonly method: HttpMethod;
  readonly path: string;
  /** Whether the operation takes an Idempotency-Key header. */
  readonly idempotency: "required" | "optional" | "none";
  /**
   * unwrap: a `{ result, layrcake? }` body is unwrapped, any other body is the result.
   * flat: the body is always the result (llm). text: a text body (CSV).
   */
  readonly response: "unwrap" | "flat" | "text";
  /** Body fields this SDK refuses, mapped to the reason. */
  readonly unsupported?: Readonly<Record<string, string>>;
}

export interface RequestInput {
  path?: Record<string, string>;
  query?: object;
  body?: object;
}

/** Per-call options. Every method takes these as its last argument. */
export interface RequestOptions {
  /**
   * Idempotency-Key for this call. When omitted on an endpoint that takes one,
   * the SDK generates a UUID and reuses it across its automatic retries.
   * Pass your own to make a retry after a crash or timeout safe.
   */
  idempotencyKey?: string;
  /** Abort the call. */
  signal?: AbortSignal;
  /** Per-attempt timeout. Overrides the client setting. */
  timeoutMs?: number;
  /** Automatic retries. Overrides the client setting. */
  maxRetries?: number;
  /** Extra headers, such as X-Layrcake-Run. */
  headers?: Record<string, string>;
}

/** What every method resolves to. */
export interface LayrcakeResponse<TResult, TMeta> {
  /** The outcome. */
  result: TResult;
  /**
   * Billing facts for metered calls: request_id, credits_charged and
   * credits_available, as decimal strings. Null when the endpoint returns none.
   */
  layrcake: TMeta;
  /** The API's request id, when it gave one. */
  requestId: string | null;
}
