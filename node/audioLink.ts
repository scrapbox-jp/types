import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** audio with title */
export interface AudioLink {
  type: "audioLink";

  /** parsing result */
  unit: AudioLinkUnit;

  /** ID of file uploaded to scrapbox
   *
   * this property only exists for audio files uploaded to scrapbox
   */
  fileId?: string;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface AudioLinkUnit extends BracketUnit {
  /** audio URL */
  link: string;

  /** audio title */
  title: string;
}
