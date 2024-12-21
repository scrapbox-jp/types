import type { BracketUnit, DoubleBracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** Gyazoから引っ張ってきた画像の画像記法 */
export interface Gyazo {
  type: "gyazo";

  /** 構文解析結果 */
  unit: GyazoUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

/** Gyazoから引っ張ってきた画像の強調画像記法 */
export interface StrongGyazo {
  type: "strongGyazo";

  /** 構文解析結果 */
  unit: StrongGyazoUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface GyazoUnit extends BracketUnit {
  content: `http${"s" | ""}://${`${string}.` | ""}gyazo.com/${string}${
    | `.${string}`
    | "/raw"
    | ""}`;
}

export interface StrongGyazoUnit extends DoubleBracketUnit {
  content: `http${"s" | ""}://${`${string}.` | ""}gyazo.com/${string}${
    | `.${string}`
    | "/raw"
    | ""}`;
}
