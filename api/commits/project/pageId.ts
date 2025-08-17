import type {
  CommitId,
  LineId,
  PageId,
  StringLc,
  UnixTime,
  UserId,
} from "../../../base.ts";
import type {
  ChangeLine,
  CharsCountChange,
  DeleteChange,
  DescriptionsChange,
  FilesChange,
  HelpFeelsChange,
  ImageChange,
  InfoboxDefinitionChange,
  InsertChange,
  LinesCountChange,
  PinChange,
} from "../../../change.ts";

/** the response type of /api/commits/:projectname/:pageid */
export interface CommitsResponse {
  /** 指定したページのcommits */
  commits: Commit[];
}

/** Scrapboxのページの編集commit */
export interface Commit {
  id: CommitId;

  /** 一つ前のcommitのID
   *
   * 存在しないときは`null`になる
   */
  parentId: CommitId | null;

  pageId: PageId;

  /** commitの作成者 */
  userId: UserId;

  /** commitの作成日時 */
  created: UnixTime;

  /** 変更内容 */
  changes: Change[];

  /** 詳細不明 */
  kind: "page";
}
/** ページの変更内容 */
export type Change =
  | InsertChange
  | UpdateChange
  | DeleteChange
  | LinksChange
  | ProjectLinksChange
  | IconsChange
  | DescriptionsChange
  | ImageChange
  | FilesChange
  | HelpFeelsChange
  | InfoboxDefinitionChange
  | TitleChange
  | LinesCountChange
  | CharsCountChange
  | PinChange;

/** change that rewrites an existing line */
export interface UpdateChange {
  /** ID of the line to rewrite */
  _update: LineId;

  /** content changes of the line */
  lines: ChangeLine;
}

/** occurs when links in a page are changed */
export interface LinksChange {
  /** new links */
  links: string[];

  /** new links */
  linksLc: StringLc[];
}

/** occurs when project links in a page are changed */
export interface ProjectLinksChange {
  /** new links */
  projectLinks: string[];

  /** new links */
  projectLinksLc: StringLc[];
}

/** occurs when icons in a page are changed */
export interface IconsChange {
  /** new icons */
  icons: string[];

  /** new icons */
  iconsLc: StringLc[];
}

/** occurs when the title of a page is changed */
export interface TitleChange {
  /** new title */
  title: string;

  /** new title */
  titleLc: StringLc;
}
