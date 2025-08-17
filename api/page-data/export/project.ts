import type { BaseLine, UnixTime } from "../../../base.ts";
import type { Page, UserInfo } from "../../pages/project/title.ts";

/** page data when exported */
export interface ExportedPage<hasMetadata extends true | false = false>
  extends Pick<Page, "title" | "updated" | "created" | "id" | "views"> {
  /** page content
   *
   * when `hasMetadata === true`, line metadata is included
   * otherwise, line text is included
   */
  lines: hasMetadata extends true ? Omit<BaseLine, "id">[] : string[];
}

/** JSON data exported from https://scrapbox.io/api/page-data/export/:projectname.json  */
export interface ExportedData<hasMetadata extends true | false = false> {
  /** project's name */
  name: string;

  /** project's display name */
  displayName: string;

  /** date and time when this data was generated (UNIX time) */
  exported: UnixTime;

  /** project members */
  users: UserForExport[];

  /** exported pages */
  pages: ExportedPage<hasMetadata>[];
}

/** user infomation included in exported data */
export interface UserForExport
  extends Pick<UserInfo, "id" | "name" | "displayName" | "email"> {}
