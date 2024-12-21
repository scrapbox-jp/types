import type { BracketUnit } from "./unit.ts";

/** 数式記法 */
export interface Formula {
  type: "deco-formula";

  /** 構文解析結果 */
  unit: FormulaUnit;

  /** the same as `unit.content` */
  children: `$ ${string}`;
}

export interface FormulaUnit extends BracketUnit {
  /** KaTeX text
   *
   * `content` から`$ `を外したもの
   */
  formula: string;

  content: `$ ${string}`;

  whole: `[$ ${string}]`;
}
