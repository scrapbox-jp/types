import type { UnixTime } from "../../../../../base.ts";
import type { User } from "../../title.ts";

/** the response type of /api/pages/:projectname/search/vector/titles */
export interface VectorSearchResult {
  /** found pages sorted by similarity score */
  pages: VectorSearchPage[];
}

/** a page found by vector search */
export type VectorSearchPage =
  | VectorSearchPageWithoutEntity
  | VectorSearchPageWithEntity;

/** a page without a page entity (link-only page) */
export interface VectorSearchPageWithoutEntity {
  title: string;
  image: string | null;
  score: number;
  linked?: number;
  exists: false;
}

/** a page with a page entity */
export interface VectorSearchPageWithEntity {
  title: string;
  image: string | null;
  score: number;
  linked: number;
  exists: true;
  id: string;
  user: Pick<User, "id"> | null;
  lastUpdateUser: Pick<User, "id"> | null;
  users: Pick<User, "id">[];
  views: number;
  created: UnixTime;
  updated: UnixTime;
  pageRank: number;
  linesCount: number;
  charsCount: number;
}
