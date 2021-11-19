import "mocha/mocha-es2018";
console.assert(!!chai, "chai exists");
mocha.setup({ ui: "bdd", bail: false, timeout: 3000 });
(async () => {
  await import("./browser-only");
  await import("./node-and-browser");
  await import("../node/node-and-browser");
  const runner = mocha.run();
})();
