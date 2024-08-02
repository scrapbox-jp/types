import type { CommitId, PageId, UnixTime, UserId } from "./base.ts";
import type { Change } from "./change.ts";

/** Scrapboxのページの編集commit */
export interface Commit {
  id: CommitId;

  /** 一つ前のcommitのID
   *
   * 存在しないときは`null`になる
   */
  parentId: CommitId | null;

  pageId: PageId;

  /** commitの作成者 */
  userId: UserId;

  /** commitの作成日時 */
  created: UnixTime;

  /** 変更内容 */
  changes: Change[];

  /** 詳細不明 */
  kind: "page";
}
