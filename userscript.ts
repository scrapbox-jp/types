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
      (menuName?: string): PageMenu;
      addMenu: (init: AddMenuInit) => void;
      /** Add a menu item to a particular Page Menu button
       *
       * @param item information used for a menu item
       */
      addItem: (item: Item) => void;
      /** Add a separator to a particular Page Menu button */
      addSeparater: () => void;
      removeAllItems: () => void;
    };
    PopupMenu: {
      addButton: (button: {
        title: string | ((text: string) => (string | undefined));
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

export interface PageBrief {
  /** true when the page has contents */ exists: boolean;
  /** whether the page contains any image */ hasIcon?: boolean;
  /** the page id */ id: string;
  /** the page title */ title: string;
  titleLc: StringLc;
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
