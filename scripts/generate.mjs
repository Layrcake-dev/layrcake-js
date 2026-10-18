#!/usr/bin/env node
// Regenerates src/generated/* and the README method table from openapi.json.
import { readFileSync, writeFileSync } from "node:fs";
import { README_PATH, generateAll, loadSpec } from "./codegen.mjs";

const { files, problems, operations } = await generateAll(loadSpec(), readFileSync(README_PATH, "utf8"));
for (const [path, text] of Object.entries(files)) writeFileSync(path, text);
console.log(`Generated ${operations.length} methods.`);
for (const p of problems) console.warn(`spec note: ${p}`);
