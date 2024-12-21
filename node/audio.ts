import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** 音声埋め込み */
export interface Audio {
  type: "audio";

  /** 構文解析結果 */
  unit: BracketUnit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた音声ファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}
