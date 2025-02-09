import type { BaseLine, BasePage, UnixTime } from "../../../../base.ts";
import type { User } from "../../../pages/project/title.ts";

/** the response type of /api/page-snapshots/:projectname/:pageid/:timestampid */
export interface PageSnapshotResult {
  page: PageWithSnapshot;

  snapshot: Snapshot;
}

export interface PageWithSnapshot extends BasePage {
  user: Pick<User, "id">;
  lastupdateUser: Pick<User, "id"> | null;
}

/** a page snapshot */
export interface Snapshot {
  /** snapshotを撮ったときのページタイトル */
  title: string;

  /** snapshotの作成日時 */
  created: UnixTime;

  /** snapshotしたページ本文 */
  lines: BaseLine[];
}
