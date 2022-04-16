import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";

/** Spotify埋め込み */
export interface Spotify {
  type: "spotify";

  /** 構文解析結果 */
  unit: SpotifyUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface SpotifyUnit extends Unit {
  /** Spotify video ID */
  videoId: string;

  params: SpotifyParams;
}

export interface SpotifyParams {
  /** Spotifyのカテゴリ */
  type: "track" | "artist" | "playlist" | "album" | "episode" | "show";
}
