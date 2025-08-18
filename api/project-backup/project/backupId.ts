import type { BaseLine, StringLc, UnixTime } from "../../../base.ts";
import type { UserForExport } from "../../page-data/export/project.ts";
import type { Page } from "../../pages/project/title.ts";

/** page data to be backed up */
export interface BackupedPage
  extends Pick<Page, "title" | "updated" | "created" | "id" | "views"> {
  /** page content */
  lines: Pick<BaseLine, "text" | "created" | "updated" | "userId">[];

  /** links contained in the page */
  linksLc: StringLc[];
}

/** project backup data got from /api/project-backup/:projectname/:backupId.json */
export interface BackupData {
  /** project's name */
  name: string;

  /** project's display name */
  displayName: string;

  /** date and time when this data was generated (UNIX time) */
  exported: UnixTime;

  /** project members */
  users: UserForExport[];

  /** backuped pages */
  pages: BackupedPage[];
}
