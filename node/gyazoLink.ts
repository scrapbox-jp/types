import type { BracketUnit, DoubleBracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** Gyazoから引っ張ってきた画像のリンク付き画像記法 */
export interface GyazoLink {
  type: "gyazoLink";

  /** 構文解析結果 */
  unit: GyazoLinkUnit;

  /** the same as `unit.content` */
  children: PlainText;
}
/** Gyazoから引っ張ってきた画像のリンク付き強調画像記法 */
export interface StrongGyazoLink {
  type: "strongGyazoLink";

  /** 構文解析結果 */
  unit: StrongGyazoLinkUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface GyazoLinkUnit extends BracketUnit {
  /** 画像のURL */
  gyazo: `http${"s" | ""}://${`${string}.` | ""}gyazo.com/${string}${
    | `.${string}`
    | "/raw"
    | ""}`;

  /** 埋め込まれたリンクのURL */
  link: string;
}

export interface StrongGyazoLinkUnit extends DoubleBracketUnit {
  /** 画像のURL */
  gyazo: `http${"s" | ""}://${`${string}.` | ""}gyazo.com/${string}${
    | `.${string}`
    | "/raw"
    | ""}`;

  /** 埋め込まれたリンクのURL */
  link: string;
}
