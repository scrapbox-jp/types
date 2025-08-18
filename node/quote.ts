import type { Unit } from "./unit.ts";
import type { Node, NodeWithoutIndent } from "./node.ts";

/** 引用記法 */
export interface Quote {
  type: "quote";

  /** 構文解析結果 */
  unit: QuoteUnit;

  /** nodes contained inside */
  children: Node | NodeWithoutIndent[];
}

export interface QuoteUnit extends Unit {
  /** quote symbol with following half-width space, containing 1 character */
  tag: ">" | "> ";
  whole: `${">" | "> "}${string}`;
}
