import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

await esbuild.build({
  entryPoints: ["./index.ts"],
  bundle: true,
  outfile: "bin/index.js",
  loader: { ".png": "dataurl" },

  plugins: [sassPlugin()],
});
