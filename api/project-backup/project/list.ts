import type { UnixTime } from "../../../base.ts";

/** The response type of /api/project-backup/:projectname/list */
export interface BackupList {
  /** backup list */
  backups: BackupSummary[];
}

/** Backup summary */
export interface BackupSummary {
  /** backuped date */
  backuped: UnixTime;
  /** backup Id */
  id: string;
  /** total links in the backup */
  totalLinks: number;
  /** total pages in the backup */
  totalPages: number;
}
