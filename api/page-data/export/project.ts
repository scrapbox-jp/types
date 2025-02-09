import type { BaseLine, UnixTime } from "../../../base.ts";
import type { Page, UserInfo } from "../../pages/project/title.ts";

/** exportしたときのページデータ */
export interface ExportedPage<hasMetadata extends true | false = false>
  extends Pick<Page, "title" | "updated" | "created" | "id" | "views"> {
  /** ページ本文
   *
   * `hasMetadata === true`のときは行のmetadataが入る
   * それ以外の場合は行のテキストが入る
   */
  lines: hasMetadata extends true ? Omit<BaseLine, "id">[] : string[];
}

/** JSON data exported from https://scrapbox.io/api/page-data/export/:projectname.json  */
export interface ExportedData<hasMetadata extends true | false = false> {
  /** project's name */
  name: string;

  /** project's display name */
  displayName: string;

  /** このデータを生成した日時 (UNIX時刻) */
  exported: UnixTime;

  /** project members */
  users: UserForExport[];

  /** exported pages */
  pages: ExportedPage<hasMetadata>[];
}

/** user infomation included in exported data */
export interface UserForExport
  extends Pick<UserInfo, "id" | "name" | "displayName" | "email"> {}
