// Import ES Module into ES Module
import { foo as fooESModule } from "./lib.mjs";
console.log(fooESModule);

// Dynamic import ES Module into ES Module
(async () => {
  console.log((await import("./lib.mjs")).foo);
})();

// Import CommonJS into ES Module
import { foo as fooCommonJS } from "./lib.cjs";
console.log(fooCommonJS);
