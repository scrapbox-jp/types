import type { PlainText } from "./plainText.ts";
import type { Unit } from "./unit.ts";

/** アイコン記法 */
export interface Icon {
  type: "icon";

  /** 構文解析結果 */
  unit: IconUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

/** 強調アイコン記法 */
export interface StrongIcon {
  type: "strong-icon";

  /** 構文解析結果 */
  unit: IconUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface IconUnit extends Unit {
  /** アイコンがあるproject name
   *
   * 同じprojectのアイコンのときは省略される
   */
  project?: string;

  /** アイコンがあるページのタイトル */
  page: string;

  /** 繰り返し回数
   *
   * 最大1000
   */
  size: number;
}
