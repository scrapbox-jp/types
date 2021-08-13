/** scrapboxの行のメタデータ */
export interface Line {
  /** 行のid */ id: LineId;
  /** 行のテキスト */ text: string;
  /** 一番最後に行を編集した人のid */ userId: string;
  /** 行の作成日時 */ created: number;
  /** 行の最終更新日時 */ updated: number;
}

/** basic information about a page */
export interface Page {
  /** the id of a page */ id: PageId;
  /** the title of a page */ title: string;
  /** the thumbnail URL of a page if exists
   *
   * set to `null` if not exists
  */
  image: string | null;
  /** the thumbnail text of a page.
  * the maximum number of lines is 5.
  * */ descriptions: string[];
  /** ページの最終更新日時 */ updated: number;
  /** Date last visitedに使われる最終アクセス日時 */ accessed: number;
}

/** the user id */
export type UserId = string;
/** the line id */
export type LineId = string;
/** the commit id */
export type CommitId = string;
/** the page id */
export type PageId = string;
/** the project id */
export type ProjectId = string;
/** the formatted string
 *
 * format rule:
 * - UPPER CASE -> upper_case
 */
export type StringLc = string;
