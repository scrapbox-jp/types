import type { BracketUnit, DoubleBracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** リンク付き画像記法 */
export interface ImageLink {
  type: "imageLink";

  /** 構文解析結果 */
  unit: ImageLinkUnit;

  /** scrapboxにuploadされたfileのID
   *
   * {@linkcode ImageLinkUnit.image}と{@linkcode ImageLinkUnit.link}がscrapboxにuploadされたfilesだったとき、そのidが格納される
   */
  fileIds: [] | [string] | [string, string];

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyは{@linkcode ImageLinkUnit.image}がscrapboxにuploadされたfileだったときのみ生える
   */
  fileId?: string;

  /** the same as {@linkcode ImageUnit.content} */
  children: PlainText;
}

/** リンク付き強調画像記法 */
export interface StrongImageLink {
  type: "strongImageLink";

  /** 構文解析結果 */
  unit: StrongImageLinkUnit;

  /** scrapboxにuploadされたfileのID
   *
   * {@linkcode StrongImageLinkUnit.image}と{@linkcode StrongImageLinkUnit.link}がscrapboxにuploadされたfilesだったとき、そのidが格納される
   */
  fileIds: [] | [string] | [string, string];

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyは{@linkcode StrongImageLinkUnit.image}がscrapboxにuploadされたfileだったときのみ生える
   */
  fileId?: string;

  /** the same as {@linkcode StrongImageUnit.content} */
  children: PlainText;
}

export interface ImageLinkUnit extends BracketUnit {
  /** 画像のURL */
  image: string;

  /** 埋め込まれたリンクのURL */
  link: string;
}

export interface StrongImageLinkUnit extends DoubleBracketUnit {
  /** 画像のURL */
  image: string;

  /** 埋め込まれたリンクのURL */
  link: string;
}
