import type { PageId, UnixTime, UserId } from "../../base.ts";

/** the response type of https://scrpabox.io/api/pages/:projectname */
export interface PageList {
  /** data取得先のproject名 */
  projectName: string;

  /** parameterに渡したskipと同じ */
  skip: number;

  /** parameterに渡したlimitと同じ */
  limit: number;

  /** projectの全ページ数 (中身のないページを除く) */
  count: number;

  /** 取得できたページ情報 */
  pages: PageSummary[];
}

/** a page summary included in {@linkcode PageList} */
export interface PageSummary {
  /** page id */
  id: PageId;

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

  /** the user who created the page (maybe) */
  user: {
    id: UserId;
  };

  /** the user who last updated the page (maybe) */
  lastUpdateUser: {
    id: UserId;
  };

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

  /** ページの閲覧回数 */
  views: number;

  /** 被リンク数 */
  linked: number;

  /** The total number of lines in the page */
  linesCount: number;

  /** The total number of characters in the page */
  charsCount: number;

  /** The list of helpfeel notations in the page */
  helpfeels: string[];
}
