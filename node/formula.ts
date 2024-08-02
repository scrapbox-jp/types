import type { Unit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** 数式記法 */
export interface Formula {
  type: "deco-formula";

  /** 構文解析結果 */
  unit: FormulaUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface FormulaUnit extends Unit {
  /** KaTeX text
   *
   * `content` から`$ `を外したもの
   */
  formula: string;
}
