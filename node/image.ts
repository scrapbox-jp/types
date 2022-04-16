import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";

/** 画像記法 */
export interface Image extends ImageBase {
  type: "image";
}

/** 強調画像記法 */
export interface StrongImage extends ImageBase {
  type: "strongImage";
}

export interface ImageBase {
  /** 構文解析結果 */
  unit: Unit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた画像ファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}
