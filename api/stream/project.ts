import type { StringLc, UnixTime } from "../../base.ts";
import type { ProjectUpdatesStreamEvent } from "../../stream-event.ts";
import type { Page } from "../pages/project/title.ts";

/** The response type of /api/stream/:projectname */
export interface Stream {
  /** The project name */
  projectName: string;
  /** The latest updates in the project */
  end: UnixTime;
  /** The page updates in the stream */
  pages: Page[];
  /** The latest events in the project */
  events: ProjectUpdatesStreamEvent[];
}

export interface StreamPage extends Pick<Page, "id" | "title" | "lines"> {
  /** Icons in the page */
  iconsLc: StringLc[];
}
