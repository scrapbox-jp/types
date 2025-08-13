/// <reference lib="deno.ns" />
import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: [
    {
      name: "./rest",
      path: "./rest.ts",
    },
    {
      name: "./userscript",
      path: "./userscript.ts",
    },
    {
      name: "./websocket",
      path: "./websocket.ts",
    },
  ],
  outDir: "./npm",
  shims: { deno: "dev" },
  package: {
    // package.json properties
    name: "@cosense/types",
    version: Deno.env.get("VERSION") ?? "0.0.0",
    description: "Type definitions for cosense",
    author: "scrapbox-jp",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/scrapbox-jp/types.git",
    },
    homepage: "https://github.com/scrapbox-jp/types#readme",
    bugs: {
      url: "https://github.com/scrapbox-jp/types/issues",
    },
    keywords: [
      "scrapbox",
      "cosense",
      "types",
      "typescript",
      "deno",
    ],
    engines: {
      node: ">=16.0.0",
    },
  },
  // Don't run type checking during build to avoid Node.js compatibility issues
  typeCheck: false,
  declaration: "inline",
  compilerOptions: {
    lib: ["ESNext", "DOM", "DOM.Iterable"],
    target: "ES2023",
  },
  postBuild: async () => {
    await Deno.copyFile("LICENSE", "npm/LICENSE");
    await Deno.copyFile("README.md", "npm/README.md");
  },
});
