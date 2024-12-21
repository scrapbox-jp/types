import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** 空白記法 */
export interface Blank {
  type: "blank";

  /** 構文解析結果 */
  unit: BracketUnit;

  /** the same as `unit.content` */
  children: PlainText;
}
