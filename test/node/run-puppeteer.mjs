import { createServer } from "http-server";
import puppeteer from "puppeteer";
import { assert, expect } from "chai";

const PORT = 8081;
const START_SERVER = false;

const puppeteerOptions = {
  headless: true,
  timeout: 10000,
};

// capture globals
const globals = Object.fromEntries(
  ["browser", "expect"].map((k) => [k, globalThis[k]])
);
globalThis.expect = expect;
const browser = await puppeteer.launch(puppeteerOptions);
globalThis.browser = browser;

function restoreGlobals() {
  Object.entries(globals).forEach(([key, value]) => (globalThis[key] = value));
}

let server;
before(async () => {
  // stand up a server for port 8081
  if (START_SERVER) {
    server = createServer();
    server.listen(PORT);
  }
});

after(async () => {
  await browser.close();
  if (START_SERVER) await server.close();
  restoreGlobals();
});

describe("My Test", () => {
  it("Passes", () => {
    assert("1");
  });

  it("Launch page", async () => {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/index.html`);
    await sleep(3000);
    await page.screenshot({ path: "example.png" });
    page.close();
  }).timeout(10000);
});

async function sleep(ms = 1000) {
  return new Promise((good, bad) => {
    try {
      setTimeout(() => good(), ms);
    } catch (ex) {
      bad(ex);
    }
  });
}
