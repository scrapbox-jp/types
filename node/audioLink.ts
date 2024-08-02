import type { Unit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** タイトル付き音声 */
export interface AudioLink {
  type: "audioLink";

  /** 構文解析結果 */
  unit: AudioLinkUnit;

  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた音声ファイルのときのみ生える
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface AudioLinkUnit extends Unit {
  /** 音声のURL */
  link: string;

  /** 音声のタイトル */
  title: string;
}
