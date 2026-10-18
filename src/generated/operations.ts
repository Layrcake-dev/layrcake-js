// This file is generated from openapi.json by scripts/generate.mjs.
// Do not edit it by hand. Run `npm run generate` after updating the spec.

import type { operations } from "./schema.js";
import type { LayrcakeResponse, OperationSpec, RequestInput, RequestOptions } from "../core.js";
import type { Operation } from "../operation.js";

/** Every error code the API declares. The server may add codes; treat unknown ones as their HTTP status. */
export const API_ERROR_CODES = [
  "unauthorized",
  "forbidden",
  "confirmation_required",
  "payment_required",
  "insufficient_credits",
  "rate_limited",
  "idempotency_conflict",
  "invalid_request",
  "suppressed_recipient",
  "not_found",
  "operation_unknown_state",
  "provider_unavailable",
  "contact_history_unavailable",
  "internal",
  "reply_intent_pending",
  "reply_already_sent",
  "reply_content_unavailable",
  "reply_send_disabled",
  "mailbox_unavailable",
  "self_modification",
  "agent_suspended",
  "card_required",
  "payment_action_required",
  "billing_unknown",
  "agent_paused",
  "stream_consumed",
  "run_budget_exceeded",
  "run_unavailable",
  "run_required",
  "own_key_failed",
  "change_request_closed",
  "tool_key_invalid",
  "tool_unavailable",
  "approval_declined",
  "approval_expired",
  "approval_superseded",
  "approval_cancelled",
  "approval_changed",
] as const;
export type ApiErrorCode = (typeof API_ERROR_CODES)[number];

/** Wire facts for every operation, derived from the spec. */
export const OPERATIONS = {
  verifyEmail: { id: "verify_email", method: "POST", path: "/v1/verify_email", idempotency: "optional", response: "unwrap" },
  enrich: { id: "enrich", method: "POST", path: "/v1/enrich", idempotency: "optional", response: "unwrap" },
  findLeads: { id: "find_leads", method: "POST", path: "/v1/find_leads", idempotency: "optional", response: "unwrap" },
  findIntent: { id: "find_intent", method: "POST", path: "/v1/find_intent", idempotency: "optional", response: "unwrap" },
  checkCompanies: { id: "check_companies", method: "POST", path: "/v1/check_companies", idempotency: "optional", response: "unwrap" },
  findCompanies: { id: "find_companies", method: "POST", path: "/v1/find_companies", idempotency: "optional", response: "unwrap" },
  enrichCompany: { id: "enrich_company", method: "POST", path: "/v1/enrich_company", idempotency: "optional", response: "unwrap" },
  findPosts: { id: "find_posts", method: "POST", path: "/v1/find_posts", idempotency: "optional", response: "unwrap" },
  setupSending: { id: "setup_sending", method: "POST", path: "/v1/setup_sending", idempotency: "optional", response: "unwrap" },
  createCampaign: { id: "create_campaign", method: "POST", path: "/v1/campaigns", idempotency: "required", response: "unwrap" },
  addLeads: { id: "add_leads", method: "POST", path: "/v1/add_leads", idempotency: "optional", response: "unwrap" },
  launchCampaign: { id: "launch_campaign", method: "POST", path: "/v1/launch_campaign", idempotency: "optional", response: "unwrap" },
  getReplies: { id: "get_replies", method: "POST", path: "/v1/get_replies", idempotency: "optional", response: "unwrap" },
  getReply: { id: "get_reply", method: "POST", path: "/v1/get_reply", idempotency: "optional", response: "unwrap" },
  setLeadStatus: { id: "set_lead_status", method: "POST", path: "/v1/set_lead_status", idempotency: "required", response: "unwrap" },
  replyToThread: { id: "reply_to_thread", method: "POST", path: "/v1/reply_to_thread", idempotency: "optional", response: "unwrap" },
  researchCompany: { id: "research_company", method: "POST", path: "/v1/research_company", idempotency: "required", response: "unwrap" },
  prospectPicture: { id: "prospect_picture", method: "POST", path: "/v1/prospect_picture", idempotency: "required", response: "unwrap" },
  llm: { id: "llm", method: "POST", path: "/v1/llm/chat", idempotency: "optional", response: "flat", unsupported: {"stream":"Streaming is not supported by this SDK version. Call llm() without stream."} },
  getMe: { id: "get_me", method: "GET", path: "/v1/me", idempotency: "none", response: "unwrap" },
  getTrail: { id: "get_trail", method: "GET", path: "/v1/trail", idempotency: "none", response: "unwrap" },
  exportTrailCsv: { id: "export_trail_csv", method: "GET", path: "/v1/trail/export.csv", idempotency: "none", response: "text" },
  getCampaignProof: { id: "get_campaign_proof", method: "GET", path: "/v1/campaigns/{id}/proof", idempotency: "none", response: "unwrap" },
  tightenKeyPolicy: { id: "tighten_key_policy", method: "PATCH", path: "/v1/keys/{id}", idempotency: "required", response: "unwrap" },
  importDoNotContact: { id: "import_do_not_contact", method: "POST", path: "/v1/do_not_contact", idempotency: "optional", response: "unwrap" },
  killSending: { id: "kill_sending", method: "POST", path: "/v1/kill", idempotency: "required", response: "unwrap" },
  pauseCampaign: { id: "pause_campaign", method: "POST", path: "/v1/campaigns/{id}/pause", idempotency: "required", response: "unwrap" },
  getOperation: { id: "get_operation", method: "GET", path: "/v1/operations/{id}", idempotency: "none", response: "unwrap" },
} as const satisfies Record<string, OperationSpec>;

