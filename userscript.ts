/// <reference no-default-lib="true"/>
/// <reference lib="esnext"/>
/// <reference lib="dom"/>
/// <reference lib="deno.ns" />

import { ParsedLine } from "./userscript/blocks.ts";
import { StringLc } from "./base.ts";
import type { Layout, PartialLayout } from "./layout.ts";
import type { AddMenuInit, Item, PageMenu } from "./pageMenu.ts";
import type { EventEmitter } from "./deps/events.ts";
export type { EventEmitter, Layout, ParsedLine, PartialLayout, StringLc };
export * from "./pageMenu.ts";

export type Scrapbox =
  & EventEmitter
  & {
    PageMenu: {
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
    };
    PopupMenu: {
      /** Add a popup button
       *
       * @param button button settings
       */
      addButton: (button: {
        /** ボタンのタイトル
         *
         * 関数を設定して、選択範囲が変わるたびにタイトルを変更させる事もできる
         */
        title: string | ((text: string) => (string | undefined));
        /** ボタンをクリックしたときに実行する処理
         *
         * @return ここで返した文字列で選択範囲を置換し、popupを閉じる。`undefined`を返した場合は何もしない。popupも閉じない
         */
        onClick: (text: string) => (string | undefined);
      }) => void;
    };
    TimeStamp: TimeStamp;
    Project: {
      get name(): string;
      get pages(): PageBrief[];
    };
  }
  & (
    {
      Layout: "page";
      Page: {
        get lines(): ParsedLine[];
        get title(): string;
        get id(): string;
      };
    } | {
      Layout: PartialLayout;
      Page: {
        get lines(): null;
        get title(): null;
        get id(): null;
      };
    }
  );

/** 入力補完に使われる辞書 */
export interface PageBrief {
  /** true when the page has contents */ exists: boolean;
  /** whether the page contains any image */ hasIcon?: boolean;
  /** the page id */ id: string;
  /** the page title */ title: string;
  /** lower case style of the page title */ titleLc: StringLc;
  /** updated time */ updated: number;
}

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

/** built-in UserScript events */
export type eventName =
  | "lines:changed"
  | "page:changed"
  | "layout:changed"
  | "project:changed";
