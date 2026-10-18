#!/usr/bin/env node
// Fails when generated files are stale against openapi.json. Writes nothing.
import { existsSync, readFileSync } from "node:fs";
import { relative } from "node:path";
import { README_PATH, ROOT, generateAll, loadSpec } from "./codegen.mjs";

const { files } = await generateAll(loadSpec(), readFileSync(README_PATH, "utf8"));
const stale = Object.entries(files)
  .filter(([path, text]) => !existsSync(path) || readFileSync(path, "utf8") !== text)
  .map(([path]) => relative(ROOT, path));
if (stale.length > 0) {
  console.error(`Generated code is stale: ${stale.join(", ")}`);
  console.error("Run `npm run generate` and commit the result.");
  process.exit(1);
}
console.log("Generated code matches openapi.json.");
