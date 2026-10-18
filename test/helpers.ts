import { vi } from "vitest";
import { Layrcake, type LayrcakeOptions } from "../src/index.js";

export type Reply = Response | Error | (() => Response | Promise<Response>);

export function json(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });
}

export function apiError(status: number, code: string, message = code, extra: Record<string, unknown> = {}, headers: Record<string, string> = {}): Response {
  return json({ error: { code, message, ...extra } }, status, headers);
}

export const meta = {
  request_id: "11111111-1111-4111-8111-111111111111",
  credits_charged: "1.250000",
  credits_available: "98.750000",
};

/** A fetch that answers from a queue and records every call. */
export function mockFetch(...replies: Reply[]) {
  const queue = [...replies];
  const fn = vi.fn(async (_url: string | URL | Request, _init?: RequestInit): Promise<Response> => {
    const next = queue.shift();
    if (next === undefined) throw new Error("mockFetch: no reply queued");
    if (next instanceof Error) throw next;
    return typeof next === "function" ? next() : next;
  });
  return Object.assign(fn, {
    url: (i: number) => String(fn.mock.calls[i]![0]),
    init: (i: number) => fn.mock.calls[i]![1]!,
    header: (i: number, name: string) => new Headers(fn.mock.calls[i]![1]!.headers).get(name),
    body: (i: number) => JSON.parse(String(fn.mock.calls[i]![1]!.body)),
  });
}

export function client(fetch: ReturnType<typeof mockFetch>, options: LayrcakeOptions = {}) {
  return new Layrcake({ apiKey: "lc_test_key", fetch: fetch as unknown as typeof globalThis.fetch, ...options });
}
