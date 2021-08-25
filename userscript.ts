import { ParsedLine } from "./userscript/blocks.ts";
import { StringLc } from "./base.ts";

export type Layout =
  | "list"
  | "page"
  | "stream"
  | "project-settings-billing-page"
  | "project-settings-basic-page"
  | "project-settings-members-page"
  | "settings-profile-page"
  | "settings-extensions-page"
  | "settings-delete-account-page";
export type Scrapbox =
  & {
    Project: {
      name: string;
      pages: PageBrief[];
    };
    TimeStamp: TimeStamp;
    PopupMenu: {
      addButton: (
        props: {
          title: string | ((selectedText: string) => string);
          onClick: (selectedText: string) => string | undefined;
        },
      ) => void;
    };
    PageMenu: ((name: string) => PageMenu) & {
      addMenu: (
        props: { title: string; image: string; onClick?: () => void },
      ) => void;
      addItem: (props: AddItemProps) => void;
      addSeparator: () => void;
      removeAllItems: () => void;
    };
  }
  & UserScriptEvents
  & ({
    Layout:
      | "list"
      | "stream"
      | "project-settings-billing-page"
      | "project-settings-basic-page"
      | "project-settings-members-page"
      | "settings-profile-page"
      | "settings-extensions-page"
      | "settings-delete-account-page";
    Page: {
      title: null;
      lines: null;
      id: null;
    };
  } | {
    Layout: "page";
    Page: {
      title: string;
      lines: ParsedLine[];
      id: string;
    };
  });

export interface UserScriptEvents {
  addListener: (type: string, listener: () => void) => void;
  on: (type: string, listener: () => void) => void;
  removeListener: (type: string, listener: () => void) => void;
  off: (type: string, listener: () => void) => void;
  removeAllListeners: (type?: string) => void;
  once: (type: string, listener: () => void) => void;
  prependListener: (type: string, listener: () => void) => void;
  prependOnceListener: (type: string, listener: () => void) => void;
  listeners: (type: string) => (() => void)[];
  rawListeners: (type: string) => (() => void)[];
  listenerCount: (type: string) => number;
  emit: (type: string) => void;
  eventNames: () => string[];
  getMexListeners: () => number;
  setMexListeners: (length: number) => void;
}
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

export interface AddItemProps {
  /** the title of a menu item */ title: string | (() => string);
  /** the URL of an image which views on the left of the title */
  image?: string;
  /** the event listener which is executed when the menu item is clicked */
  onClick: () => void;
}
export interface PageMenu {
  /** Add a menu item to a particular Page Menu button
   *
   * @param props information used for a menu item
   */
  addItem: (
    props: AddItemProps,
  ) => void;
  /** Add a separator to a particular Page Menu button */
  addSeparator: () => void;
  removeAllItems: () => void;
  menuName: string;
  reset: () => void;
  emitChange: () => void;
  menus: Map<
    string,
    {
      image: string | null;
      onClick?: () => void;
      items: (AddItemProps & { separator: boolean })[];
    }
  >;
}

/** built-in UserScript events */
export type eventName =
  | "lines:changed"
  | "page:changed"
  | "layout:changed"
  | "project:changed";
