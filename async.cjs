(async () => {
  // This works the same as if it were outside the async IIFE wrapper
  exports.baz = "bazooka";

  // Key point: the following two workarounds are useful because
  // you CANNOT export a value resolved from a promise here, because
  // CommonJS module exports are synchronous.

  // Export an async function that returns just the value of `foo`
  exports.fooFunction = async () => (await import("./lib.mjs")).foo;

  // Re-export entire module as a promise (must be awaited after import)
  exports.fooPromise = import("./lib.mjs");
})();
