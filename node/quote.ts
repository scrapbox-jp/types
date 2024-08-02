import type { Unit } from "./unit.ts";
import type { NodeWithoutIndent } from "./node.ts";

/** 引用記法 */
export interface Quote {
  type: "quote";

  /** 構文解析結果 */
  unit: QuoteUnit;

  /** 中に含まれるNodes */
  children: NodeWithoutIndent | NodeWithoutIndent[];
}

export interface QuoteUnit extends Unit {
  /** 引用記号とそれに続く空白を含んだもの */
  tag: `>${string}`;
}
