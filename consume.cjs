const x = require("./async.cjs");

console.log(x);

console.log(x.baz);

(async () => {
  console.log(await x.fooFunction());

  console.log((await x.fooPromise).foo);
})();
