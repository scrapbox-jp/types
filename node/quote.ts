import type { Unit } from "./unit.ts";
import type { Node, NodeWithoutIndent } from "./node.ts";

/** 引用記法 */
export interface Quote {
  type: "quote";

  /** 構文解析結果 */
  unit: QuoteUnit;

  /** 中に含まれるNodes */
  children: Node | NodeWithoutIndent[];
}

export interface QuoteUnit extends Unit {
  /** 引用記号とそれに続く半角空白を1文字含んだもの */
  tag: ">" | "> ";
  whole: `${">" | "> "}${string}`;
}
