import type { ProjectId } from "../../../base.ts";
import type { Page } from "../../pages/project/title.ts";

/** The response type of /api/deleted-pages/:projectname/:pageid */
export interface DeletedPage
  extends Pick<Page, "id" | "title" | "image" | "lines"> {
  /** The project id */
  projectId: ProjectId;

  /** The created time of the page */
  created: null;
  /** The updated time of the page */
  updated: null;
}
