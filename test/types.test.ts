// Compile-time checks. `npm run typecheck` fails if a generated type drifts.
import { describe, expectTypeOf, it } from "vitest";
import type { FindLeadsResponse, GetMeResponse, Layrcake, LayrcakeMeta, Operation, VerifyEmailResult } from "../src/index.js";

describe("generated types", () => {
  it("types request bodies from the spec", () => {
    const c = {} as Layrcake;
    const check = () => {
      // @ts-expect-error audience is required
      void c.findLeads({});
      // @ts-expect-error unknown fields are rejected
      void c.verifyEmail({ email: "a@b.co", nope: true });
      // @ts-expect-error streaming is not offered
      void c.llm({ model: "m", messages: [], stream: true });
      // @ts-expect-error path params are required
      void c.getOperation();
      void c.findCompanies();
      void c.killSending();
      void c.pauseCampaign("c1", { idempotencyKey: "pause-c1" });
    };
    expectTypeOf(check).toBeFunction();
  });

  it("types results and billing facts", () => {
    expectTypeOf<FindLeadsResponse["layrcake"]["credits_charged"]>().toEqualTypeOf<string>();
    expectTypeOf<FindLeadsResponse["requestId"]>().toEqualTypeOf<string | null>();
    expectTypeOf<GetMeResponse["layrcake"]>().toEqualTypeOf<null>();
    expectTypeOf<LayrcakeMeta["credits_available"]>().toEqualTypeOf<string>();
    expectTypeOf<Extract<VerifyEmailResult, { status: unknown }>["status"]>().toEqualTypeOf<
      "valid" | "invalid" | "catch_all_valid" | "catch_all_unknown" | "unknown" | "risky"
    >();
    expectTypeOf<ReturnType<Layrcake["getOperation"]>>().resolves.toHaveProperty("result").toEqualTypeOf<Operation>();
  });
});
