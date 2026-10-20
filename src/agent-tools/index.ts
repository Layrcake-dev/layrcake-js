/**
 * layrcake/agent-tools: the Layrcake agent rules as framework-neutral tools.
 *
 * Framework packages such as @layrcake/ai-sdk and @layrcake/mastra are thin wrappers
 * over this module, and hook-based agents use `createAgentRun` directly, so every
 * integration applies the same budget, dry run, idempotency, verify-before-send and
 * approval rules from one place. It uses Web Crypto and runs on Node 20 or later, Bun,
 * Deno and edge runtimes.
 */
export {
  AGENT_TOOL_DESCRIPTIONS,
  AGENT_TOOL_NAMES,
  AGENT_TOOL_PARAMETERS,
  PAID_TOOLS,
  STOP_TOOL,
  createAgentTools,
} from "./tools.js";
export type {
  AgentTool,
  AgentToolKit,
  AgentToolName,
  AgentTools,
  AgentToolsOptions,
  CampaignLead,
  CampaignStep,
  ChargedOutput,
  CreateCampaignInput,
  CreateCampaignOutput,
  DryRunPlan,
  EnrichInput,
  EnrichOutput,
  FindLeadsInput,
  FindLeadsOutput,
  FoundLead,
  LaunchCampaignInput,
  LaunchCampaignOutput,
  VerifyEmailInput,
  VerifyEmailOutput,
} from "./tools.js";
export { AgentToolRefusal, MAX_CALL_CEILING, SENDABLE_STATUSES, createAgentRun, toMicro } from "./run.js";
export type { AgentRun, AgentRunOptions, AgentRunSummary, AgentToolRefusalCode } from "./run.js";
export { defineSchema, validate } from "./schema.js";
export type { AgentToolSchema, JsonSchema, JsonSchemaTarget, SchemaIssue } from "./schema.js";
