import type { Line } from "./blocks.ts";
import type { PageId, StringLc, UnixTime } from "./base.ts";
import type { Layout, PartialLayout } from "./layout.ts";
import type { AddMenuInit, Item, PageMenu } from "./pageMenu.ts";
import type { EventEmitter } from "./vendor/events.ts";

/** Type definition of {@linkcode scrapbox} */
export type Scrapbox = ScrapboxBase<"page"> | ScrapboxBase<PartialLayout>;

/** Type definition of {@linkcode scrapbox} */
export interface ScrapboxBase<L extends Layout> extends EventEmitter {
  PageMenu: ExposedPageMenu;
  PopupMenu: PopupMenu;
  TimeStamp: TimeStamp;
  Project: Project;

  /** the current page layout */
  get Layout(): L;
  Page: Page<L>;
}

/** {@linkcode scrapbox}に露出している`PageMenu`の型 */
export interface ExposedPageMenu {
  /** get a particular Page Menu
   *
   * @param menuName Page Menu name to get. If it is set to "default" or undefined, return the default page Menu
   */
  (menuName?: string): PageMenu;

  /** Add a new Page Menu button
   *
   * @param init information used for a Page Menu button
   */
  addMenu: (init: AddMenuInit) => void;

  /** Add a menu item to the default Page Menu button
   *
   * @param item information used for a menu item
   */
  addItem: (item: Item) => void;

  /** Add a separator to the default Page Menu button */
  addSeparater: () => void;

  /** remove all custom items from the default Page Menu button */
  removeAllItems: () => void;
}

/** Type of {@linkcode ScrapboxBase.PopupMenu} */
export interface PopupMenu {
  /** Add a popup button
   *
   * @param button button settings
   */
  addButton: (button: {
    /** ボタンのタイトル
     *
     * 関数を設定して、選択範囲が変わるたびにタイトルを変更させる事もできる
     */
    title: string | ((text: string) => string | undefined);
    /** ボタンをクリックしたときに実行する処理
     *
     * @return ここで返した文字列で選択範囲を置換し、popupを閉じる。`undefined`を返した場合は何もしない。popupも閉じない
     */
    onClick: (text: string) => string | undefined;
  }) => void;
}

/** Type of {@linkcode ScrapboxBase.TimeStamp} */
export interface TimeStamp {
  /** Add a timestamp format to Scrapbox
   *
   * @param format a format of timestamp. this follow the moment.js format. You can set a function which returns any string
   */
  addFormat: (format: string | (() => string)) => void;

  /** Remove all timestamp formats from Scrapbox
   *
   * These include default formats
   */
  removeAllFormats: () => void;
}

/** Type of {@linkcode ScrapboxBase.Project} */
export interface Project {
  /** get the current project name */
  get name(): string;

  /** get the dictionary used for comupletion */
  get pages(): (Candidate<true> | Candidate<false>)[];
}

/** A current project's pages information for any suggestions */
export interface Candidate<Exists extends boolean = true> {
  /** page id */
  id: Exists extends true ? PageId : never;

  /** the title of a page */
  title: string;

  /** lower-case styled {@linkcode Candidate.title} */
  titleLc: StringLc;

  /** the length of `title` */
  titleLengthForSort: number;

  /** the updated time */
  updated: Exists extends true ? UnixTime : 0;

  /** `true` when the page has contents */
  exists: Exists;

  /** thumbnail URL */
  image: Exists extends true ? string | undefined : never;

  /** lower-case styled links in the page */
  linksLc: Exists extends true ? StringLc[] : never;
}

/** Type of {@linkcode ScrapboxBase.Page} */
export interface Page<T extends Layout> {
  /** get the current page lines data */
  get lines(): T extends "page" ? Line[] : null;

  /** get the current page title */
  get title(): T extends "page" ? string : null;

  /** get the current page id */
  get id(): T extends "page" ? string : null;

  /** get the current page metadata */
  get metadata(): T extends "page" ? PageMetadata : null;

  /** Insert `text` before the `line`-th line.
   *
   * This edit can be undone by the user.
   *
   * If {@linkcode ScrapboxBase.Layout} is not `"page"`, this method does nothing.
   *
   * @param text text to insert
   * @param line line number to insert. `undefined` treats as `0`
   */
  insertLine(text: string, line?: number): void;

  /** Replace the `line`-th line with `text`.
   *
   * This edit can be undone by the user.
   *
   * If {@linkcode ScrapboxBase.Layout} is not `"page"`, this method does nothing.
   *
   * @param text text to replace
   * @param line line number to replace
   */
  updateLine(text: string, line: number): void;

  /** Return a promise that resolves when all page edits are saved */
  waitForSave: () => Promise<void>;

  /** Go to `title` page */
  show: (title: string) => Promise<void>;
}

/** A current page metadata that {@linkcode Page.metadata} returns */
export interface PageMetadata {
  links: string[];
  projectLinks: string[];
  icons: string[];
  images: string[];
  descriptions: string[];
  files: string[];
  helpfeels: string[];
  infoboxDefinition: string[];
  linesCount: number;
  charsCount: number;
}
