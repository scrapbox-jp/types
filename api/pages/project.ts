import type { BasePage, UserId } from "../../base.ts";

/** the response type of https://scrpabox.io/api/pages/:projectname */
export interface PageList {
  /** project name from which data was retrieved */
  projectName: string;

  /** same as skip passed in parameter */
  skip: number;

  /** same as limit passed in parameter */
  limit: number;

  /** total number of pages in the project (excluding pages with no content) */
  count: number;

  /** page information that could be retrieved */
  pages: PageSummary[];
}

/** a page summary included in {@linkcode PageList} */
export interface PageSummary extends
  Pick<
    BasePage,
    | "id"
    | "title"
    | "image"
    | "descriptions"
    | "pin"
    | "created"
    | "updated"
    | "accessed"
    | "views"
    | "linked"
  > {
  /** the user who created the page (maybe) */
  user: {
    id: UserId;
  } | null;

  /** the user who last updated the page (maybe) */
  lastUpdateUser: {
    id: UserId;
  } | null;

  /** the users who edited the page */
  users: {
    id: UserId;
  }[];

  /** The total number of lines in the page */
  linesCount: number;

  /** The total number of characters in the page */
  charsCount: number;

  /** The list of helpfeel notations in the page */
  helpfeels: string[];
}
