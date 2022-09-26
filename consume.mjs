import x from "./async.cjs";

console.log(x);

console.log(x.baz);

console.log(await x.fooFunction());

console.log((await x.fooPromise).foo);
