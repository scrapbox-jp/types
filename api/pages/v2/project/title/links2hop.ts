import type { RelatedPage, User } from "../../../project/title.ts";

/** the response type of /api/pages/v2/:projectname/:title/links2hop */
export interface Links2hopResponse {
  /** 2-hop neighboring pages */
  links2hop: Link2HopPage[];
  /** hidden headwords */
  hiddenHeadwordsLc: string[];
  /** the name of the full-text search engine */
  searchBackend: string;
  /** synonyms */
  synonyms: string[];
  /** pagination info */
  pagination: {
    /** the maximum number of entries per page */
    perPage: number;
    /** the total number of entries */
    total: number;
    /** `true` if there are more pages */
    hasNext: boolean;
    /** cursor id for the next page. set to `null` if there are no more pages */
    nextId: string | null;
  };
}

/** a 2-hop neighboring page */
export interface Link2HopPage extends RelatedPage {
  infoboxDefinition?: string[];
  user: Pick<User, "id"> | null;
  lastUpdateUser: Pick<User, "id"> | null;
  users: Pick<User, "id">[];
}
