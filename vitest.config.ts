import { defineConfig } from "vitest/config";

export default defineConfig({
  // src/agent-tools imports the client as "layrcake". Tests run it from source.
  resolve: { alias: [{ find: /^layrcake$/, replacement: new URL("./src/index.ts", import.meta.url).pathname }] },
  // Node 18 has Web Crypto only behind a flag. agent-tools needs it, so the tests
  // install it the way a Node 18 user would enable it.
  test: { setupFiles: ["./test/webcrypto.setup.mjs"] },
});
