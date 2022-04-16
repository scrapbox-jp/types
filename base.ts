/** scrapboxの行のメタデータ */
export interface Line {
  /** 行のid */ id: LineId;
  /** 行のテキスト */ text: string;
  /** 一番最後に行を編集した人のid */ userId: UserId;
  /** 行の作成日時 */ created: UnixTime;
  /** 行の最終更新日時 */ updated: UnixTime;
}

/** basic information about a page */
export interface BasePage {
  id: PageId;

  /** 最新の編集コミットid */
  commitId: CommitId;

  /** the title of a page */
  title: string;

  /** the thumbnail URL of a page if exists
   *
   * set to `null` if not exists
   */
  image: string | null;

  /** the thumbnail text of a page.
   *
   * the maximum number of lines is 5.
   */
  descriptions: string[];

  /** ピン留めの状態を表す数値
   *
   * - 0: ピンされてない
   * - 0以外: ピンされている
   */
  pin: number;

  /** ページの作成日時 */
  created: UnixTime;

  /** ページの最終更新日時 */
  updated: UnixTime;

  /** Date last visitedに使われる最終アクセス日時 */
  accessed: UnixTime;

  /** Page historyの最終生成日時 */
  snapshotCreated: UnixTime | null;

  /** ページの閲覧回数 */
  views: number;

  /** 被リンク数 */
  linked: number;

  /** page rank */
  pageRank: number;
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
 *
 * - UPPER CASE -> upper_case
 */
export type StringLc = string;
/** UNIX time */
export type UnixTime = number;
