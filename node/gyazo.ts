import type { Unit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** Gyazoから引っ張ってきた画像の画像記法 */
export interface Gyazo extends GyazoBase {
  type: "gyazo";
}

/** Gyazoから引っ張ってきた画像の強調画像記法 */
export interface StrongGyazo extends GyazoBase {
  type: "strongGyazo";
}

export interface GyazoBase {
  /** 構文解析結果 */
  unit: Unit;

  /** the same as `unit.content` */
  children: PlainText;
}
