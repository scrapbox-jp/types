import type { Line } from "./blocks.ts";
import type { BasePage, StringLc } from "./base.ts";
import type { Layout, PartialLayout } from "./layout.ts";
import type { AddMenuInit, Item, PageMenu } from "./pageMenu.ts";
import type { EventEmitter } from "./vendor/events.ts";

/** Type definition of `window.scrapbox` */
export type Scrapbox =
  & EventEmitter
  & {
    PageMenu: ExposedPageMenu;
    PopupMenu: PopupMenu;
    TimeStamp: TimeStamp;
    Project: Project;
  }
  & (
    {
      /** the current page layout */
      Layout: "page";
      Page: Page<"page">;
    } | {
      /** the current page layout */
      Layout: PartialLayout;
      Page: Page<PartialLayout>;
    }
  );

/** `window.scrapbox`に露出している`PageMenu`の型 */
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

/** `window.scrapbox`に露出している`PopupMenu`の型 */
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

/** `window.scrapbox`に露出している`TimeStamp`の型 */
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
  removeAllFormat: () => void;
}

/** 入力補完に使われる辞書 */
export interface Candidate extends Pick<BasePage, "id" | "title" | "updated"> {
  /** true when the page has contents */
  exists: boolean;

  /** thumbnail URL */
  image?: string;

  /** lower case style of the page title */
  titleLc: StringLc;

  /** the length of `title` */
  titleLengthForSort: number;
}

/** `window.scrapbox`に露出している`Project`の型 */
export interface Project {
  /** get the current project name */
  get name(): string;

  /** get the dictionary used for comupletion */
  get pages(): Candidate[];
}

/** `window.scrapbox`に露出している`Page`の型 */
export interface Page<T extends Layout> {
  /** get the current page lines data */
  get lines(): T extends "page" ? Line[] : null;

  /** get the current page title */
  get title(): T extends "page" ? string : null;

  /** get the current page id */
  get id(): T extends "page" ? string : null;
}
