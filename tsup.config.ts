import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/index.ts", "agent-tools": "src/agent-tools/index.ts" },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: false,
  target: "es2022",
  platform: "neutral",
  treeshake: true,
  // agent-tools imports the client as "layrcake", so both entry points share one
  // Layrcake and one LayrcakeError class at runtime and in the type declarations.
  external: ["layrcake"],
});
