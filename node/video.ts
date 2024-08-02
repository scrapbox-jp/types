import type { Unit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** 動画埋め込み */
export interface Video {
  type: "video";

  /** 構文解析結果 */
  unit: Unit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた動画ファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}
