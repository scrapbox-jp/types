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

/** notation that can be put in text decoration notation */
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

/** text decoration notation */
export interface Decoration {
  type: "deco";

  /** parsing result */
  unit: DecorationUnit;

  /** node contained inside */
  children: NodeInDecoration | NodeInDecoration[];
}

export interface DecorationUnit extends BracketUnit {
  /** text decoration symbol */
  deco: string;

  /** emphasis level
   *
   * increases by 1 for each additional `*`
   *
   * becomes `0` when there are none
   */
  strong: number;

  /** `true` when contains italic symbol `/` */
  italic: boolean;

  /** `true` when contains strikethrough symbol `-` */
  strike: boolean;

  /** `true` when contains underline symbol `_` */
  underline: boolean;

  whole: `[${string} ${string}]`;
}
