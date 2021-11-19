import { assert } from "chai";
import { Map, View } from "ol/index";
import { Tile } from "ol/layer";
import { TileDebug } from "ol/source";
import "ol/ol.css";

describe("openlayer tests", () => {
  before(() => {
    const map = document.createElement("div");
    map.id = "map";
    map.classList.add("map");

    document.body.appendChild(map);
  });

  after(() => {
    //
  });

  it("creates a map", () => {
    const map = new Map({
      target: "map",
      view: new View({
        center: [0, 0],
        zoom: 10,
      }),
      layers: [
        new Tile({
          source: new TileDebug({}),
        }),
      ],
    });
  });
});
