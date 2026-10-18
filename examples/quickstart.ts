// The README quickstart. Typechecked by `npm run typecheck`. Running it spends credits.
import { Layrcake, getApproval } from "layrcake";

const layrcake = new Layrcake(); // reads LAYRCAKE_API_KEY

const { result: found } = await layrcake.findLeads({ audience: "Heads of Sales at US software companies with 50 to 500 staff", limit: 5 });
const lead = found.leads[0]!;
const { result: enriched } = await layrcake.enrich({ person: { full_name: lead.full_name!, company_domain: lead.company_domain! }, want: ["work_email"] });
const email = enriched.contact?.work_email ?? lead.work_email!;
const { result: check } = await layrcake.verifyEmail({ email });
if (check.status !== "valid") throw new Error(`${email} is ${check.status}`);
const { result: draft } = await layrcake.createCampaign({ name: "Q4 sales leaders", leads: [{ email }], steps: [{ subject: "Quick question", body: "Hi {{first_name}}, ..." }] });
const preview = await layrcake.launchCampaign({ campaign_id: draft.campaign_id });
console.log("Ask a person to approve:", getApproval(preview)?.approvalUrl);
