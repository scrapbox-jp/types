import type { BasePage } from "../../../../base.ts";

/** the response type of https://scrapbox.io/api/pages/:projectname/search/titles */
export interface SearchedTitle
  extends Pick<BasePage, "id" | "title" | "updated"> {
  /** thumbnail URL */
  image?: string;

  /** ページ内のリンク */
  links: string[];
}