// POST /v1/verify_email
export type VerifyEmailParams = operations["verify_email"]["requestBody"]["content"]["application/json"];
type VerifyEmailAny = operations["verify_email"]["responses"][200]["content"]["application/json"]["result"];
/** What verifyEmail returns when it runs. */
export type VerifyEmailResult = Exclude<VerifyEmailAny, { dry_run: true }>;
/** What verifyEmail returns with `dry_run: true`: the plan, nothing run or charged. */
export type VerifyEmailPlan = Extract<VerifyEmailAny, { dry_run: true }>;
export type VerifyEmailResponse = LayrcakeResponse<VerifyEmailResult, operations["verify_email"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type VerifyEmailPlanResponse = LayrcakeResponse<VerifyEmailPlan, operations["verify_email"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/enrich
export type EnrichParams = operations["enrich"]["requestBody"]["content"]["application/json"];
type EnrichAny = operations["enrich"]["responses"][200]["content"]["application/json"]["result"];
/** What enrich returns when it runs. */
export type EnrichResult = Exclude<EnrichAny, { dry_run: true }>;
/** What enrich returns with `dry_run: true`: the plan, nothing run or charged. */
export type EnrichPlan = Extract<EnrichAny, { dry_run: true }>;
export type EnrichResponse = LayrcakeResponse<EnrichResult, operations["enrich"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type EnrichPlanResponse = LayrcakeResponse<EnrichPlan, operations["enrich"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/find_leads
export type FindLeadsParams = operations["find_leads"]["requestBody"]["content"]["application/json"];
type FindLeadsAny = operations["find_leads"]["responses"][200]["content"]["application/json"]["result"];
/** What findLeads returns when it runs. */
export type FindLeadsResult = Exclude<FindLeadsAny, { dry_run: true }>;
/** What findLeads returns with `dry_run: true`: the plan, nothing run or charged. */
export type FindLeadsPlan = Extract<FindLeadsAny, { dry_run: true }>;
export type FindLeadsResponse = LayrcakeResponse<FindLeadsResult, operations["find_leads"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type FindLeadsPlanResponse = LayrcakeResponse<FindLeadsPlan, operations["find_leads"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/find_intent
export type FindIntentParams = operations["find_intent"]["requestBody"]["content"]["application/json"];
type FindIntentAny = operations["find_intent"]["responses"][200]["content"]["application/json"]["result"];
/** What findIntent returns when it runs. */
export type FindIntentResult = Exclude<FindIntentAny, { dry_run: true }>;
/** What findIntent returns with `dry_run: true`: the plan, nothing run or charged. */
export type FindIntentPlan = Extract<FindIntentAny, { dry_run: true }>;
export type FindIntentResponse = LayrcakeResponse<FindIntentResult, operations["find_intent"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type FindIntentPlanResponse = LayrcakeResponse<FindIntentPlan, operations["find_intent"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/check_companies
export type CheckCompaniesParams = operations["check_companies"]["requestBody"]["content"]["application/json"];
type CheckCompaniesAny = operations["check_companies"]["responses"][200]["content"]["application/json"]["result"];
/** What checkCompanies returns when it runs. */
export type CheckCompaniesResult = Exclude<CheckCompaniesAny, { dry_run: true }>;
/** What checkCompanies returns with `dry_run: true`: the plan, nothing run or charged. */
export type CheckCompaniesPlan = Extract<CheckCompaniesAny, { dry_run: true }>;
export type CheckCompaniesResponse = LayrcakeResponse<CheckCompaniesResult, operations["check_companies"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type CheckCompaniesPlanResponse = LayrcakeResponse<CheckCompaniesPlan, operations["check_companies"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/find_companies
export type FindCompaniesParams = operations["find_companies"]["requestBody"]["content"]["application/json"];
type FindCompaniesAny = operations["find_companies"]["responses"][200]["content"]["application/json"]["result"];
/** What findCompanies returns when it runs. */
export type FindCompaniesResult = Exclude<FindCompaniesAny, { dry_run: true }>;
/** What findCompanies returns with `dry_run: true`: the plan, nothing run or charged. */
export type FindCompaniesPlan = Extract<FindCompaniesAny, { dry_run: true }>;
export type FindCompaniesResponse = LayrcakeResponse<FindCompaniesResult, operations["find_companies"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type FindCompaniesPlanResponse = LayrcakeResponse<FindCompaniesPlan, operations["find_companies"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/enrich_company
export type EnrichCompanyParams = operations["enrich_company"]["requestBody"]["content"]["application/json"];
export type EnrichCompanyResult = operations["enrich_company"]["responses"][200]["content"]["application/json"]["result"];
export type EnrichCompanyResponse = LayrcakeResponse<EnrichCompanyResult, operations["enrich_company"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/find_posts
export type FindPostsParams = operations["find_posts"]["requestBody"]["content"]["application/json"];
export type FindPostsResult = operations["find_posts"]["responses"][200]["content"]["application/json"]["result"];
export type FindPostsResponse = LayrcakeResponse<FindPostsResult, operations["find_posts"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/setup_sending
export type SetupSendingParams = operations["setup_sending"]["requestBody"]["content"]["application/json"];
type SetupSendingAny = operations["setup_sending"]["responses"][200]["content"]["application/json"]["result"];
/** What setupSending returns when it runs. */
export type SetupSendingResult = Exclude<SetupSendingAny, { dry_run: true }>;
/** What setupSending returns with `dry_run: true`: the plan, nothing run or charged. */
export type SetupSendingPlan = Extract<SetupSendingAny, { dry_run: true }>;
export type SetupSendingResponse = LayrcakeResponse<SetupSendingResult, Extract<operations["setup_sending"]["responses"][200]["content"]["application/json"], { layrcake: unknown }>["layrcake"] | null>;
export type SetupSendingPlanResponse = LayrcakeResponse<SetupSendingPlan, Extract<operations["setup_sending"]["responses"][200]["content"]["application/json"], { layrcake: unknown }>["layrcake"] | null>;

// POST /v1/campaigns
export type CreateCampaignParams = operations["create_campaign"]["requestBody"]["content"]["application/json"];
type CreateCampaignAny = operations["create_campaign"]["responses"][200]["content"]["application/json"]["result"];
/** What createCampaign returns when it runs. */
export type CreateCampaignResult = Exclude<CreateCampaignAny, { dry_run: true }>;
/** What createCampaign returns with `dry_run: true`: the plan, nothing run or charged. */
export type CreateCampaignPlan = Extract<CreateCampaignAny, { dry_run: true }>;
export type CreateCampaignResponse = LayrcakeResponse<CreateCampaignResult, operations["create_campaign"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type CreateCampaignPlanResponse = LayrcakeResponse<CreateCampaignPlan, operations["create_campaign"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/add_leads
export type AddLeadsParams = operations["add_leads"]["requestBody"]["content"]["application/json"];
type AddLeadsAny = operations["add_leads"]["responses"][200]["content"]["application/json"]["result"];
/** What addLeads returns when it runs. */
export type AddLeadsResult = Exclude<AddLeadsAny, { dry_run: true }>;
/** What addLeads returns with `dry_run: true`: the plan, nothing run or charged. */
export type AddLeadsPlan = Extract<AddLeadsAny, { dry_run: true }>;
export type AddLeadsResponse = LayrcakeResponse<AddLeadsResult, operations["add_leads"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type AddLeadsPlanResponse = LayrcakeResponse<AddLeadsPlan, operations["add_leads"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/launch_campaign
export type LaunchCampaignParams = operations["launch_campaign"]["requestBody"]["content"]["application/json"];
type LaunchCampaignAny = operations["launch_campaign"]["responses"][200]["content"]["application/json"]["result"] | operations["launch_campaign"]["responses"][202]["content"]["application/json"];
/** What launchCampaign returns when it runs. */
export type LaunchCampaignResult = Exclude<LaunchCampaignAny, { dry_run: true }>;
/** What launchCampaign returns with `dry_run: true`: the plan, nothing run or charged. */
export type LaunchCampaignPlan = Extract<LaunchCampaignAny, { dry_run: true }>;
export type LaunchCampaignResponse = LayrcakeResponse<LaunchCampaignResult, Extract<operations["launch_campaign"]["responses"][200]["content"]["application/json"], { layrcake: unknown }>["layrcake"] | null>;
export type LaunchCampaignPlanResponse = LayrcakeResponse<LaunchCampaignPlan, Extract<operations["launch_campaign"]["responses"][200]["content"]["application/json"], { layrcake: unknown }>["layrcake"] | null>;

// POST /v1/get_replies
export type GetRepliesParams = operations["get_replies"]["requestBody"]["content"]["application/json"];
export type GetRepliesResult = operations["get_replies"]["responses"][200]["content"]["application/json"]["result"];
export type GetRepliesResponse = LayrcakeResponse<GetRepliesResult, null>;

// POST /v1/get_reply
export type GetReplyParams = operations["get_reply"]["requestBody"]["content"]["application/json"];
export type GetReplyResult = operations["get_reply"]["responses"][200]["content"]["application/json"]["result"];
export type GetReplyResponse = LayrcakeResponse<GetReplyResult, null>;

// POST /v1/set_lead_status
export type SetLeadStatusParams = operations["set_lead_status"]["requestBody"]["content"]["application/json"];
type SetLeadStatusAny = operations["set_lead_status"]["responses"][200]["content"]["application/json"]["result"];
/** What setLeadStatus returns when it runs. */
export type SetLeadStatusResult = Exclude<SetLeadStatusAny, { dry_run: true }>;
/** What setLeadStatus returns with `dry_run: true`: the plan, nothing run or charged. */
export type SetLeadStatusPlan = Extract<SetLeadStatusAny, { dry_run: true }>;
export type SetLeadStatusResponse = LayrcakeResponse<SetLeadStatusResult, operations["set_lead_status"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type SetLeadStatusPlanResponse = LayrcakeResponse<SetLeadStatusPlan, operations["set_lead_status"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/reply_to_thread
export type ReplyToThreadParams = operations["reply_to_thread"]["requestBody"]["content"]["application/json"];
type ReplyToThreadAny = operations["reply_to_thread"]["responses"][200]["content"]["application/json"]["result"] | operations["reply_to_thread"]["responses"][202]["content"]["application/json"];
/** What replyToThread returns when it runs. */
export type ReplyToThreadResult = Exclude<ReplyToThreadAny, { dry_run: true }>;
/** What replyToThread returns with `dry_run: true`: the plan, nothing run or charged. */
export type ReplyToThreadPlan = Extract<ReplyToThreadAny, { dry_run: true }>;
export type ReplyToThreadResponse = LayrcakeResponse<ReplyToThreadResult, Extract<operations["reply_to_thread"]["responses"][200]["content"]["application/json"], { layrcake: unknown }>["layrcake"] | null>;
export type ReplyToThreadPlanResponse = LayrcakeResponse<ReplyToThreadPlan, Extract<operations["reply_to_thread"]["responses"][200]["content"]["application/json"], { layrcake: unknown }>["layrcake"] | null>;

// POST /v1/research_company
export type ResearchCompanyParams = operations["research_company"]["requestBody"]["content"]["application/json"];
type ResearchCompanyAny = operations["research_company"]["responses"][200]["content"]["application/json"]["result"];
/** What researchCompany returns when it runs. */
export type ResearchCompanyResult = Exclude<ResearchCompanyAny, { dry_run: true }>;
/** What researchCompany returns with `dry_run: true`: the plan, nothing run or charged. */
export type ResearchCompanyPlan = Extract<ResearchCompanyAny, { dry_run: true }>;
export type ResearchCompanyResponse = LayrcakeResponse<ResearchCompanyResult, operations["research_company"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type ResearchCompanyPlanResponse = LayrcakeResponse<ResearchCompanyPlan, operations["research_company"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/prospect_picture
export type ProspectPictureParams = operations["prospect_picture"]["requestBody"]["content"]["application/json"];
type ProspectPictureAny = operations["prospect_picture"]["responses"][200]["content"]["application/json"]["result"];
/** What prospectPicture returns when it runs. */
export type ProspectPictureResult = Exclude<ProspectPictureAny, { dry_run: true }>;
/** What prospectPicture returns with `dry_run: true`: the plan, nothing run or charged. */
export type ProspectPicturePlan = Extract<ProspectPictureAny, { dry_run: true }>;
export type ProspectPictureResponse = LayrcakeResponse<ProspectPictureResult, operations["prospect_picture"]["responses"][200]["content"]["application/json"]["layrcake"]>;
export type ProspectPicturePlanResponse = LayrcakeResponse<ProspectPicturePlan, operations["prospect_picture"]["responses"][200]["content"]["application/json"]["layrcake"]>;

// POST /v1/llm/chat
export type LlmParams = Omit<operations["llm"]["requestBody"]["content"]["application/json"], "stream"> & { [K in "stream"]?: false };
export type LlmResult = operations["llm"]["responses"][200]["content"]["application/json"];
export type LlmResponse = LayrcakeResponse<LlmResult, null>;

// GET /v1/me
export type GetMeResult = operations["get_me"]["responses"][200]["content"]["application/json"];
export type GetMeResponse = LayrcakeResponse<GetMeResult, null>;

// GET /v1/trail
export type GetTrailQuery = NonNullable<operations["get_trail"]["parameters"]["query"]>;
export type GetTrailResult = operations["get_trail"]["responses"][200]["content"]["application/json"]["result"];
export type GetTrailResponse = LayrcakeResponse<GetTrailResult, null>;

// GET /v1/trail/export.csv
export type ExportTrailCsvQuery = NonNullable<operations["export_trail_csv"]["parameters"]["query"]>;
export type ExportTrailCsvResult = string;
export type ExportTrailCsvResponse = LayrcakeResponse<ExportTrailCsvResult, null>;

// GET /v1/campaigns/{id}/proof
export type GetCampaignProofResult = operations["get_campaign_proof"]["responses"][200]["content"]["application/json"];
export type GetCampaignProofResponse = LayrcakeResponse<GetCampaignProofResult, null>;

// PATCH /v1/keys/{id}
export type TightenKeyPolicyParams = operations["tighten_key_policy"]["requestBody"]["content"]["application/json"];
export type TightenKeyPolicyResult = operations["tighten_key_policy"]["responses"][200]["content"]["application/json"]["result"];
export type TightenKeyPolicyResponse = LayrcakeResponse<TightenKeyPolicyResult, null>;

// POST /v1/do_not_contact
export type ImportDoNotContactParams = operations["import_do_not_contact"]["requestBody"]["content"]["application/json"];
export type ImportDoNotContactResult = operations["import_do_not_contact"]["responses"][200]["content"]["application/json"]["result"];
export type ImportDoNotContactResponse = LayrcakeResponse<ImportDoNotContactResult, null>;

// POST /v1/kill
export type KillSendingParams = NonNullable<operations["kill_sending"]["requestBody"]>["content"]["application/json"];
export type KillSendingResult = operations["kill_sending"]["responses"][200]["content"]["application/json"]["result"];
export type KillSendingResponse = LayrcakeResponse<KillSendingResult, null>;

// POST /v1/campaigns/{id}/pause
export type PauseCampaignResult = Record<string, unknown>;
export type PauseCampaignResponse = LayrcakeResponse<PauseCampaignResult, null>;

// GET /v1/operations/{id}
export type GetOperationQuery = { cursor?: string | number };
export type GetOperationResult = Operation;
export type GetOperationResponse = LayrcakeResponse<GetOperationResult, null>;

/** The `layrcake` block on a metered response: request_id, credits_charged, credits_available and routing facts. */
export type LayrcakeMeta =
  | NonNullable<VerifyEmailResponse["layrcake"]>
  | NonNullable<EnrichResponse["layrcake"]>
  | NonNullable<FindLeadsResponse["layrcake"]>
  | NonNullable<FindIntentResponse["layrcake"]>
  | NonNullable<CheckCompaniesResponse["layrcake"]>
  | NonNullable<FindCompaniesResponse["layrcake"]>
  | NonNullable<EnrichCompanyResponse["layrcake"]>
  | NonNullable<FindPostsResponse["layrcake"]>
  | NonNullable<SetupSendingResponse["layrcake"]>
  | NonNullable<CreateCampaignResponse["layrcake"]>
  | NonNullable<AddLeadsResponse["layrcake"]>
  | NonNullable<LaunchCampaignResponse["layrcake"]>
  | NonNullable<SetLeadStatusResponse["layrcake"]>
  | NonNullable<ReplyToThreadResponse["layrcake"]>
  | NonNullable<ResearchCompanyResponse["layrcake"]>
  | NonNullable<ProspectPictureResponse["layrcake"]>;

/** One typed method per operation in the spec. The Layrcake client extends this class. */
export abstract class LayrcakeMethods {
  /** @internal */
  protected abstract _request<T>(operation: OperationSpec, input: RequestInput, options?: RequestOptions): Promise<T>;

  /**
   * Check whether one email address can receive mail, including catch-all analysis.
   *
   * `POST /v1/verify_email`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  verifyEmail(params: VerifyEmailParams & { dry_run: true }, options?: RequestOptions): Promise<VerifyEmailPlanResponse>;
  /**
   * Check whether one email address can receive mail, including catch-all analysis.
   *
   * `POST /v1/verify_email`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  verifyEmail(params: VerifyEmailParams & { dry_run?: false }, options?: RequestOptions): Promise<VerifyEmailResponse>;
  /**
   * Check whether one email address can receive mail, including catch-all analysis.
   *
   * `POST /v1/verify_email`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  verifyEmail(params: VerifyEmailParams, options?: RequestOptions): Promise<VerifyEmailResponse | VerifyEmailPlanResponse>;
  verifyEmail(params: VerifyEmailParams, options?: RequestOptions): Promise<VerifyEmailResponse | VerifyEmailPlanResponse> {
    return this._request<VerifyEmailResponse | VerifyEmailPlanResponse>(OPERATIONS.verifyEmail, { body: params }, options);
  }

  /**
   * Find a person's work email, mobile or profile from an email, LinkedIn URL, or name and company.
   *
   * `POST /v1/enrich`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  enrich(params: EnrichParams & { dry_run: true }, options?: RequestOptions): Promise<EnrichPlanResponse>;
  /**
   * Find a person's work email, mobile or profile from an email, LinkedIn URL, or name and company.
   *
   * `POST /v1/enrich`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  enrich(params: EnrichParams & { dry_run?: false }, options?: RequestOptions): Promise<EnrichResponse>;
  /**
   * Find a person's work email, mobile or profile from an email, LinkedIn URL, or name and company.
   *
   * `POST /v1/enrich`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  enrich(params: EnrichParams, options?: RequestOptions): Promise<EnrichResponse | EnrichPlanResponse>;
  enrich(params: EnrichParams, options?: RequestOptions): Promise<EnrichResponse | EnrichPlanResponse> {
    return this._request<EnrichResponse | EnrichPlanResponse>(OPERATIONS.enrich, { body: params }, options);
  }

  /**
   * Find people who match an audience description and filters.
   *
   * `POST /v1/find_leads`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findLeads(params: FindLeadsParams & { dry_run: true }, options?: RequestOptions): Promise<FindLeadsPlanResponse>;
  /**
   * Find people who match an audience description and filters.
   *
   * `POST /v1/find_leads`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findLeads(params: FindLeadsParams & { dry_run?: false }, options?: RequestOptions): Promise<FindLeadsResponse>;
  /**
   * Find people who match an audience description and filters.
   *
   * `POST /v1/find_leads`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findLeads(params: FindLeadsParams, options?: RequestOptions): Promise<FindLeadsResponse | FindLeadsPlanResponse>;
  findLeads(params: FindLeadsParams, options?: RequestOptions): Promise<FindLeadsResponse | FindLeadsPlanResponse> {
    return this._request<FindLeadsResponse | FindLeadsPlanResponse>(OPERATIONS.findLeads, { body: params }, options);
  }

  /**
   * Find hiring, funding, news and job-change signals for a list of company domains.
   *
   * `POST /v1/find_intent`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findIntent(params: FindIntentParams & { dry_run: true }, options?: RequestOptions): Promise<FindIntentPlanResponse>;
  /**
   * Find hiring, funding, news and job-change signals for a list of company domains.
   *
   * `POST /v1/find_intent`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findIntent(params: FindIntentParams & { dry_run?: false }, options?: RequestOptions): Promise<FindIntentResponse>;
  /**
   * Find hiring, funding, news and job-change signals for a list of company domains.
   *
   * `POST /v1/find_intent`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findIntent(params: FindIntentParams, options?: RequestOptions): Promise<FindIntentResponse | FindIntentPlanResponse>;
  findIntent(params: FindIntentParams, options?: RequestOptions): Promise<FindIntentResponse | FindIntentPlanResponse> {
    return this._request<FindIntentResponse | FindIntentPlanResponse>(OPERATIONS.findIntent, { body: params }, options);
  }

  /**
   * Answer one yes or no question about each company in a list, with evidence.
   *
   * `POST /v1/check_companies`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  checkCompanies(params: CheckCompaniesParams & { dry_run: true }, options?: RequestOptions): Promise<CheckCompaniesPlanResponse>;
  /**
   * Answer one yes or no question about each company in a list, with evidence.
   *
   * `POST /v1/check_companies`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  checkCompanies(params: CheckCompaniesParams & { dry_run?: false }, options?: RequestOptions): Promise<CheckCompaniesResponse>;
  /**
   * Answer one yes or no question about each company in a list, with evidence.
   *
   * `POST /v1/check_companies`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  checkCompanies(params: CheckCompaniesParams, options?: RequestOptions): Promise<CheckCompaniesResponse | CheckCompaniesPlanResponse>;
  checkCompanies(params: CheckCompaniesParams, options?: RequestOptions): Promise<CheckCompaniesResponse | CheckCompaniesPlanResponse> {
    return this._request<CheckCompaniesResponse | CheckCompaniesPlanResponse>(OPERATIONS.checkCompanies, { body: params }, options);
  }

  /**
   * Find companies that match a description and filters.
   *
   * `POST /v1/find_companies`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findCompanies(params: FindCompaniesParams & { dry_run: true }, options?: RequestOptions): Promise<FindCompaniesPlanResponse>;
  /**
   * Find companies that match a description and filters.
   *
   * `POST /v1/find_companies`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findCompanies(params?: FindCompaniesParams & { dry_run?: false }, options?: RequestOptions): Promise<FindCompaniesResponse>;
  /**
   * Find companies that match a description and filters.
   *
   * `POST /v1/find_companies`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  findCompanies(params?: FindCompaniesParams, options?: RequestOptions): Promise<FindCompaniesResponse | FindCompaniesPlanResponse>;
  findCompanies(params: FindCompaniesParams = {}, options?: RequestOptions): Promise<FindCompaniesResponse | FindCompaniesPlanResponse> {
    return this._request<FindCompaniesResponse | FindCompaniesPlanResponse>(OPERATIONS.findCompanies, { body: params }, options);
  }

  /**
   * Get profile, technology, funding or relationship data for one company domain.
   *
   * `POST /v1/enrich_company`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   */
  enrichCompany(params: EnrichCompanyParams, options?: RequestOptions): Promise<EnrichCompanyResponse> {
    return this._request<EnrichCompanyResponse>(OPERATIONS.enrichCompany, { body: params }, options);
  }

  /**
   * Find social posts by topic, author or company, or the people engaging with given posts.
   *
   * `POST /v1/find_posts`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   */
  findPosts(params: FindPostsParams = {}, options?: RequestOptions): Promise<FindPostsResponse> {
    return this._request<FindPostsResponse>(OPERATIONS.findPosts, { body: params }, options);
  }

  /**
   * Quote, then buy after human approval, warmed domains and mailboxes for sending.
   *
   * `POST /v1/setup_sending`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  setupSending(params: SetupSendingParams & { dry_run: true }, options?: RequestOptions): Promise<SetupSendingPlanResponse>;
  /**
   * Quote, then buy after human approval, warmed domains and mailboxes for sending.
   *
   * `POST /v1/setup_sending`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  setupSending(params: SetupSendingParams & { dry_run?: false }, options?: RequestOptions): Promise<SetupSendingResponse>;
  /**
   * Quote, then buy after human approval, warmed domains and mailboxes for sending.
   *
   * `POST /v1/setup_sending`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  setupSending(params: SetupSendingParams, options?: RequestOptions): Promise<SetupSendingResponse | SetupSendingPlanResponse>;
  setupSending(params: SetupSendingParams, options?: RequestOptions): Promise<SetupSendingResponse | SetupSendingPlanResponse> {
    return this._request<SetupSendingResponse | SetupSendingPlanResponse>(OPERATIONS.setupSending, { body: params }, options);
  }

  /**
   * Create a draft email campaign with leads and sequence steps. Nothing sends yet.
   *
   * `POST /v1/campaigns`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  createCampaign(params: CreateCampaignParams & { dry_run: true }, options?: RequestOptions): Promise<CreateCampaignPlanResponse>;
  /**
   * Create a draft email campaign with leads and sequence steps. Nothing sends yet.
   *
   * `POST /v1/campaigns`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  createCampaign(params: CreateCampaignParams & { dry_run?: false }, options?: RequestOptions): Promise<CreateCampaignResponse>;
  /**
   * Create a draft email campaign with leads and sequence steps. Nothing sends yet.
   *
   * `POST /v1/campaigns`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  createCampaign(params: CreateCampaignParams, options?: RequestOptions): Promise<CreateCampaignResponse | CreateCampaignPlanResponse>;
  createCampaign(params: CreateCampaignParams, options?: RequestOptions): Promise<CreateCampaignResponse | CreateCampaignPlanResponse> {
    return this._request<CreateCampaignResponse | CreateCampaignPlanResponse>(OPERATIONS.createCampaign, { body: params }, options);
  }

  /**
   * Add leads to a campaign. Adding to an active campaign needs human approval.
   *
   * `POST /v1/add_leads`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  addLeads(params: AddLeadsParams & { dry_run: true }, options?: RequestOptions): Promise<AddLeadsPlanResponse>;
  /**
   * Add leads to a campaign. Adding to an active campaign needs human approval.
   *
   * `POST /v1/add_leads`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  addLeads(params: AddLeadsParams & { dry_run?: false }, options?: RequestOptions): Promise<AddLeadsResponse>;
  /**
   * Add leads to a campaign. Adding to an active campaign needs human approval.
   *
   * `POST /v1/add_leads`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  addLeads(params: AddLeadsParams, options?: RequestOptions): Promise<AddLeadsResponse | AddLeadsPlanResponse>;
  addLeads(params: AddLeadsParams, options?: RequestOptions): Promise<AddLeadsResponse | AddLeadsPlanResponse> {
    return this._request<AddLeadsResponse | AddLeadsPlanResponse>(OPERATIONS.addLeads, { body: params }, options);
  }

  /**
   * Launch a draft campaign. Returns a preview first. A person approves before anything sends.
   *
   * `POST /v1/launch_campaign`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * May answer 202 with the approval state instead of a result.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  launchCampaign(params: LaunchCampaignParams & { dry_run: true }, options?: RequestOptions): Promise<LaunchCampaignPlanResponse>;
  /**
   * Launch a draft campaign. Returns a preview first. A person approves before anything sends.
   *
   * `POST /v1/launch_campaign`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * May answer 202 with the approval state instead of a result.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  launchCampaign(params: LaunchCampaignParams & { dry_run?: false }, options?: RequestOptions): Promise<LaunchCampaignResponse>;
  /**
   * Launch a draft campaign. Returns a preview first. A person approves before anything sends.
   *
   * `POST /v1/launch_campaign`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * May answer 202 with the approval state instead of a result.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  launchCampaign(params: LaunchCampaignParams, options?: RequestOptions): Promise<LaunchCampaignResponse | LaunchCampaignPlanResponse>;
  launchCampaign(params: LaunchCampaignParams, options?: RequestOptions): Promise<LaunchCampaignResponse | LaunchCampaignPlanResponse> {
    return this._request<LaunchCampaignResponse | LaunchCampaignPlanResponse>(OPERATIONS.launchCampaign, { body: params }, options);
  }

  /**
   * List campaign replies, newest first. Free.
   *
   * `POST /v1/get_replies`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   */
  getReplies(params: GetRepliesParams = {}, options?: RequestOptions): Promise<GetRepliesResponse> {
    return this._request<GetRepliesResponse>(OPERATIONS.getReplies, { body: params }, options);
  }

  /**
   * Read one reply in full, including its body and lead state. Free.
   *
   * `POST /v1/get_reply`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   */
  getReply(params: GetReplyParams, options?: RequestOptions): Promise<GetReplyResponse> {
    return this._request<GetReplyResponse>(OPERATIONS.getReply, { body: params }, options);
  }

  /**
   * Record a lead's interest status, such as interested or meeting_booked. Free.
   *
   * `POST /v1/set_lead_status`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  setLeadStatus(params: SetLeadStatusParams & { dry_run: true }, options?: RequestOptions): Promise<SetLeadStatusPlanResponse>;
  /**
   * Record a lead's interest status, such as interested or meeting_booked. Free.
   *
   * `POST /v1/set_lead_status`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  setLeadStatus(params: SetLeadStatusParams & { dry_run?: false }, options?: RequestOptions): Promise<SetLeadStatusResponse>;
  /**
   * Record a lead's interest status, such as interested or meeting_booked. Free.
   *
   * `POST /v1/set_lead_status`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  setLeadStatus(params: SetLeadStatusParams, options?: RequestOptions): Promise<SetLeadStatusResponse | SetLeadStatusPlanResponse>;
  setLeadStatus(params: SetLeadStatusParams, options?: RequestOptions): Promise<SetLeadStatusResponse | SetLeadStatusPlanResponse> {
    return this._request<SetLeadStatusResponse | SetLeadStatusPlanResponse>(OPERATIONS.setLeadStatus, { body: params }, options);
  }

  /**
   * Reply in an existing thread. Returns a preview first. A person approves before it sends.
   *
   * `POST /v1/reply_to_thread`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * May answer 202 with the approval state instead of a result.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  replyToThread(params: ReplyToThreadParams & { dry_run: true }, options?: RequestOptions): Promise<ReplyToThreadPlanResponse>;
  /**
   * Reply in an existing thread. Returns a preview first. A person approves before it sends.
   *
   * `POST /v1/reply_to_thread`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * May answer 202 with the approval state instead of a result.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  replyToThread(params: ReplyToThreadParams & { dry_run?: false }, options?: RequestOptions): Promise<ReplyToThreadResponse>;
  /**
   * Reply in an existing thread. Returns a preview first. A person approves before it sends.
   *
   * `POST /v1/reply_to_thread`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   *
   * May answer 202 with the approval state instead of a result.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  replyToThread(params: ReplyToThreadParams, options?: RequestOptions): Promise<ReplyToThreadResponse | ReplyToThreadPlanResponse>;
  replyToThread(params: ReplyToThreadParams, options?: RequestOptions): Promise<ReplyToThreadResponse | ReplyToThreadPlanResponse> {
    return this._request<ReplyToThreadResponse | ReplyToThreadPlanResponse>(OPERATIONS.replyToThread, { body: params }, options);
  }

  /**
   * Run source-backed research on one company in the background.
   *
   * `POST /v1/research_company`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  researchCompany(params: ResearchCompanyParams & { dry_run: true }, options?: RequestOptions): Promise<ResearchCompanyPlanResponse>;
  /**
   * Run source-backed research on one company in the background.
   *
   * `POST /v1/research_company`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  researchCompany(params: ResearchCompanyParams & { dry_run?: false }, options?: RequestOptions): Promise<ResearchCompanyResponse>;
  /**
   * Run source-backed research on one company in the background.
   *
   * `POST /v1/research_company`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  researchCompany(params: ResearchCompanyParams, options?: RequestOptions): Promise<ResearchCompanyResponse | ResearchCompanyPlanResponse>;
  researchCompany(params: ResearchCompanyParams, options?: RequestOptions): Promise<ResearchCompanyResponse | ResearchCompanyPlanResponse> {
    return this._request<ResearchCompanyResponse | ResearchCompanyPlanResponse>(OPERATIONS.researchCompany, { body: params }, options);
  }

  /**
   * Build one picture of a person, a company, or both, in the background.
   *
   * `POST /v1/prospect_picture`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  prospectPicture(params: ProspectPictureParams & { dry_run: true }, options?: RequestOptions): Promise<ProspectPicturePlanResponse>;
  /**
   * Build one picture of a person, a company, or both, in the background.
   *
   * `POST /v1/prospect_picture`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  prospectPicture(params?: ProspectPictureParams & { dry_run?: false }, options?: RequestOptions): Promise<ProspectPictureResponse>;
  /**
   * Build one picture of a person, a company, or both, in the background.
   *
   * `POST /v1/prospect_picture`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   *
   * Pass `dry_run: true` to get the plan instead: the most it can cost and any limit it would trip. Nothing runs or is charged.
   */
  prospectPicture(params?: ProspectPictureParams, options?: RequestOptions): Promise<ProspectPictureResponse | ProspectPicturePlanResponse>;
  prospectPicture(params: ProspectPictureParams = {}, options?: RequestOptions): Promise<ProspectPictureResponse | ProspectPicturePlanResponse> {
    return this._request<ProspectPictureResponse | ProspectPicturePlanResponse>(OPERATIONS.prospectPicture, { body: params }, options);
  }

  /**
   * Chat with a hosted model through Layrcake.
   *
   * `POST /v1/llm/chat`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   */
  llm(params: LlmParams, options?: RequestOptions): Promise<LlmResponse> {
    return this._request<LlmResponse>(OPERATIONS.llm, { body: params }, options);
  }

  /**
   * Who this key is and what it may do.
   *
   * `GET /v1/me`
   */
  getMe(options?: RequestOptions): Promise<GetMeResponse> {
    return this._request<GetMeResponse>(OPERATIONS.getMe, {  }, options);
  }

  /**
   * Your workspace's outcome record, newest first, typed per kind.
   *
   * `GET /v1/trail`
   */
  getTrail(query: GetTrailQuery = {}, options?: RequestOptions): Promise<GetTrailResponse> {
    return this._request<GetTrailResponse>(OPERATIONS.getTrail, { query }, options);
  }

  /**
   * Complete bounded trail CSV.
   *
   * `GET /v1/trail/export.csv`
   */
  exportTrailCsv(query: ExportTrailCsvQuery = {}, options?: RequestOptions): Promise<ExportTrailCsvResponse> {
    return this._request<ExportTrailCsvResponse>(OPERATIONS.exportTrailCsv, { query }, options);
  }

  /**
   * Whole retained campaign proof as safe JSON.
   *
   * `GET /v1/campaigns/{id}/proof`
   */
  getCampaignProof(id: string, options?: RequestOptions): Promise<GetCampaignProofResponse> {
    return this._request<GetCampaignProofResponse>(OPERATIONS.getCampaignProof, { path: { id } }, options);
  }

  /**
   * Tighten another key's policy (lower caps/limits, drop scopes).
   *
   * `PATCH /v1/keys/{id}`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   */
  tightenKeyPolicy(id: string, params: TightenKeyPolicyParams = {}, options?: RequestOptions): Promise<TightenKeyPolicyResponse> {
    return this._request<TightenKeyPolicyResponse>(OPERATIONS.tightenKeyPolicy, { path: { id }, body: params }, options);
  }

  /**
   * Add up to 5,000 emails to the workspace do-not-contact list.
   *
   * `POST /v1/do_not_contact`
   *
   * Idempotency key: optional. The SDK sends one so automatic retries are safe.
   */
  importDoNotContact(params: ImportDoNotContactParams, options?: RequestOptions): Promise<ImportDoNotContactResponse> {
    return this._request<ImportDoNotContactResponse>(OPERATIONS.importDoNotContact, { body: params }, options);
  }

  /**
   * Stop sending for the whole workspace: pauses every launching/active campaign (provider-verified) and blocks new launches, purchases and replies until an owner clears it in the console.
   *
   * `POST /v1/kill`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   */
  killSending(params: KillSendingParams = {}, options?: RequestOptions): Promise<KillSendingResponse> {
    return this._request<KillSendingResponse>(OPERATIONS.killSending, { body: params }, options);
  }

  /**
   * Pause one campaign through verified containment.
   *
   * `POST /v1/campaigns/{id}/pause`
   *
   * Idempotency key: required. The SDK sends one if you do not. Pass your own to retry safely later.
   */
  pauseCampaign(id: string, options?: RequestOptions): Promise<PauseCampaignResponse> {
    return this._request<PauseCampaignResponse>(OPERATIONS.pauseCampaign, { path: { id } }, options);
  }

  /**
   * Read the state, progress and result of a background operation.
   *
   * `GET /v1/operations/{id}`
   */
  getOperation(id: string, query: GetOperationQuery = {}, options?: RequestOptions): Promise<GetOperationResponse> {
    return this._request<GetOperationResponse>(OPERATIONS.getOperation, { path: { id }, query }, options);
  }
}
