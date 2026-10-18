import type { ApiErrorCode } from "./generated/operations.js";
import type { Operation } from "./operation.js";

/** Codes the SDK itself uses when there is no API answer to report. */
export type ClientErrorCode = "connection_error" | "timeout" | "invalid_response" | "operation_timeout";

/**
 * Every code a LayrcakeError can carry. API codes come from the spec. A code the
 * server adds later still arrives as a plain string, and `http_<status>` is used
 * when an error response has no JSON body.
 */
export type LayrcakeErrorCode = ApiErrorCode | ClientErrorCode | (string & {});

export interface LayrcakeErrorInit {
  status?: number | undefined;
  code: LayrcakeErrorCode;
  message: string;
  details?: Record<string, unknown> | undefined;
  requestId?: string | null | undefined;
  idempotencyKey?: string | null | undefined;
  retryAfterSeconds?: number | undefined;
  headers?: Headers | undefined;
  cause?: unknown;
}

/** Base class for every error this SDK throws. */
export class LayrcakeError extends Error {
  override readonly name: string = "LayrcakeError";
  /** HTTP status. Undefined when no response arrived. */
  readonly status: number | undefined;
  /** Machine-readable code, such as `insufficient_credits`. Branch on this. */
  readonly code: LayrcakeErrorCode;
  /** Extra facts from the API, such as `reason` or `retry_after_seconds`. */
  readonly details: Record<string, unknown>;
  /** The API's request id. Quote it to support. */
  readonly requestId: string | null;
  /**
   * The Idempotency-Key the SDK sent. After a timeout or connection error,
   * retry with this key to get the original outcome without paying twice.
   */
  readonly idempotencyKey: string | null;
  /** How long the API asked you to wait before retrying, when it said. */
  readonly retryAfterSeconds: number | undefined;
  /** Response headers, when a response arrived. */
  readonly headers: Headers | undefined;

  constructor(init: LayrcakeErrorInit) {
    super(init.message, init.cause === undefined ? undefined : { cause: init.cause });
    this.status = init.status;
    this.code = init.code;
    this.details = init.details ?? {};
    this.requestId = init.requestId ?? null;
    this.idempotencyKey = init.idempotencyKey ?? null;
    this.retryAfterSeconds = init.retryAfterSeconds;
    this.headers = init.headers;
  }
}

/** 401. The API key is missing, wrong, revoked or expired. */
export class AuthenticationError extends LayrcakeError {
  override readonly name = "AuthenticationError";
}

/** 403. The key may not do this: a missing scope, a paused agent, or a disabled feature. */
export class PermissionDeniedError extends LayrcakeError {
  override readonly name = "PermissionDeniedError";
}

/**
 * A person has not approved this action, or the approval no longer stands
 * (declined, expired, superseded, cancelled or changed). The SDK never approves
 * anything. Send the person to the approval URL from the preview response.
 */
export class ApprovalError extends LayrcakeError {
  override readonly name = "ApprovalError";
}

/** 402, or a run or spend budget reached. Top up credits or raise the budget. */
export class InsufficientCreditsError extends LayrcakeError {
  override readonly name = "InsufficientCreditsError";
}

/** 400 or 422. The request is invalid. `details` usually says which field. */
export class ValidationError extends LayrcakeError {
  override readonly name = "ValidationError";
}

/** 404. The resource does not exist in this workspace, or the feature is off. */
export class NotFoundError extends LayrcakeError {
  override readonly name = "NotFoundError";
}

/** 409. A conflicting state, such as an idempotency key reused with different parameters. */
export class ConflictError extends LayrcakeError {
  override readonly name = "ConflictError";
}

/** 429. Too many requests. `retryAfterSeconds` says when to try again. */
export class RateLimitError extends LayrcakeError {
  override readonly name = "RateLimitError";
}

/** 5xx. The API or an upstream provider failed. */
export class ServerError extends LayrcakeError {
  override readonly name = "ServerError";
}

