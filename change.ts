import type { LineId, StringLc } from "./base.ts";
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
} from "./websocket/change.ts";

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
