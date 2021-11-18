import "./node-and-browser";

import { assert } from "chai";

describe("test that run in node only", () => {
  it("asserts", () => {
    assert.ok(1);
  });
});
