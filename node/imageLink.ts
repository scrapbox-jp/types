import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";

/** リンク付き画像記法 */
export interface ImageLink {
  type: "imageLink";

  /** 構文解析結果 */
  unit: ImageLinkUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

/** リンク付き強調画像記法 */
export interface StrongImageLink {
  type: "strongImageLink";

  /** 構文解析結果 */
  unit: ImageLinkUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface ImageLinkUnit extends Unit {
  /** 画像のURL */
  image: string;

  /** 埋め込まれたリンクのURL */
  link: string;
}
