// Read-only smoke test against the live API. Costs nothing.
//
//   npm run build
//   LAYRCAKE_API_KEY=... node examples/smoke.mjs
//
// It calls getMe (free) and a dry_run findLeads (a plan only: nothing is
// looked up, reserved or charged). It never prints the key.
import { Layrcake, LayrcakeError } from "../dist/index.js";

const layrcake = new Layrcake();

const me = await layrcake.getMe();
console.log("getMe ok");
console.log("  credits available:", me.result.credits?.available ?? "(not shown for this key)");
console.log("  scopes:", me.result.key.scopes.join(", ") || "(none)");

try {
  const plan = await layrcake.findLeads({
    audience: "Heads of Sales at US software companies with 50 to 500 employees",
    titles: ["Head of Sales", "VP Sales"],
    locations: ["United States"],
    limit: 5,
    dry_run: true,
  });
  console.log("findLeads dry_run ok");
  console.log("  request id:", plan.requestId);
  console.log("  credits charged:", plan.layrcake.credits_charged);
  console.log("  most it could cost:", plan.result.plan.would.maximum_credits);
} catch (error) {
  if (!(error instanceof LayrcakeError)) throw error;
  console.log(`findLeads dry_run refused: ${error.code} (${error.message})`);
}
