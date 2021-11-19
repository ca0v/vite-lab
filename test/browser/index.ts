import "mocha/mocha-es2018";
console.assert(!!chai, "chai exists");

//import { assert } from "chai";

mocha.setup({ ui: "bdd", bail: false, timeout: 3000 });
const runner = mocha.run();

describe("tests that run in browser only", () => {
  import("./node-and-browser");
  it("asserts", () => {
    //assert.ok(1);
  });
});
