import foo2, { foo as foo1, ready } from "./dynamic-module.js";
const foo3 = await ready;
console.log(JSON.stringify({ foo1, foo2, foo3 }));
