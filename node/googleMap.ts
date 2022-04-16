import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";

/** Location記法 */
export interface GoogleMap {
  type: "location";

  /** 構文解析結果 */
  unit: GoogleMapUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface GoogleMapUnit extends Unit {
  /** 緯度 */
  latitude: number;

  /** 経度 */
  longitude: number;

  /** 拡大レベル */
  zoom: number;

  /** 地点の名前 */
  title?: string;
}
