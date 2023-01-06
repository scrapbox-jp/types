import { Unit } from "./unit.ts";
import { PlainText } from "./plainText.ts";
import { Formula } from "./formula.ts";
import { Link } from "./link.ts";
import { HashTag } from "./hashTag.ts";
import { Icon } from "./icon.ts";
import { UrlLink } from "./urlLink.ts";
import { Url } from "./url.ts";
import { Image } from "./image.ts";
import { Gyazo } from "./gyazo.ts";
import { ImageLink } from "./imageLink.ts";
import { GyazoLink } from "./gyazoLink.ts";
import { Video } from "./video.ts";
import { Youtube } from "./youtube.ts";
import { Vimeo } from "./vimeo.ts";
import { Audio } from "./audio.ts";
import { AudioLink } from "./audioLink.ts";
import { Spotify } from "./spotify.ts";
import { Anchor } from "./anchor.ts";
import { GoogleMap } from "./googleMap.ts";

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

export interface DecorationUnit extends Unit {
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
}
