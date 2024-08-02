import type { Blank } from "./blank.ts";
import type { PlainText } from "./plainText.ts";
import type { Code } from "./code.ts";
import type { Formula } from "./formula.ts";
import type { Decoration } from "./decoration.ts";
import type { Quote } from "./quote.ts";
import type { Strong } from "./strong.ts";
import type { Link } from "./link.ts";
import type { HashTag } from "./hashTag.ts";
import type { Icon, StrongIcon } from "./icon.ts";
import type { UrlLink } from "./urlLink.ts";
import type { Url } from "./url.ts";
import type { Image, StrongImage } from "./image.ts";
import type { Gyazo, StrongGyazo } from "./gyazo.ts";
import type { ImageLink, StrongImageLink } from "./imageLink.ts";
import type { GyazoLink, StrongGyazoLink } from "./gyazoLink.ts";
import type { Video } from "./video.ts";
import type { Youtube } from "./youtube.ts";
import type { Vimeo } from "./vimeo.ts";
import type { Audio } from "./audio.ts";
import type { AudioLink } from "./audioLink.ts";
import type { Spotify } from "./spotify.ts";
import type { Anchor } from "./anchor.ts";
import type { GoogleMap } from "./googleMap.ts";
import type { Indent } from "./indent.ts";

export type NodeWithoutIndent =
  | Blank
  | PlainText
  | Code
  | Formula
  | Decoration
  | Quote
  | Strong
  | Link
  | HashTag
  | Icon
  | StrongIcon
  | UrlLink
  | Url
  | Image
  | StrongImage
  | Gyazo
  | StrongGyazo
  | ImageLink
  | StrongImageLink
  | GyazoLink
  | StrongGyazoLink
  | Video
  | Audio
  | AudioLink
  | Spotify
  | Anchor
  | Youtube
  | Vimeo
  | GoogleMap;

export type Node = NodeWithoutIndent | Indent;
