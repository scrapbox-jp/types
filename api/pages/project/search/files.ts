import type { FoundPage, SearchResult } from "./query.ts";

/** the response type of /api/pages/:projectname/search/files */
export interface FileSearchResult
  extends Omit<SearchResult, "field" | "pages"> {
  /** 見つかったページ */
  pages: FoundPageByFile[];
}

/** /api/pages/:projectname/search/files で見つかったページ */
export interface FoundPageByFile extends FoundPage {
  file: string;
}
