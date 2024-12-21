import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";
import type { Formula } from "./formula.ts";
import type { Link } from "./link.ts";
import type { HashTag } from "./hashTag.ts";
import type { Icon } from "./icon.ts";
import type { UrlLink } from "./urlLink.ts";
import type { Url } from "./url.ts";
import type { Image } from "./image.ts";
import type { Gyazo } from "./gyazo.ts";
import type { ImageLink } from "./imageLink.ts";
import type { GyazoLink } from "./gyazoLink.ts";
import type { Video } from "./video.ts";
import type { Youtube } from "./youtube.ts";
import type { Vimeo } from "./vimeo.ts";
import type { Audio } from "./audio.ts";
import type { AudioLink } from "./audioLink.ts";
import type { Spotify } from "./spotify.ts";
import type { Anchor } from "./anchor.ts";
import type { GoogleMap } from "./googleMap.ts";

/** 文字装飾記法中に入れられる記法 */
export type NodeInDecoration =
  | PlainText
  | Formula
  | Link
  | HashTag
  | Icon
  | UrlLink
  | Url
  | Image
  | Gyazo
  | ImageLink
  | GyazoLink
  | Video
  | Audio
  | AudioLink
  | Spotify
  | Anchor
  | Youtube
  | Vimeo
  | GoogleMap;

/** 文字装飾記法 */
export interface Decoration {
  type: "deco";

  /** 構文解析結果 */
  unit: DecorationUnit;

  /** 中に含まれるNode */
  children: NodeInDecoration | NodeInDecoration[];
}

export interface DecorationUnit extends BracketUnit {
  /** 文字装飾記号 */
  deco: string;

  /** 強調のレベル
   *
   * `*`が一つ増えるごとに1増える
   *
   * 一つもないときは`0`になる
   */
  strong: number;

  /** 斜体記号`/`を含むとき`true` */
  italic: boolean;

  /** 打ち消し記号`-`を含むとき`true` */
  strike: boolean;

  /** 下線記号`_`を含むとき`true` */
  underline: boolean;

  whole: `[${string} ${string}]`;
}
