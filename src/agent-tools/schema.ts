/**
 * Tool argument schemas with no dependencies.
 *
 * Each schema is plain JSON Schema plus a small validator, wrapped in the Standard
 * Schema interface (https://standardschema.dev) with its JSON Schema extension. The
 * Vercel AI SDK (7+) and Mastra (1.11+) take these as `inputSchema` directly, so the
 * framework packages need no zod. The validator covers only the keywords these
 * schemas use.
 */

/** The JSON Schema keywords the agent tool schemas use. */
export interface JsonSchema {
  type: "object" | "array" | "string" | "integer";
  description?: string;
  properties?: Readonly<Record<string, JsonSchema>>;
  required?: readonly string[];
  additionalProperties?: false;
  items?: JsonSchema;
  minLength?: number;
  maxLength?: number;
  minItems?: number;
  maxItems?: number;
  minimum?: number;
  maximum?: number;
  pattern?: string;
  format?: "uuid";
  default?: string | number;
}

/** One problem with a tool argument. Shaped like a Standard Schema issue. */
export interface SchemaIssue {
  readonly message: string;
  readonly path: readonly (string | number)[];
}

type ValidateResult<T> = { readonly value: T; readonly issues?: undefined } | { readonly issues: readonly SchemaIssue[] };

/** JSON Schema drafts `~standard.jsonSchema` can produce. */
export type JsonSchemaTarget = "draft-07" | "draft-2020-12" | "openapi-3.0";

/**
 * A tool's argument schema. It implements Standard Schema V1 and Standard JSON
 * Schema V1. The types are written out here so the package stays dependency-free.
 */
export interface AgentToolSchema<T> {
  readonly "~standard": {
    readonly version: 1;
    readonly vendor: "layrcake";
    readonly validate: (value: unknown) => ValidateResult<T>;
    readonly jsonSchema: {
      readonly input: (options: { readonly target: string }) => Record<string, unknown>;
      readonly output: (options: { readonly target: string }) => Record<string, unknown>;
    };
    readonly types?: { readonly input: T; readonly output: T } | undefined;
  };
}

const SCHEMA_URLS: Record<string, string | null> = {
  "draft-07": "http://json-schema.org/draft-07/schema#",
  "draft-2020-12": "https://json-schema.org/draft/2020-12/schema",
  // OpenAPI 3.0 schema objects take no $schema keyword.
  "openapi-3.0": null,
};

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);

function label(path: readonly (string | number)[]): string {
  if (path.length === 0) return "The input";
  return path.map((part, i) => (typeof part === "number" ? `[${part}]` : i === 0 ? part : `.${part}`)).join("");
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

function check(schema: JsonSchema, value: unknown, path: (string | number)[], issues: SchemaIssue[]): unknown {
  const fail = (message: string) => {
    issues.push({ message: `${label(path)} ${message}`, path: [...path] });
    return value;
  };
  switch (schema.type) {
    case "object": {
      if (!isRecord(value)) return fail("must be an object");
      const required = schema.required ?? [];
      const out: Record<string, unknown> = {};
      // Unknown keys are dropped, not refused, so a stray argument cannot reach the API.
      for (const [key, sub] of Object.entries(schema.properties ?? {})) {
        let v = value[key];
        // OpenAI strict mode sends null for optional fields. Treat it as absent.
        if (v === null && !required.includes(key)) v = undefined;
        if (v === undefined) {
          if (sub.default !== undefined) out[key] = sub.default;
          else if (required.includes(key)) issues.push({ message: `${label([...path, key])} is required`, path: [...path, key] });
          continue;
        }
        out[key] = check(sub, v, [...path, key], issues);
      }
      return out;
    }
    case "array": {
      if (!Array.isArray(value)) return fail("must be a list");
      if (schema.minItems !== undefined && value.length < schema.minItems) fail(`must have at least ${plural(schema.minItems, "item")}`);
      if (schema.maxItems !== undefined && value.length > schema.maxItems) fail(`must have at most ${plural(schema.maxItems, "item")}`);
      return schema.items ? value.map((item, i) => check(schema.items!, item, [...path, i], issues)) : value;
    }
    case "string": {
      if (typeof value !== "string") return fail("must be a string");
      if (schema.minLength !== undefined && value.length < schema.minLength) fail(`must have at least ${plural(schema.minLength, "character")}`);
      if (schema.maxLength !== undefined && value.length > schema.maxLength) fail(`must have at most ${plural(schema.maxLength, "character")}`);
      if (schema.pattern !== undefined && !new RegExp(schema.pattern).test(value)) fail(schema.format === "uuid" ? "must be a UUID" : "has the wrong format");
      return value;
    }
    case "integer": {
      if (typeof value !== "number" || !Number.isInteger(value)) return fail("must be a whole number");
      if (schema.minimum !== undefined && value < schema.minimum) fail(`must be at least ${schema.minimum}`);
      if (schema.maximum !== undefined && value > schema.maximum) fail(`must be at most ${schema.maximum}`);
      return value;
    }
  }
}

/** Checks a value against a schema. Applies defaults and drops unknown keys. */
export function validate<T>(schema: JsonSchema, value: unknown): ValidateResult<T> {
  const issues: SchemaIssue[] = [];
  const out = check(schema, value, [], issues);
  return issues.length > 0 ? { issues } : { value: out as T };
}

/** Wraps a JSON Schema as an AgentToolSchema. */
export function defineSchema<T>(schema: JsonSchema): AgentToolSchema<T> {
  const convert = ({ target }: { readonly target: string }): Record<string, unknown> => {
    if (!(target in SCHEMA_URLS)) throw new Error(`layrcake/agent-tools has no JSON Schema for target "${target}". Use draft-07, draft-2020-12 or openapi-3.0.`);
    // A fresh copy each time: callers such as the AI SDK add keys to what they get.
    const copy = JSON.parse(JSON.stringify(schema)) as Record<string, unknown>;
    const url = SCHEMA_URLS[target];
    return url ? { $schema: url, ...copy } : copy;
  };
  return {
    "~standard": {
      version: 1,
      vendor: "layrcake",
      validate: (value) => validate<T>(schema, value),
      jsonSchema: { input: convert, output: convert },
    },
  };
}
