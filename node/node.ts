import { Blank } from "./blank.ts";
import { PlainText } from "./plainText.ts";
import { Code } from "./code.ts";
import { Formula } from "./formula.ts";
import { Decoration } from "./decoration.ts";
import { Quote } from "./quote.ts";
import { Strong } from "./strong.ts";
import { Link } from "./link.ts";
import { Icon, StrongIcon } from "./icon.ts";
import { UrlLink } from "./urlLink.ts";
import { Url } from "./url.ts";
import { Image, StrongImage } from "./image.ts";
import { Gyazo, StrongGyazo } from "./gyazo.ts";
import { ImageLink, StrongImageLink } from "./imageLink.ts";
import { GyazoLink, StrongGyazoLink } from "./gyazoLink.ts";
import { Video } from "./video.ts";
import { Youtube } from "./youtube.ts";
import { Vimeo } from "./vimeo.ts";
import { Audio } from "./audio.ts";
import { AudioLink } from "./audioLink.ts";
import { Spotify } from "./spotify.ts";
import { Anchor } from "./anchor.ts";
import { GoogleMap } from "./googleMap.ts";
import { Indent } from "./indent.ts";

export type NodeWithoutIndent =
  | Blank
  | PlainText
  | Code
  | Formula
  | Decoration
  | Quote
  | Strong
  | Link
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
