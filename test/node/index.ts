import "./node-and-browser";
import "chai";

import { assert } from "chai";

describe("tests that run in node only", () => {
  it("asserts", () => {
    assert.ok(1);
  });
});
