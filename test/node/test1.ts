import { assert } from "chai";

describe("tests that run in node only", () => {
  it("asserts", () => {
    assert.ok(1);
  });
});
