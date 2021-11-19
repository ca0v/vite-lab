import { expect } from "chai";
import { toDegrees } from "ol/math";

describe("openlayers tests", () => {
  it("toDegrees", () => {
    expect(toDegrees(Math.PI / 4)).to.equal(45);
  });
});
