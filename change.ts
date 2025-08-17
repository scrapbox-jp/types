import type { BasePage, LineId } from "./base.ts";

/** change that creates a new line */
export interface InsertChange {
  /** insert above the line indicated by this ID
   *
   * specify `"_end"` when inserting at the end
   */
  _insert: LineId;

  /** data of the line to insert */
  lines: NewLine;
}

export interface NewLine {
  /** ID of the newly inserted line */
  id: LineId;

  /** text of the line */
  text: string;
}

export interface ChangeLine {
  /** string before change */
  origText: string;

  /** string after change */
  text: string;
}

/** change that deletes an existing line */
export interface DeleteChange {
  /** ID of the line to delete */
  _delete: LineId;

  /** always `-1` */
  lines: -1;
}

/** occurs when the thumbnail text of a page is changed */
export interface DescriptionsChange {
  /** new thumbnail text */
  descriptions: string[];
}

/** occurs when the thumbnail of a page is changed */
export interface ImageChange {
  /** new thumbnail URL
   *
   * becomes `null` when the thumbnail is removed
   */
  image: string | null;
}

export interface FilesChange {
  /** Array of file IDs
   *
   * These IDs reference files that have been uploaded to the page.
   * Files can include images, documents, or other attachments.
   */
  files: string[];
}

export interface HelpFeelsChange {
  /** Array of Helpfeel entries without the leading "? " prefix
   *
   * Helpfeel is a Scrapbox notation for creating help/documentation entries.
   * Example: "? How to use" becomes "How to use" in this array.
   * These entries are used to build the page's help documentation.
   */
  helpfeels: string[];
}

export interface InfoboxDefinitionChange {
  /** Array of trimmed lines from infobox tables
   *
   * Contains lines from tables marked with either `table:infobox` or `table:cosense`
   */
  infoboxDefinition: string[];
}

export interface LinesCountChange {
  linesCount: number;
}

export interface CharsCountChange {
  charsCount: number;
}

/** occurs when the pin status of a page is changed */
export interface PinChange {
  pin: BasePage["pin"];
}
