import type { PageId, UnixTime } from "../../../base.ts";

/** the response type of /api/page-snapshots/:projectname/:pageid */
export interface PageSnapshotList {
  pageId: PageId;

  /** 作成されているsnapshotsのtimestamp idのリスト */
  timestamps: SnapshotTimestamp[];
}

export interface SnapshotTimestamp {
  id: string;
  created: UnixTime;
}
