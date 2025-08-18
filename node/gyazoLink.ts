import type { BracketUnit, DoubleBracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** linked image notation for images pulled from Gyazo */
export interface GyazoLink {
  type: "gyazoLink";

  /** parsing result */
  unit: GyazoLinkUnit;

  /** the same as `unit.content` */
  children: PlainText;
}
/** linked strong image notation for images pulled from Gyazo */
export interface StrongGyazoLink {
  type: "strongGyazoLink";

  /** parsing result */
  unit: StrongGyazoLinkUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface GyazoLinkUnit extends BracketUnit {
  /** 画像のURL */
  gyazo: `http${"s" | ""}://${`${string}.` | ""}gyazo.com/${string}${
    | `.${string}`
    | "/raw"
    | ""}`;

  /** 埋め込まれたリンクのURL */
  link: string;
}

export interface StrongGyazoLinkUnit extends DoubleBracketUnit {
  /** 画像のURL */
  gyazo: `http${"s" | ""}://${`${string}.` | ""}gyazo.com/${string}${
    | `.${string}`
    | "/raw"
    | ""}`;

  /** 埋め込まれたリンクのURL */
  link: string;
}
