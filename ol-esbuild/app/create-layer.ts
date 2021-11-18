import TileLayer from "ol/layer/Tile.js";
import XYZ from "ol/source/XYZ";

export function createTileLayer() {
  return new TileLayer({
    source: new XYZ({
      url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    }),
  });
}
