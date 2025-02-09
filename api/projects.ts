import type { Project } from "./projects/project.ts";

/** the response type of /api/projects */
export interface ProjectResponse {
  projects: Project[];
}
