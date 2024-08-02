import type { Unit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** 外部リンク記法 */
export interface UrlLink {
  type: "urlLink";

  /** 構文解析結果 */
  unit: UrlLinkUnit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされたファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface UrlLinkUnit extends Unit {
  /** URL */
  link: string;

  /** タイトル */
  title?: string;
}
