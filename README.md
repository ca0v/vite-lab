I am having problems in a production environment mixing new tech (vite/esbuild) with older tech (marionette/backbone/jquery) in an openlayers project so this is a minimal environment to reproduce and then resolve my problems.

The specific issue is esbuild cannot find my "ol" packages but when I standup a new ol-esbuild project, like the one in `./ol-esbuild`, it works fine.

So far I'm not able to reproduce any of the issues. I have the following:

- node only test
- browser only test
- browser-side tests that can run in node
- node-side tests that can run in a browser
- puppeteer running node executing browser tests

What I have left to do:

- introduce marionette, which relies on `backbone.$.Deferred`
- introduce `vite` (maybe I don't need it?)
- introduce `vite build`

What is unresolved

- how to manage css with esbuild
