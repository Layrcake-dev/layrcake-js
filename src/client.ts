import type { LayrcakeResponse, OperationSpec, RequestInput, RequestOptions } from "./core.js";
import {
  APIConnectionError,
  APITimeoutError,
  LayrcakeError,
  OperationTimeoutError,
  errorFromResponse,
} from "./errors.js";
import { LayrcakeMethods } from "./generated/operations.js";
import { isTerminalOperationState, type Operation, type WaitForOperationOptions } from "./operation.js";
import { VERSION } from "./version.js";

export const DEFAULT_BASE_URL = "https://api.layrcake.dev";

export interface LayrcakeOptions {
  /** Your API key. Defaults to the LAYRCAKE_API_KEY environment variable. */
  apiKey?: string;
  /** Defaults to LAYRCAKE_BASE_URL, then https://api.layrcake.dev. */
  baseUrl?: string;
  /** Automatic retries for transient failures. Default 2. */
  maxRetries?: number;
  /** Per-attempt timeout in milliseconds. Default 60000. */
  timeoutMs?: number;
  /** A fetch implementation. Defaults to the global fetch. */
  fetch?: typeof fetch;
  /** Headers sent with every request. */
  defaultHeaders?: Record<string, string>;
}

/** Statuses worth retrying. Every other 4xx is final. */
const RETRY_STATUSES = new Set([429, 502, 503, 504]);
/** A server asking for a longer wait than this is not retried automatically. */
const MAX_RETRY_AFTER_MS = 60_000;
const INITIAL_BACKOFF_MS = 500;
const MAX_BACKOFF_MS = 8_000;

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);

/**
 * A `{ result }` or `{ result, layrcake }` body. Checked on every JSON response
 * except llm, whatever the spec says, because some endpoints wrap bodies the
 * spec describes as flat. A body with any other key (such as a 202 approval
 * state) is returned whole.
 */
function isEnvelope(body: unknown): body is { result: unknown; layrcake?: unknown } {
  return isRecord(body) && "result" in body && Object.keys(body).every((k) => k === "result" || k === "layrcake");
}

function readEnv(name: string): string | undefined {
  const g = globalThis as { process?: { env?: Record<string, string | undefined> }; Deno?: { env?: { get?(k: string): string | undefined } } };
  try {
    const v = g.process?.env?.[name];
    if (typeof v === "string" && v.trim()) return v.trim();
  } catch {
    // Some runtimes throw when env access is not allowed.
  }
  try {
    const v = g.Deno?.env?.get?.(name);
    if (typeof v === "string" && v.trim()) return v.trim();
  } catch {
    // Deno throws without --allow-env.
  }
  return undefined;
}

