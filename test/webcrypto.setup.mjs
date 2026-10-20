// Node 18 ships Web Crypto behind --experimental-global-webcrypto. Later versions
// and every other runtime have it, so this does nothing there.
import { webcrypto } from "node:crypto";

if (!globalThis.crypto?.subtle) Object.defineProperty(globalThis, "crypto", { value: webcrypto, configurable: true });
