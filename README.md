## @cosense/types

[![JSR](https://jsr.io/badges/@cosense/types)](https://jsr.io/@cosense/types)
[![npm](https://img.shields.io/npm/v/@cosense/types)](https://www.npmjs.com/package/@cosense/types)
[![test](https://github.com/scrapbox-jp/types/workflows/ci/badge.svg)](https://github.com/scrapbox-jp/types/actions?query=workflow%3Aci)

> **Node.js & npm Notice (since 0.11.1)**
>
> Now also published on **[npm](https://www.npmjs.com/package/@cosense/types)**.
>
> Node.js support is **experimental**: I mainly target Deno and browsers, so I
> don't actively maintain Node.js compatibility. Some tests run, but there may
> still be runtime or type gaps remaining. Please use it with that
> understanding.
>
> That said, **issues / PRs to improve Node support are very welcome!**
>
> If you don't need a public npm package, you can consume the JSR version
> directly—`npm` via a custom registry in `.npmrc`; `yarn` or `pnpm` need no
> extra config. See the
> [JSR docs](https://jsr.io/docs/using-packages#adding-a-package).

Type definitions for [cosense](https://cosen.se)

## Getting Started

This library provides TypeScript type definitions for Scrapbox/Cosense and
supports both JSR (JavaScript Registry) and npm installation methods.

### Installation

#### Option 1: JSR (Recommended for Deno projects)

If you want to use type definitions for REST API, run

```bash
deno add jsr:@cosense/types/rest
```

If you want to use type definitions for UserScript, run

```bash
deno add jsr:@cosense/types/userscript
```

#### Option 2: npm (For Node.js projects)

Install via npm:

```bash
npm install @cosense/types
```

Import the library:

```typescript ignore
// ESM syntax
import type { PageList } from "@cosense/types/rest";
import type { Scrapbox } from "@cosense/types/userscript";
```

### Usage Examples

```typescript ignore
// Example for JSR (Deno)
import type { PageList } from "jsr:@cosense/types/rest";

const pages: PageList = {
  projectName: "example-project",
  skip: 0,
  limit: 100,
  count: 42,
  pages: [],
};
```

For npm users:

```typescript ignore
// Example for npm (Node.js)
import type { PageList } from "@cosense/types/rest";
import type { Scrapbox } from "@cosense/types/userscript";

// Use the types in your Node.js application
const pageData: PageList = {
  projectName: "my-project",
  skip: 0,
  limit: 50,
  count: 10,
  pages: [],
};
```
