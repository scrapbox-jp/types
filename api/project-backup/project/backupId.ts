import type { BaseLine, StringLc, UnixTime } from "../../../base.ts";
import type { Page } from "../../pages/project/title.ts";

/** backupされるページデータ */
export interface BackupedPage
  extends Pick<Page, "title" | "updated" | "created" | "id"> {
  /** ページ本文 */
  lines: Pick<BaseLine, "text" | "created" | "updated">[];

  /** ページに含まれているリンク*/
  linksLc: StringLc[];
}

/** project backup data */
export interface BackupData {
  /** project's name */
  name: string;

  /** project's display name */
  displayName: string;

  /** このデータを生成した日時 (UNIX時刻) */
  exported: UnixTime;

  /** backuped pages */
  pages: BackupedPage[];
}
