import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";

/** 裸のURL */
export interface Url {
  type: "url";
  /** 構文解析結果 */
  unit: Unit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされたファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}
