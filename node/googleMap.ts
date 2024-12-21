import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** Location記法 */
export interface GoogleMap {
  type: "location";

  /** 構文解析結果 */
  unit: GoogleMapUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

declare const unit: GoogleMapUnit;

export interface GoogleMapUnit extends BracketUnit {
  /** 緯度 */
  latitude: number;

  /** 経度 */
  longitude: number;

  /** 拡大レベル */
  zoom: number;

  /** 地点の名前 */
  title?: string;
  content:
    | `${"N" | "S"}${number},${"E" | "W"}${number}${`,Z${number}` | ""}`
    | `${"N" | "S"}${number},${"E" | "W"}${number}${
      | `,Z${number}`
      | ""} ${string}`
    | `${string} ${"N" | "S"}${number},${"E" | "W"}${number}${
      | `,Z${number}`
      | ""}`;
  whole: `[${this["content"]}]`;
}
