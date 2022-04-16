import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";

/** 音声埋め込み */
export interface Audio {
  type: "audio";

  /** 構文解析結果 */
  unit: Unit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた音声ファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}
