import type { PageId } from "../../../../base.ts";

/** the response type of /api/pages/:projectname/search/query */
export interface SearchResult {
  /** 検索したprojectの名前 */
  projectName: string;

  /** 検索文字列 */
  searchQuery: string;

  /** 検索語句 */
  query: SearchQuery;

  /** 検索件数の上限 */
  limit: number;

  /** 検索件数 */
  count: number;

  /** 検索文字列と完全一致するタイトルが見つかったら`true` */
  existsExactTitleMatch: boolean;

  field: "title" | "helpfeels" | "lines";

  /** 全文検索エンジンの名前 */
  backend: string;

  /** 見つかったページ */
  pages: FoundPage[];
}

/** /api/pages/:projectname/search/query で見つかったページ */
export interface FoundPage {
  id: PageId;

  /** page title */
  title: string;

  /** page thumbnail
   *
   * 無いときは空文字が入る
   */
  image: string;

  /** 検索語句の中で、このページに含まれている語句 */
  words: string[];

  /** 検索語句に一致した行
   *
   * タイトル行のみが一致した場合は、検索語句の有無にかかわらずその次の行のみが入る
   */
  lines: string[];
}

/** 検索クエリ */
export interface SearchQuery {
  /** AND検索に使う語句 */
  words: string[];

  /** NOT検索に使う語句 */
  excludes: string[];
}
