import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Joshua Placidi<\/title>/i);
  assert.match(html, /I am a PhD researcher/);
  assert.doesNotMatch(html, /Machine learning researcher building/);
  assert.match(html, /href="\/research"/);
  assert.match(html, /href="\/blog"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders the research and blog collections", async () => {
  const [researchResponse, blogResponse] = await Promise.all([
    render("/research"),
    render("/blog"),
  ]);

  assert.equal(researchResponse.status, 200);
  assert.equal(blogResponse.status, 200);

  const [researchHtml, blogHtml] = await Promise.all([
    researchResponse.text(),
    blogResponse.text(),
  ]);

  assert.match(researchHtml, /Publications/);
  assert.match(researchHtml, /Pretraining EHR Foundation Models/);
  assert.match(blogHtml, /Writings/);
  assert.match(blogHtml, /A Life Is Worth 10/);
});
