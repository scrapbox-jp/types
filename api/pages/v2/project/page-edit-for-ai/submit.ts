/** the request type of POST /api/pages/v2/:projectname/page-edit-for-ai/submit */
export interface SubmitEditRequest {
  /** the previewId received from previewEdit */
  previewId: string;
}

/** the response type of POST /api/pages/v2/:projectname/page-edit-for-ai/submit */
export interface SubmitResponse {
  /** the ID of the generated commit */
  commitId: string;
  /** the created or updated page */
  page: {
    title?: string;
  } | null;
}
