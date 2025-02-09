import type { ProjectId } from "../../../../base.ts";
import type { SearchQuery } from "./query.ts";

/** the response type of /api/projects/search/query and /api/projects/search/watch-list */
export interface ProjectSearchResult {
  /** 検索文字列 */
  searchQuery: string;

  /** 検索語句 */
  query: SearchQuery;

  /** 見つかったprojects */
  projects: FoundProject[];
}

/** /api/projects/search/query や /api/projects/search/watch-list で見つかったproject */
export interface FoundProject {
  _id: ProjectId;

  /** project name */
  name: string;

  /** projectの表示名 */
  displayName: string;

  /** project favicon
   *
   * 無いときは`null`が入るかproperty自体が存在しない
   */
  image?: string | null;
}
