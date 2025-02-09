import type { UnixTime } from "../../../base.ts";

/** JSON data for importing by https://scrapbox.io/api/page-data/import/:projectname.json  */
export interface ImportedData<hasMetadata extends true | false = false> {
  /** pages importing to a project */
  pages: hasMetadata extends true ? ImportedPage[] : ImportedLightPage[];
}

/** メタデータ無しインポート用ページデータ */
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
/** インポート用メタデータ付き行データ */
export interface ImportedLine {
  /** line text */
  text: string;

  /** 行の最終更新日時 (UNIX時刻) */
  updated?: UnixTime;

  /** 行の最終作成日時 (UNIX時刻) */
  created?: UnixTime;
}
/** メタデータ付きインポート用ページデータ */
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
