import type { BracketUnit, DoubleBracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** image notation for images pulled from Gyazo */
export interface Gyazo {
  type: "gyazo";

  /** parsing result */
  unit: GyazoUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

/** strong image notation for images pulled from Gyazo */
export interface StrongGyazo {
  type: "strongGyazo";

  /** parsing result */
  unit: StrongGyazoUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface GyazoUnit extends BracketUnit {
  content: `http${"s" | ""}://${`${string}.` | ""}gyazo.com/${string}${
    | `.${string}`
    | "/raw"
    | ""}`;
}

export interface StrongGyazoUnit extends DoubleBracketUnit {
  content: `http${"s" | ""}://${`${string}.` | ""}gyazo.com/${string}${
    | `.${string}`
    | "/raw"
    | ""}`;
}
