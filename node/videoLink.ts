import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** リンクつき動画埋め込み */
export interface VideoLink {
  type: "videoLink";

  /** 構文解析結果 */
  unit: VideoLinkUnit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされたファイルのときのみ生える
   */
  fileId?: string;

  /** scrapboxにuploadされたfileのID
   *
   * {@linkcode VideoLinkUnit.video}と{@linkcode VideoLinkUnit.link}がscrapboxにuploadされたfilesだったとき、そのidが格納される
   */
  fileIds: [] | [string] | [string, string];

  /** the same as `unit.content` */
  children: PlainText;
}

export interface VideoLinkUnit extends BracketUnit {
  /** URL */
  link: string;
  /** video URL */
  video: string;
}