/** No response arrived: DNS, TLS, a reset connection, or an unreadable body. */
export class APIConnectionError extends LayrcakeError {
  override readonly name: string = "APIConnectionError";
}

/** The request took longer than `timeoutMs`. */
export class APITimeoutError extends APIConnectionError {
  override readonly name = "APITimeoutError";
}

/** waitForOperation ran out of time. The operation may still finish; `operation` is the last state seen. */
export class OperationTimeoutError extends LayrcakeError {
  override readonly name = "OperationTimeoutError";
  readonly operation: Operation;
  constructor(operation: Operation, timeoutMs: number) {
    super({
      code: "operation_timeout",
      message: `Operation ${operation.operation_id} was still ${operation.state} after ${timeoutMs} ms`,
    });
    this.operation = operation;
  }
}

type ErrorClass = new (init: LayrcakeErrorInit) => LayrcakeError;

const CLASS_BY_CODE: Partial<Record<string, ErrorClass>> = {
  unauthorized: AuthenticationError,
  confirmation_required: ApprovalError,
  approval_declined: ApprovalError,
  approval_expired: ApprovalError,
  approval_superseded: ApprovalError,
  approval_cancelled: ApprovalError,
  approval_changed: ApprovalError,
  payment_required: InsufficientCreditsError,
  insufficient_credits: InsufficientCreditsError,
  card_required: InsufficientCreditsError,
  payment_action_required: InsufficientCreditsError,
  run_budget_exceeded: InsufficientCreditsError,
  invalid_request: ValidationError,
  suppressed_recipient: ValidationError,
  not_found: NotFoundError,
  rate_limited: RateLimitError,
};

function classForStatus(status: number): ErrorClass {
  if (status === 401) return AuthenticationError;
  if (status === 402) return InsufficientCreditsError;
  if (status === 403) return PermissionDeniedError;
  if (status === 404) return NotFoundError;
  if (status === 409) return ConflictError;
  if (status === 429) return RateLimitError;
  if (status === 400 || status === 422) return ValidationError;
  if (status >= 500) return ServerError;
  return LayrcakeError;
}

const CODE_BY_STATUS: Record<number, ApiErrorCode> = {
  400: "invalid_request",
  401: "unauthorized",
  402: "payment_required",
  403: "forbidden",
  404: "not_found",
  422: "invalid_request",
  429: "rate_limited",
  500: "internal",
};

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);

/** Parses a Retry-After header: delta seconds or an HTTP date. */
export function parseRetryAfter(value: string | null, now = Date.now()): number | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (/^\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  const date = Date.parse(trimmed);
  if (Number.isNaN(date)) return undefined;
  return Math.max(0, (date - now) / 1000);
}

/** Builds the right error subclass from an HTTP error response. */
export function errorFromResponse(
  status: number,
  headers: Headers,
  bodyText: string,
  idempotencyKey: string | null,
): LayrcakeError {
  let parsed: unknown;
  try {
    parsed = bodyText ? JSON.parse(bodyText) : undefined;
  } catch {
    parsed = undefined;
  }
  const error = isRecord(parsed) && isRecord(parsed.error) ? parsed.error : undefined;
  const code = typeof error?.code === "string" ? error.code : CODE_BY_STATUS[status] ?? `http_${status}`;
  const details = isRecord(error?.details) ? error.details : {};
  let message = typeof error?.message === "string" ? error.message : `HTTP ${status}`;
  if (!error && bodyText && !/^\s*</.test(bodyText)) message += `: ${bodyText.trim().slice(0, 200)}`;
  const requestId =
    (typeof error?.request_id === "string" ? error.request_id : null) ??
    headers.get("x-layrcake-request-id") ??
    headers.get("x-request-id");
  const fromDetails = typeof details.retry_after_seconds === "number" ? details.retry_after_seconds : undefined;
  const retryAfterSeconds = parseRetryAfter(headers.get("retry-after")) ?? fromDetails;
  const Class = CLASS_BY_CODE[code] ?? classForStatus(status);
  return new Class({ status, code, message, details, requestId, idempotencyKey, retryAfterSeconds, headers });
}
