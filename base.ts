/** scrapbox line metadata */
export interface BaseLine {
  id: LineId;

  /** text of the line */
  text: string;

  /** id of the user who last edited the line */
  userId: UserId;

  /** line creation date and time */
  created: UnixTime;

  /** line last update date and time */
  updated: UnixTime;
}

/** basic information about a page */
export interface BasePage {
  id: PageId;

  /** latest edit commit id */
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

  /** numeric value representing pin status
   *
   * - 0: not pinned
   * - non-zero: pinned
   */
  pin: number;

  /** page creation date and time */
  created: UnixTime;

  /** page last update date and time */
  updated: UnixTime;

  /** last access date and time used for Date last visited */
  accessed: UnixTime;

  /** last generation date and time of page history */
  snapshotCreated: UnixTime | null;

  /** page view count */
  views: number;

  /** number of incoming links */
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
