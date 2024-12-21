import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** Youtube埋め込み */
export interface Youtube {
  type: "youtube";

  /** 構文解析結果 */
  unit: YoutubeUnit | YoutubeShortUnit | YoutubeListUnit | YoutubeLiveUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface YoutubeUnitBase extends BracketUnit {
  /** Youtube video ID */
  videoId: string;

  /** URL parameters */
  params: Record<string, string>;
}
export interface YoutubeUnit extends YoutubeUnitBase {
  content: `http${"s" | ""}://${
    | `${"www." | "music." | ""}youtube.com/watch?`
    | "youtu.be/"}${string}`;
}
export interface YoutubeShortUnit extends YoutubeUnitBase {
  type: "short";
  content: `http${"s" | ""}://${"www." | ""}youtube.com/shorts/${string}`;
}
export interface YoutubeLiveUnit extends YoutubeUnitBase {
  type: "live";
  content: `http${"s" | ""}://${"www." | ""}youtube.com/live/${string}`;
}

export interface YoutubeListUnit extends Omit<YoutubeUnitBase, "videoId"> {
  /** Youtube playlist ID
   *
   * `/playlist?list=xxx`の形のURLのときのみ生える
   */
  listId: string;
  content: `http${"s" | ""}://${
    | "www."
    | "music."
    | ""}youtube.com/playlist?${string}`;
}
