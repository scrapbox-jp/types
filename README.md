## @cosense/types

[![JSR](https://jsr.io/badges/@cosense/types)](https://jsr.io/@cosense/types)
[![npm](https://img.shields.io/npm/v/@cosense/types)](https://www.npmjs.com/package/@cosense/types)
[![test](https://github.com/scrapbox-jp/types/workflows/ci/badge.svg)](https://github.com/scrapbox-jp/types/actions?query=workflow%3Aci)

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

```ts
// ESM syntax
import type { PageList } from "@cosense/types/rest";
import type { Scrapbox } from "@cosense/types/userscript";
```

### Usage Examples

```ts
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

```ts
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
