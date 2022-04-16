import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";

/** 空白記法 */
export interface Blank {
  type: "blank";

  /** 構文解析結果 */
  unit: Unit;

  /** the same as `unit.content` */
  children: PlainText;
}
