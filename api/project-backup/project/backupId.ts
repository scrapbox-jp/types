import type { BaseLine, StringLc } from "../../../base.ts";
import type { ExportDataBase } from "../../page-data/export/project.ts";
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
export interface BackupData extends ExportDataBase {
  /** backuped pages */
  pages: BackupedPage[];
}
