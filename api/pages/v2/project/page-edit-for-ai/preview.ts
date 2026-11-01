/** the request type of POST /api/pages/v2/:projectname/page-edit-for-ai/preview */
export interface PreviewEditRequest {
  /** page ID to edit. omit for creating new pages */
  pageId?: string;
  /** edit changes */
  changes: RawChange[];
}

/** a change that creates a new line */
export interface RawInsertChange {
  /** insert above the line indicated by this ID. specify "_end" when inserting at the end */
  _insert: string;
  /** line data */
  lines: {
    id: string;
    text: string;
  };
}
/** a change that rewrites an existing line */
export interface RawUpdateChange {
  /** ID of the line to rewrite */
  _update: string;
  /** line data */
  lines: {
    text: string;
  };
}
/** a change that deletes an existing line */
export interface RawDeleteChange {
  /** ID of the line to delete */
  _delete: string;
}

/** a raw edit change */
export type RawChange = RawInsertChange | RawUpdateChange | RawDeleteChange;

/** the response type of POST /api/pages/v2/:projectname/page-edit-for-ai/preview */
export interface PreviewResponse {
  /** preview ID, use this with submitEdit */
  previewId: string;
  /** the timestamp at which the preview expires */
  expireAt: string;
  /** the page preview */
  pagePreview: {
    title?: string;
    persistent?: boolean;
    lines?: { id: string; text: string }[];
  } | null;
}
