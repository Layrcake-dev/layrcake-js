// Dry-run smoke test of layrcake/agent-tools against the live API. Costs nothing.
//
//   npm run build
//   LAYRCAKE_API_KEY=... node examples/agent-tools-smoke.mjs
//
// Every tool call is a dry run: it returns a plan with the most it could cost and
// charges nothing. No model is involved. It never prints the key.
import { createAgentTools } from "../dist/agent-tools.js";
import { Layrcake } from "../dist/index.js";

const client = new Layrcake();
const { tools, summary } = createAgentTools({ client, budget: 100, dryRun: true });
const sample = { email: "sample.person@example.com", first_name: "Sample" };

const me = await client.getMe();
console.log(`Key works for workspace "${me.result.workspace.name}".`);
const plans = {
  find_leads: await tools.find_leads.execute({ audience: "Heads of sales at London software companies with 20 to 200 staff", titles: ["Head of Sales"], locations: ["London, United Kingdom"], industries: ["Software Development"], company_headcount: { min: 20, max: 200 }, limit: 10 }),
  enrich: await tools.enrich.execute({ full_name: "Sample Person", company_domain: "example.com" }),
  verify_email: await tools.verify_email.execute({ email: sample.email }),
  create_campaign: await tools.create_campaign.execute({ name: "Smoke test", leads: [sample], steps: [{ subject: "Hello", body: "Hi {{first_name}}" }] }),
};
for (const [name, plan] of Object.entries(plans)) {
  if (!plan.dry_run) throw new Error(`${name}: expected a plan, got ${JSON.stringify(plan)}`);
  console.log(`${name}: would cost up to ${plan.would_cost_up_to} credits${plan.would_exceed.length ? `, would trip: ${plan.would_exceed.join(", ")}` : ""}`);
}
const spent = summary().spent;
if (spent !== 0) throw new Error(`A dry run charged ${spent} credits.`);
console.log(`\nCharged: ${spent} credits.`);
