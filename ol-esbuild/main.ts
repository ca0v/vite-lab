import { Map, View } from "ol/index.js";
import { createTileLayer } from "./app/create-layer.js";
import { reloadPage } from "./app/reload-page.js";

export function main() {
  reloadPage(1000 * 60 * 1);
  new Map({
    target: "map",
    layers: [createTileLayer()],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
}