/** RFC 4122 v4. Uses Web Crypto when present (Node 19+, Bun, Deno, edge, browsers). */
function uuid(): string {
  const c = (globalThis as { crypto?: { randomUUID?: () => string; getRandomValues?: <T extends Uint8Array>(a: T) => T } }).crypto;
  if (c?.randomUUID) return c.randomUUID();
  const bytes = new Uint8Array(16);
  if (c?.getRandomValues) c.getRandomValues(bytes);
  // Node 18 has no global Web Crypto. An idempotency key must be unique, not secret.
  else for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  bytes[6] = (bytes[6]! & 0x0f) | 0x40;
  bytes[8] = (bytes[8]! & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function abortError(signal: AbortSignal): unknown {
  return signal.reason ?? new DOMException("This operation was aborted", "AbortError");
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(abortError(signal));
    const onAbort = () => {
      clearTimeout(timer);
      reject(abortError(signal!));
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

function backoffMs(retry: number): number {
  const base = Math.min(INITIAL_BACKOFF_MS * 2 ** retry, MAX_BACKOFF_MS);
  return base * (1 - Math.random() * 0.25);
}

function nonNegativeInt(value: number, name: string): number {
  if (!Number.isInteger(value) || value < 0) throw new TypeError(`${name} must be a non-negative integer`);
  return value;
}

function positive(value: number, name: string): number {
  if (!Number.isFinite(value) || value <= 0) throw new TypeError(`${name} must be a positive number`);
  return value;
}

/**
 * The Layrcake API client.
 *
 * ```ts
 * const layrcake = new Layrcake(); // reads LAYRCAKE_API_KEY
 * const { result } = await layrcake.verifyEmail({ email: "ada@example.com" });
 * ```
 */
export class Layrcake extends LayrcakeMethods {
  static readonly VERSION = VERSION;

  readonly baseUrl: string;
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly #apiKey: string;
  readonly #fetch: typeof fetch;
  readonly #defaultHeaders: Record<string, string>;

  constructor(options: LayrcakeOptions = {}) {
    super();
    const apiKey = options.apiKey ?? readEnv("LAYRCAKE_API_KEY");
    if (!apiKey) {
      throw new LayrcakeError({
        code: "unauthorized",
        message:
          "No Layrcake API key. Pass new Layrcake({ apiKey }) or set the LAYRCAKE_API_KEY environment variable. Get a key at https://layrcake.dev.",
      });
    }
    const f = options.fetch ?? (globalThis as { fetch?: typeof fetch }).fetch;
    if (typeof f !== "function") {
      throw new TypeError("No fetch found. Use Node 18 or later, or pass new Layrcake({ fetch }).");
    }
    this.#apiKey = apiKey;
    this.#fetch = f;
    this.#defaultHeaders = { ...options.defaultHeaders };
    this.baseUrl = (options.baseUrl ?? readEnv("LAYRCAKE_BASE_URL") ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    this.maxRetries = nonNegativeInt(options.maxRetries ?? 2, "maxRetries");
    this.timeoutMs = positive(options.timeoutMs ?? 60_000, "timeoutMs");
  }

  /**
   * Polls GET /v1/operations/{id} until the operation reaches a terminal state
   * (succeeded, partially_succeeded, failed, cancelled or unknown) and returns it.
   * It does not throw on `failed`: check `operation.state`.
   * Throws OperationTimeoutError when `timeoutMs` passes first.
   */
  async waitForOperation(id: string, options: WaitForOperationOptions = {}): Promise<Operation> {
    const intervalMs = positive(options.intervalMs ?? 2_000, "intervalMs");
    const timeoutMs = positive(options.timeoutMs ?? 600_000, "timeoutMs");
    const { signal } = options;
    const deadline = Date.now() + timeoutMs;
    for (;;) {
      if (signal?.aborted) throw abortError(signal);
      const { result: operation } = await this.getOperation(id, {}, signal ? { signal } : {});
      if (isTerminalOperationState(operation.state)) return operation;
      const remaining = deadline - Date.now();
      if (remaining <= 0) throw new OperationTimeoutError(operation, timeoutMs);
      await sleep(Math.min(intervalMs, remaining), signal);
    }
  }

  /** @internal */
  protected async _request<T>(op: OperationSpec, input: RequestInput, options: RequestOptions = {}): Promise<T> {
    const url = this.#url(op, input);
    if (op.unsupported && input.body) {
      for (const [field, reason] of Object.entries(op.unsupported)) {
        const value = (input.body as Record<string, unknown>)[field];
        if (value !== undefined && value !== false) throw new TypeError(reason);
      }
    }
    if (options.idempotencyKey !== undefined && op.idempotency === "none") {
      throw new TypeError(`${op.id} does not take an idempotency key`);
    }
    if (options.idempotencyKey !== undefined && (typeof options.idempotencyKey !== "string" || !options.idempotencyKey)) {
      throw new TypeError("idempotencyKey must be a non-empty string");
    }
    const idempotencyKey = op.idempotency === "none" ? null : options.idempotencyKey ?? uuid();

    const headers: Record<string, string> = {
      Accept: op.response === "text" ? "text/csv, application/json" : "application/json",
      "User-Agent": `layrcake-js/${VERSION}`,
      ...this.#defaultHeaders,
      ...options.headers,
      Authorization: `Bearer ${this.#apiKey}`,
    };
    if (idempotencyKey) headers["Idempotency-Key"] = idempotencyKey;
    let body: string | undefined;
    if (input.body !== undefined) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(input.body);
    }

    // A GET is safe to repeat. A write is retried only under an idempotency key,
    // so the API returns the first outcome instead of acting twice.
    const retryable = op.method === "GET" || idempotencyKey !== null;
    const maxRetries = nonNegativeInt(options.maxRetries ?? this.maxRetries, "maxRetries");
    const timeoutMs = positive(options.timeoutMs ?? this.timeoutMs, "timeoutMs");
    const { signal } = options;

    for (let attempt = 0; ; attempt++) {
      const canRetry = retryable && attempt < maxRetries;
      let response: Response;
      let text: string;
      const controller = new AbortController();
      let timedOut = false;
      const timer = setTimeout(() => {
        timedOut = true;
        controller.abort();
      }, timeoutMs);
      const onAbort = () => controller.abort(signal!.reason);
      if (signal?.aborted) {
        clearTimeout(timer);
        throw abortError(signal);
      }
      signal?.addEventListener("abort", onAbort, { once: true });
      try {
        response = await this.#fetch(url, { method: op.method, headers, body, signal: controller.signal });
        text = await response.text();
      } catch (cause) {
        if (signal?.aborted) throw abortError(signal);
        const Class = timedOut ? APITimeoutError : APIConnectionError;
        const error = new Class({
          code: timedOut ? "timeout" : "connection_error",
          message: timedOut ? `Request timed out after ${timeoutMs} ms` : `Connection error: ${cause instanceof Error ? cause.message : String(cause)}`,
          idempotencyKey,
          cause,
        });
        if (!canRetry) throw error;
        await sleep(backoffMs(attempt), signal);
        continue;
      } finally {
        clearTimeout(timer);
        signal?.removeEventListener("abort", onAbort);
      }

      if (response.ok) return this.#parse<T>(op, response, text, idempotencyKey);

      const error = errorFromResponse(response.status, response.headers, text, idempotencyKey);
      if (!canRetry || !RETRY_STATUSES.has(response.status)) throw error;
      const waitMs = error.retryAfterSeconds !== undefined ? error.retryAfterSeconds * 1000 : backoffMs(attempt);
      if (waitMs > MAX_RETRY_AFTER_MS) throw error;
      await sleep(waitMs, signal);
    }
  }

  #url(op: OperationSpec, input: RequestInput): string {
    const path = op.path.replace(/\{([^}]+)\}/g, (_, name: string) => {
      const value = input.path?.[name];
      if (typeof value !== "string" || value.length === 0) throw new TypeError(`${op.id} needs a non-empty ${name}`);
      return encodeURIComponent(value);
    });
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(input.query ?? {})) {
      if (value === undefined || value === null) continue;
      for (const item of Array.isArray(value) ? value : [value]) search.append(key, String(item));
    }
    const qs = search.toString();
    return `${this.baseUrl}${path}${qs ? `?${qs}` : ""}`;
  }

  #parse<T>(op: OperationSpec, response: Response, text: string, idempotencyKey: string | null): T {
    const headerRequestId = response.headers.get("x-layrcake-request-id") ?? response.headers.get("x-request-id");
    if (op.response === "text") {
      return { result: text, layrcake: null, requestId: headerRequestId } as LayrcakeResponse<string, null> as T;
    }
    let body: unknown = null;
    if (text) {
      try {
        body = JSON.parse(text);
      } catch (cause) {
        throw new LayrcakeError({
          status: response.status,
          code: "invalid_response",
          message: `Expected JSON from ${op.id}, got: ${text.slice(0, 120)}`,
          requestId: headerRequestId,
          idempotencyKey,
          headers: response.headers,
          cause,
        });
      }
    }
    let result: unknown = body;
    let layrcake: unknown = null;
    if (op.response === "unwrap" && isEnvelope(body)) {
      result = body.result;
      layrcake = body.layrcake ?? null;
    }
    const metaRequestId = isRecord(layrcake) && typeof layrcake.request_id === "string" ? layrcake.request_id : null;
    const bodyRequestId = isRecord(body) && typeof body.request_id === "string" ? body.request_id : null;
    return { result, layrcake, requestId: metaRequestId ?? headerRequestId ?? bodyRequestId } as T;
  }
}
