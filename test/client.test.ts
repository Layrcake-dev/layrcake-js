import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import pkg from "../package.json" with { type: "json" };
import {
  APIConnectionError,
  APITimeoutError,
  ApprovalError,
  AuthenticationError,
  ConflictError,
  InsufficientCreditsError,
  Layrcake,
  LayrcakeError,
  NotFoundError,
  PermissionDeniedError,
  RateLimitError,
  ServerError,
  ValidationError,
  VERSION,
} from "../src/index.js";
import { apiError, client, json, meta, mockFetch } from "./helpers.js";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllEnvs();
});

describe("construction", () => {
  it("reads LAYRCAKE_API_KEY when no key is passed", async () => {
    vi.stubEnv("LAYRCAKE_API_KEY", "lc_from_env");
    const fetch = mockFetch(json({ key: {} }));
    await new Layrcake({ fetch: fetch as unknown as typeof globalThis.fetch }).getMe();
    expect(fetch.header(0, "authorization")).toBe("Bearer lc_from_env");
  });

  it("prefers an explicit key over the environment", async () => {
    vi.stubEnv("LAYRCAKE_API_KEY", "lc_from_env");
    const fetch = mockFetch(json({}));
    await client(fetch).getMe();
    expect(fetch.header(0, "authorization")).toBe("Bearer lc_test_key");
  });

  it("throws a clear error when there is no key", () => {
    vi.stubEnv("LAYRCAKE_API_KEY", "");
    expect(() => new Layrcake()).toThrow(LayrcakeError);
    expect(() => new Layrcake()).toThrow(/LAYRCAKE_API_KEY/);
  });

  it("does not expose the key on the instance", () => {
    const c = new Layrcake({ apiKey: "lc_secret_value", fetch: mockFetch() as unknown as typeof fetch });
    expect(JSON.stringify(c)).not.toContain("lc_secret_value");
    expect(Object.values(c)).not.toContain("lc_secret_value");
  });

  it("rejects bad numeric options", () => {
    expect(() => new Layrcake({ apiKey: "k", maxRetries: -1 })).toThrow(TypeError);
    expect(() => new Layrcake({ apiKey: "k", timeoutMs: 0 })).toThrow(TypeError);
  });

  it("keeps VERSION equal to package.json", () => {
    expect(VERSION).toBe(pkg.version);
  });
});

