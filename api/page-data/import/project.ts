import type { UnixTime } from "../../../base.ts";

/** JSON data for importing by https://scrapbox.io/api/page-data/import/:projectname.json  */
export interface ImportedData<hasMetadata extends true | false = false> {
  /** pages importing to a project */
  pages: hasMetadata extends true ? ImportedPage[] : ImportedLightPage[];
}

/** import page data without metadata */
export interface ImportedLightPage {
  /** page's title
   *
   * `title` should be equal to `lines[0]`
   */
  title: string;

  /** page's text
   *
   * `lines[0]` should be equal to `title`
   */
  lines: string[];
}
/** import line data with metadata */
export interface ImportedLine {
  /** line text */
  text: string;

  /** line last update date and time (UNIX time) */
  updated?: UnixTime;

  /** line last creation date and time (UNIX time) */
  created?: UnixTime;
}
/** import page data with metadata */
export interface ImportedPage {
  /** page's title
   *
   * `title` should be equal to `lines[0].text`
   */
  title: string;

  /** page's line data
   *
   * `lines[0].text` should be equal to `title`
   */
  lines: ImportedLine[];
}
