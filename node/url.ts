import type { Unit } from "./unit.ts";

/** raw URL */
export interface Url {
  type: "url";
  /** 構文解析結果 */
  unit: UrlUnit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされたファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: `http${"s" | ""}://${string}`;
}

export interface UrlUnit extends Unit {
  content: `http${"s" | ""}://${string}`;
  whole: `http${"s" | ""}://${string}`;
}
