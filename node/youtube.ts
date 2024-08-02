import type { Unit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** Youtube埋め込み */
export interface Youtube {
  type: "youtube";

  /** 構文解析結果 */
  unit: YoutubeUnit & (VideoId | ListId);

  /** the same as `unit.content` */
  children: PlainText;
}

export interface YoutubeUnit extends Unit {
  /** URL parameters */
  params: Record<string, string> & { t?: number };
}

export interface VideoId {
  /** Youtube video ID */
  videoId: string;
}

export interface ListId {
  /** Youtube playlist ID
   *
   * `/playlist?list=xxx`の形のURLのときのみ生える
   */
  listId: string;
}
