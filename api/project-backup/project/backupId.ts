import type { BaseLine, StringLc, UnixTime } from "../../../base.ts";
import type { UserForExport } from "../../page-data/export/project.ts";
import type { Page } from "../../pages/project/title.ts";

/** backupされるページデータ */
export interface BackupedPage
  extends Pick<Page, "title" | "updated" | "created" | "id" | "views"> {
  /** ページ本文 */
  lines: Pick<BaseLine, "text" | "created" | "updated" | "userId">[];

  /** ページに含まれているリンク*/
  linksLc: StringLc[];
}

/** project backup data got from /api/project-backup/:projectname/:backupId.json */
export interface BackupData {
  /** project's name */
  name: string;

  /** project's display name */
  displayName: string;

  /** このデータを生成した日時 (UNIX時刻) */
  exported: UnixTime;

  /** project members */
  users: UserForExport[];

  /** backuped pages */
  pages: BackupedPage[];
}
