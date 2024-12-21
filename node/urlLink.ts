import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** 外部リンク記法 */
export interface UrlLink {
  type: "urlLink";

  /** 構文解析結果 */
  unit: UrlLinkUnit | UrlLinkWithTitleUnit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされたファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface UrlLinkUnit extends BracketUnit {
  /** URL */
  link: `http${"s" | ""}://${string}`;

  content: `http${"s" | ""}://${string}`;
}

export interface UrlLinkWithTitleUnit extends BracketUnit {
  /** URL */
  link: `http${"s" | ""}://${string}`;

  /** title */
  title: string;

  /** space between `link` and `title` in `[link title]` */
  space: string;

  content: `${this["link"]}${string}` | `${string}${this["link"]}`;
}
