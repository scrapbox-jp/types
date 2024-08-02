import type { Unit } from "./unit.ts";
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
  unit: GyazoLinkUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface GyazoLinkUnit extends Unit {
  /** 画像のURL */
  gyazo: string;

  /** 埋め込まれたリンクのURL */
  link: string;
}
