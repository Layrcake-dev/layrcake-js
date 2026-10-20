# Changelog

All notable changes to this package are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the package uses [Semantic Versioning](https://semver.org/).

## 0.2.0 (2026-10-20)

- New `layrcake/agent-tools` entry point: the rules for agents as five framework-neutral tools (`find_leads`, `enrich`, `verify_email`, `create_campaign`, `launch_campaign`). A run budget sent as `budget_credits` with paid calls run one at a time, `dry_run` on every call, idempotency keys per call, verify before a campaign, and a stop at the approval link with no way to send `confirmation_token`. Refusals throw `AgentToolRefusal` with a readable message.
- Argument schemas implement Standard Schema with JSON Schema output, so the Vercel AI SDK and Mastra take them with no zod. The package still has no runtime dependencies.
- `createAgentRun` exposes the same run state on its own, for agents that call the MCP server through hooks.
- The existing API is unchanged.

## 0.1.0 (2026-10-18)

First release.

- A typed method for each of the 28 operations in the Layrcake OpenAPI spec (API version 1.1.0).
- Request and response types generated from the spec. Paid verbs return a typed plan when called with `dry_run: true`.
- Every method returns `{ result, layrcake, requestId }`. Credit amounts stay decimal strings.
- Automatic Idempotency-Key on every endpoint that takes one, reused across retries.
- Retries on 429, 502, 503, 504 and network errors with backoff, jitter and Retry-After.
- Typed errors: `LayrcakeError` and subclasses for auth, permission, approval, credits, validation, not found, conflict, rate limit, server, connection and timeout.
- `waitForOperation` for background work.
- `getApproval` and `isApprovalRequired` for actions that need a person to approve. The SDK never approves anything.
- No runtime dependencies. ESM and CommonJS builds with type declarations. Node 18 or later, Bun, Deno and edge runtimes.
