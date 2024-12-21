import type { BracketUnit, DoubleBracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** 画像記法 */
export interface Image {
  type: "image";

  /** 構文解析結果 */
  unit: BracketUnit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた画像ファイルのときのみ生える
   */
  fileId?: string;

  /** the same as {@linkcode Unit.content} */
  children: PlainText;
}

/** 強調画像記法 */
export interface StrongImage {
  type: "strongImage";

  /** 構文解析結果 */
  unit: DoubleBracketUnit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた画像ファイルのときのみ生える
   */
  fileId?: string;

  /** the same as {@linkcode Unit.content} */
  children: PlainText;
}
