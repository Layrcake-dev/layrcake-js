# Changelog

All notable changes to this package are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the package uses [Semantic Versioning](https://semver.org/).

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