describe("requests", () => {
  it("sends the bearer key, JSON body and user agent to the right URL", async () => {
    const fetch = mockFetch(json({ result: { email: "a@b.co", status: "valid" }, layrcake: meta }));
    await client(fetch, { baseUrl: "https://example.test/" }).verifyEmail({ email: "a@b.co" });
    expect(fetch.url(0)).toBe("https://example.test/v1/verify_email");
    expect(fetch.init(0).method).toBe("POST");
    expect(fetch.header(0, "authorization")).toBe("Bearer lc_test_key");
    expect(fetch.header(0, "content-type")).toBe("application/json");
    expect(fetch.header(0, "user-agent")).toBe(`layrcake-js/${VERSION}`);
    expect(fetch.body(0)).toEqual({ email: "a@b.co" });
  });

  it("encodes path params and repeats array query params", async () => {
    const fetch = mockFetch(json({ schema_version: 1 }), json({ result: { events: [] } }));
    const c = client(fetch);
    await c.getCampaignProof("a/b c");
    await c.getTrail({ kind: ["reply", "bounce"], limit: 10 });
    expect(fetch.url(0)).toBe("https://api.layrcake.dev/v1/campaigns/a%2Fb%20c/proof");
    expect(fetch.url(1)).toBe("https://api.layrcake.dev/v1/trail?kind=reply&kind=bounce&limit=10");
    expect(fetch.init(1).body).toBeUndefined();
  });

  it("refuses an empty path param before calling the API", async () => {
    const fetch = mockFetch();
    await expect(client(fetch).getOperation("")).rejects.toThrow(TypeError);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("refuses llm streaming before calling the API", async () => {
    const fetch = mockFetch();
    const params = { model: "m", messages: [], stream: true } as unknown as Parameters<Layrcake["llm"]>[0];
    await expect(client(fetch).llm(params)).rejects.toThrow(/Streaming is not supported/);
    expect(fetch).not.toHaveBeenCalled();
  });
});

describe("responses", () => {
  it("returns result, layrcake and requestId, keeping credits as strings", async () => {
    const fetch = mockFetch(json({ result: { leads: [] }, layrcake: meta }));
    const res = await client(fetch).findLeads({ audience: "VPs of Sales at US SaaS" });
    expect(res.result).toEqual({ leads: [] });
    expect(res.layrcake.credits_charged).toBe("1.250000");
    expect(typeof res.layrcake.credits_available).toBe("string");
    expect(res.requestId).toBe(meta.request_id);
    expectTypeOf(res.layrcake.credits_charged).toEqualTypeOf<string>();
  });

  it("returns layrcake null for endpoints without billing facts", async () => {
    const fetch = mockFetch(json({ result: { replies: [] } }, 200, { "x-request-id": "req_hdr" }));
    const res = await client(fetch).getReplies({});
    expect(res.layrcake).toBeNull();
    expect(res.requestId).toBe("req_hdr");
  });

  it("unwraps the live get_me body, which the spec describes as flat", async () => {
    const body = { key: { id: "k1", scopes: ["data:read"] }, workspace: { id: "w1" }, guard: {}, credits: { available: "22.5", reserved: "0" } };
    const fetch = mockFetch(json({ result: body }));
    const res = await client(fetch).getMe();
    expect(res.result).toEqual(body);
    expect(res.result.credits?.available).toBe("22.5");
    expect(res.result.key.scopes).toEqual(["data:read"]);
    expect(res.layrcake).toBeNull();
  });

  it("unwraps the live get_operation body", async () => {
    const op = { operation_id: "op-1", kind: "research_company", state: "running", progress: { total: 3, done: 1 }, result: null, error: null, created_at: "t", completed_at: null };
    const fetch = mockFetch(json({ result: op }));
    const res = await client(fetch).getOperation("op-1");
    expect(res.result).toEqual(op);
    expect(res.result.state).toBe("running");
  });

  it("unwraps only bodies whose keys are result and layrcake", async () => {
    const fetch = mockFetch(json({ result: { a: 1 }, other: true }));
    const res = await client(fetch).getCampaignProof("c1");
    expect(res.result).toEqual({ result: { a: 1 }, other: true });
  });

  it("never unwraps llm, which is OpenAI-shaped", async () => {
    const fetch = mockFetch(json({ result: "kept" }), json({ id: "chat-1", choices: [] }));
    const c = client(fetch);
    expect((await c.llm({ model: "m", messages: [] })).result).toEqual({ result: "kept" });
    expect((await c.llm({ model: "m", messages: [] })).result).toEqual({ id: "chat-1", choices: [] });
  });

  it("still accepts a flat body", async () => {
    const fetch = mockFetch(json({ key: { id: "k1" }, workspace: { id: "w1" } }));
    const res = await client(fetch).getMe();
    expect(res.result).toEqual({ key: { id: "k1" }, workspace: { id: "w1" } });
    expect(res.layrcake).toBeNull();
  });

  it("returns the 202 approval state as the result", async () => {
    const body = { status: "approved", approval: { id: "ap1", state: "approved" } };
    const fetch = mockFetch(json(body, 202));
    const res = await client(fetch).launchCampaign({ campaign_id: "c1", confirmation_token: "t1" });
    expect(res.result).toEqual(body);
  });

  it("returns CSV exports as text", async () => {
    const fetch = mockFetch(new Response("a,b\n1,2\n", { status: 200, headers: { "content-type": "text/csv" } }));
    const res = await client(fetch).exportTrailCsv();
    expect(res.result).toBe("a,b\n1,2\n");
    expectTypeOf(res.result).toEqualTypeOf<string>();
  });

  it("throws invalid_response on a non-JSON success body", async () => {
    const fetch = mockFetch(new Response("<html>", { status: 200 }));
    await expect(client(fetch).getMe()).rejects.toMatchObject({ code: "invalid_response" });
  });
});

describe("idempotency", () => {
  it("generates a UUID key for endpoints that take one", async () => {
    const fetch = mockFetch(json({ result: {}, layrcake: meta }));
    await client(fetch).findLeads({ audience: "x" });
    expect(fetch.header(0, "idempotency-key")).toMatch(UUID);
  });

  it("generates one even when the spec marks the key required", async () => {
    const fetch = mockFetch(json({ result: {}, layrcake: meta }));
    await client(fetch).createCampaign({ name: "n", leads: [{ email: "a@b.co" }], steps: [{ body: "hi" }] });
    expect(fetch.header(0, "idempotency-key")).toMatch(UUID);
  });

  it("reuses the same key across automatic retries", async () => {
    vi.useFakeTimers();
    const fetch = mockFetch(apiError(503, "provider_unavailable"), apiError(502, "internal"), json({ result: {}, layrcake: meta }));
    const pending = client(fetch).findLeads({ audience: "x" });
    await vi.runAllTimersAsync();
    await pending;
    expect(fetch).toHaveBeenCalledTimes(3);
    const keys = [0, 1, 2].map((i) => fetch.header(i, "idempotency-key"));
    expect(new Set(keys).size).toBe(1);
    expect(keys[0]).toMatch(UUID);
  });

  it("uses the caller's key when given", async () => {
    const fetch = mockFetch(json({ result: {}, layrcake: meta }));
    await client(fetch).launchCampaign({ campaign_id: "c1" }, { idempotencyKey: "launch-c1-v1" });
    expect(fetch.header(0, "idempotency-key")).toBe("launch-c1-v1");
  });

  it("uses a fresh key for each separate call", async () => {
    const fetch = mockFetch(json({ result: {}, layrcake: meta }), json({ result: {}, layrcake: meta }));
    const c = client(fetch);
    await c.verifyEmail({ email: "a@b.co" });
    await c.verifyEmail({ email: "a@b.co" });
    expect(fetch.header(0, "idempotency-key")).not.toBe(fetch.header(1, "idempotency-key"));
  });

  it("never sends a key to endpoints without one", async () => {
    const fetch = mockFetch(json({}));
    await client(fetch).getMe();
    expect(fetch.header(0, "idempotency-key")).toBeNull();
    await expect(client(fetch).getMe({ idempotencyKey: "x" })).rejects.toThrow(TypeError);
  });

  it("puts the key on the error so the caller can retry later", async () => {
    const fetch = mockFetch(apiError(503, "provider_unavailable"));
    const err = await client(fetch, { maxRetries: 0 }).findLeads({ audience: "x" }).catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ServerError);
    expect((err as LayrcakeError).idempotencyKey).toBe(fetch.header(0, "idempotency-key"));
  });
});

describe("retries", () => {
  beforeEach(() => vi.useFakeTimers());

  it("honours Retry-After in seconds", async () => {
    const fetch = mockFetch(apiError(429, "rate_limited", "slow down", {}, { "retry-after": "3" }), json({ result: {}, layrcake: meta }));
    const pending = client(fetch).findLeads({ audience: "x" });
    await vi.advanceTimersByTimeAsync(2_999);
    expect(fetch).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1);
    expect(fetch).toHaveBeenCalledTimes(2);
    await expect(pending).resolves.toMatchObject({ result: {} });
  });

  it("honours Retry-After as an HTTP date", async () => {
    vi.setSystemTime(new Date("2026-10-18T12:00:00Z"));
    const fetch = mockFetch(
      apiError(503, "provider_unavailable", "busy", {}, { "retry-after": "Sun, 18 Oct 2026 12:00:05 GMT" }),
      json({}),
    );
    const pending = client(fetch).getMe();
    await vi.advanceTimersByTimeAsync(4_999);
    expect(fetch).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1);
    await pending;
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("honours details.retry_after_seconds when there is no header", async () => {
    const fetch = mockFetch(apiError(503, "provider_unavailable", "busy", { details: { retry_after_seconds: 4 } }), json({ result: {}, layrcake: meta }));
    const pending = client(fetch).findLeads({ audience: "x" });
    await vi.advanceTimersByTimeAsync(3_999);
    expect(fetch).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1);
    await pending;
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("does not wait out a Retry-After longer than a minute", async () => {
    const fetch = mockFetch(apiError(429, "rate_limited", "daily cap", { details: { retry_after_seconds: 3600 } }));
    const err = await client(fetch).findLeads({ audience: "x" }).catch((e: unknown) => e);
    expect(err).toBeInstanceOf(RateLimitError);
    expect((err as RateLimitError).retryAfterSeconds).toBe(3600);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("never retries a 400", async () => {
    const fetch = mockFetch(apiError(400, "invalid_request", "audience is required", { request_id: "req_1", details: { field: "audience" } }));
    const err = await client(fetch).findLeads({ audience: "" }).catch((e: unknown) => e);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(err).toBeInstanceOf(ValidationError);
    expect(err).toMatchObject({ status: 400, code: "invalid_request", message: "audience is required", requestId: "req_1", details: { field: "audience" } });
  });

  it.each([401, 402, 403, 404, 409, 422, 500])("never retries a %i", async (status) => {
    const fetch = mockFetch(apiError(status, "x"));
    await expect(client(fetch).getMe()).rejects.toBeInstanceOf(LayrcakeError);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("stops after maxRetries and throws the last error", async () => {
    const fetch = mockFetch(apiError(504, "internal"), apiError(504, "internal"), apiError(504, "internal"));
    const pending = client(fetch).getMe().catch((e: unknown) => e);
    await vi.runAllTimersAsync();
    expect(await pending).toBeInstanceOf(ServerError);
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  it("respects a per-call maxRetries", async () => {
    const fetch = mockFetch(apiError(503, "provider_unavailable"));
    await expect(client(fetch).getMe({ maxRetries: 0 })).rejects.toBeInstanceOf(ServerError);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("retries network errors on idempotent calls", async () => {
    const fetch = mockFetch(new TypeError("fetch failed"), json({ result: {}, layrcake: meta }));
    const pending = client(fetch).verifyEmail({ email: "a@b.co" });
    await vi.runAllTimersAsync();
    await pending;
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("throws APIConnectionError when the network keeps failing", async () => {
    const fetch = mockFetch(new TypeError("fetch failed"));
    const err = await client(fetch, { maxRetries: 0 }).getMe().catch((e: unknown) => e);
    expect(err).toBeInstanceOf(APIConnectionError);
    expect(err).toMatchObject({ code: "connection_error", status: undefined });
  });

  it("times out a hung request", async () => {
    const fetch = mockFetch(() => new Promise<Response>(() => {}));
    fetch.mockImplementationOnce((_url, init) => new Promise<Response>((_, reject) => {
      init!.signal!.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError")));
    }));
    const pending = client(fetch, { maxRetries: 0, timeoutMs: 1_000 }).getMe().catch((e: unknown) => e);
    await vi.advanceTimersByTimeAsync(1_000);
    const err = await pending;
    expect(err).toBeInstanceOf(APITimeoutError);
    expect(err).toMatchObject({ code: "timeout" });
  });

  it("does not retry when the caller aborts", async () => {
    const controller = new AbortController();
    const fetch = mockFetch();
    fetch.mockImplementationOnce((_url, init) => new Promise<Response>((_, reject) => {
      init!.signal!.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError")));
    }));
    const pending = client(fetch).getMe({ signal: controller.signal }).catch((e: unknown) => e);
    controller.abort();
    const err = await pending;
    expect((err as Error).name).toBe("AbortError");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("error mapping", () => {
  const cases: Array<[number, string, new (...a: never[]) => LayrcakeError]> = [
    [401, "unauthorized", AuthenticationError],
    [403, "forbidden", PermissionDeniedError],
    [403, "agent_paused", PermissionDeniedError],
    [403, "confirmation_required", ApprovalError],
    [409, "approval_expired", ApprovalError],
    [402, "insufficient_credits", InsufficientCreditsError],
    [402, "card_required", InsufficientCreditsError],
    [403, "run_budget_exceeded", InsufficientCreditsError],
    [400, "invalid_request", ValidationError],
    [422, "suppressed_recipient", ValidationError],
    [404, "not_found", NotFoundError],
    [409, "idempotency_conflict", ConflictError],
    [409, "billing_unknown", ConflictError],
    [500, "internal", ServerError],
    [503, "provider_unavailable", ServerError],
  ];

  it.each(cases)("%i %s maps to %o", async (status, code, Class) => {
    const fetch = mockFetch(apiError(status, code, "msg", { request_id: "req_x" }));
    const err = await client(fetch, { maxRetries: 0 }).getMe().catch((e: unknown) => e);
    expect(err).toBeInstanceOf(Class);
    expect(err).toBeInstanceOf(LayrcakeError);
    expect(err).toMatchObject({ status, code, message: "msg", requestId: "req_x" });
  });

  it("falls back to the status when the body is not JSON", async () => {
    const fetch = mockFetch(new Response("", { status: 404 }));
    const err = await client(fetch).getCampaignProof("c1").catch((e: unknown) => e);
    expect(err).toBeInstanceOf(NotFoundError);
    expect(err).toMatchObject({ status: 404, code: "not_found" });
  });

  it("keeps an unknown future code as a string", async () => {
    const fetch = mockFetch(apiError(409, "some_new_code"));
    const err = await client(fetch).getMe().catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ConflictError);
    expect((err as LayrcakeError).code).toBe("some_new_code");
  });
});
