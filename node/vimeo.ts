import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** Vimeo埋め込み */
export interface Vimeo {
  type: "vimeo";

  /** 構文解析結果 */
  unit: VimeoUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface VimeoUnit extends BracketUnit {
  /** vimeoのvideo id */
  videoId: string;

  params: { h?: string };
}
