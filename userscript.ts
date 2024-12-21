/**  type definitions for Cosense UserScript
 *
 * @module
 */
export * from "./base.ts";
export * from "./blocks.ts";
export * from "./node/node.ts";
export * from "./layout.ts";
export * from "./pageMenu.ts";
export * from "./eventName.ts";
export * from "./scrapbox.ts";
export type { EventEmitter } from "./vendor/events.ts";
import type { Scrapbox } from "./scrapbox.ts";

// The following assignments are a workaround for esbuild
// Use IIFE to tree-shaking

/** `scrapbox` */
export const scrapbox: Scrapbox = /* @__PURE__ */ (
  // deno-lint-ignore no-explicit-any
  () => (globalThis as any).scrapbox
)();

/** an alias for {@linkcode scrapbox} */
export const cosense: Scrapbox = /* @__PURE__ */ (
  // deno-lint-ignore no-explicit-any
  () => (globalThis as any).cosense
)();
