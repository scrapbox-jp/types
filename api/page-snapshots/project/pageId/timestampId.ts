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
  /** page title when the snapshot was taken */
  title: string;

  /** snapshot creation date and time */
  created: UnixTime;

  /** page content that was snapshotted */
  lines: BaseLine[];
}
