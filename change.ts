import type { BasePage, LineId, StringLc } from "./base.ts";

/** ページの変更内容 */
export type Change =
  | InsertChange
  | UpdateChange
  | DeleteChange
  | LinksChange
  | DescriptionsChange
  | ImageChange
  | TitleChange
  | PinChange;

/** 行を新規作成する変更 */
export interface InsertChange {
  /** このIDが示す行の上に挿入する
   *
   * 末尾に挿入するときは`"_end"`を指定する
   */
  _insert: LineId;

  /** 挿入する行のデータ */
  lines: NewLine;
}

export interface NewLine {
  /** 新しく挿入する行のID */
  id: LineId;

  /** 行のテキスト */
  text: string;
}

/** 既存の行を書き換える変更 */
export interface UpdateChange {
  /** 書き換える行のID */
  _update: LineId;

  /** 行の変更内容 */
  lines: ChangeLine;
}

export interface ChangeLine {
  /**変更前の文字列*/
  origText: string;

  /**変更後の文字列*/
  text: string;
}

/** 既存の行を削除する変更 */
export interface DeleteChange {
  /** 削除する行のID */
  _delete: LineId;

  /** 常に `-1` */
  lines: -1;
}

/** ページ中のリンクが変更されると発生する */
export interface LinksChange {
  /** 新しいリンク */
  links: string[];

  /** 新しいリンク */
  linksLc: StringLc[];
}

/** ページのサムネイル本文が変更されると発生する */
export interface DescriptionsChange {
  /** 新しいサムネイル本文 */
  descriptions: string[];
}

/** ページのサムネイルが変更されると発生する */
export interface ImageChange {
  /** 新しいサムネイルのURL
   *
   * サムネイルがなくなったときは`null`になる
   */
  image: string | null;
}

/** ページのタイトルが変更されると発生する */
export interface TitleChange {
  /** 新しいタイトル */
  title: string;

  /** 新しいタイトル */
  titleLc: StringLc;
}

/** ページのピンの状態が変更されると発生する */
export interface PinChange {
  pin: BasePage["pin"];
}
