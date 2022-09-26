// Import CommonJS into CommonJS
console.log(require("./lib.cjs").foo);

// Dynamic import CommonJS into CommonJS
(async () => {
  console.log((await import("./lib.cjs")).foo);
})();

// Import ES Module into CommonJS
(async () => {
  console.log((await import("./lib.mjs")).foo);
})();
