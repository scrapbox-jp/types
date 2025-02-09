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

/** 既存の行を書き換える変更 */
export interface UpdateChange {
  /** 書き換える行のID */
  _update: LineId;

  /** 行の変更内容 */
  lines: ChangeLine;
}

/** ページ中のリンクが変更されると発生する */
export interface LinksChange {
  /** 新しいリンク */
  links: string[];

  /** 新しいリンク */
  linksLc: StringLc[];
}

/** ページ中のproject linksが変更されると発生する */
export interface ProjectLinksChange {
  /** 新しいリンク */
  projectLinks: string[];

  /** 新しいリンク */
  projectLinksLc: StringLc[];
}

/** ページ中のiconsが変更されると発生する */
export interface IconsChange {
  /** 新しいicons */
  icons: string[];

  /** 新しいicons */
  iconsLc: StringLc[];
}

/** ページのタイトルが変更されると発生する */
export interface TitleChange {
  /** 新しいタイトル */
  title: string;

  /** 新しいタイトル */
  titleLc: StringLc;
}
