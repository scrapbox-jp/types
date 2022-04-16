import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";

/** Anchor埋め込み */
export interface Anchor {
  type: "anchor";

  /** 構文解析結果 */
  unit: AnchorUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface AnchorUnit extends Unit {
  /** Anchor video ID */
  videoId: string;
}
