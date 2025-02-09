import type { BasePage, LineId } from "./base.ts";

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

export interface FilesChange {
  /** Array of file IDs
   *
   * These IDs reference files that have been uploaded to the page.
   * Files can include images, documents, or other attachments.
   */
  files: string[];
}

export interface HelpFeelsChange {
  /** Array of Helpfeel entries without the leading "? " prefix
   *
   * Helpfeel is a Scrapbox notation for creating help/documentation entries.
   * Example: "? How to use" becomes "How to use" in this array.
   * These entries are used to build the page's help documentation.
   */
  helpfeels: string[];
}

export interface InfoboxDefinitionChange {
  /** Array of trimmed lines from infobox tables
   *
   * Contains lines from tables marked with either `table:infobox` or `table:cosense`
   */
  infoboxDefinition: string[];
}

export interface LinesCountChange {
  linesCount: number;
}

export interface CharsCountChange {
  charsCount: number;
}

/** ページのピンの状態が変更されると発生する */
export interface PinChange {
  pin: BasePage["pin"];
}
