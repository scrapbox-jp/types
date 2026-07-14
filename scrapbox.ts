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

  /** current user information */
  User: UserInfoViaUserScript;

  /** AI prompt API */
  ai: AiViaUserScript;
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
  addSeparator: () => void;

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
    /** button title
     *
     * you can also set a function to change the title every time the selection changes
     */
    title: string | ((text: string) => string | undefined);
    /** process to execute when the button is clicked
     *
     * @return replace the selection with the string returned here and close the popup. If `undefined` is returned, do nothing. The popup will not close either
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

  /** whether the project is public */
  get publicVisible(): boolean;

  /** the current project plan */
  get plan(): string;

  /** additional plans */
  get additionalPlans(): AdditionalPlans;

  /** get the dictionary used for comupletion */
  get pages(): (Candidate<true> | Candidate<false>)[];

  /** Upload a file to the project */
  upload(file: Blob): Promise<UploadResult>;
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

  /** get the page creation date */
  get created(): T extends "page" ? Date : null;

  /** get the page last update date */
  get updated(): T extends "page" ? Date : null;

  /** get the current cursor position */
  get cursor(): T extends "page" ? CursorPosition : null;

  /** get the current text selection range */
  get selection(): T extends "page" ? SelectionRange : null;

  /** infobox data */
  infobox: InfoboxViaUserScript;

  /** Insert `text` before the `line`-th line.
   *
   * This edit can be undone by the user.
   *
   * If {@linkcode ScrapboxBase.Layout} is not `"page"`, this method does nothing.
   *
   * @param text text to insert
   * @param line line number to insert. `undefined` treats as `0`
   * @param options additional options
   */
  insertLine(
    text: string,
    line?: number,
    options?: LineEditOptions,
  ): void;

  /** Replace the `line`-th line with `text`.
   *
   * This edit can be undone by the user.
   *
   * If {@linkcode ScrapboxBase.Layout} is not `"page"`, this method does nothing.
   *
   * @param text text to replace
   * @param line line number to replace
   * @param options additional options
   */
  updateLine(
    text: string,
    line: number,
    options?: LineEditOptions,
  ): void;

  /** Return a promise that resolves when all page edits are saved */
  waitForSave: () => Promise<void>;

  /** Go to `title` page */
  show: (title: string) => Promise<void>;
}

/** infobox data accessible via UserScript */
export interface InfoboxViaUserScript {
  /** available infobox titles */
  get titles(): string[] | undefined;
  /** get infobox data by title */
  get(title: string): Record<string, string> | undefined;
}

/** additional project plans information */
export interface AdditionalPlans {
  /** KCS plan enabled */
  kcs?: boolean;
  /** Enterprise plan enabled */
  enterprise?: boolean;
  /** Helpfeel plan enabled */
  helpfeel?: boolean;
}

/** result of uploading a file */
export interface UploadResult {
  /** formatted text to insert into the page */
  text: string;
  /** URL of the uploaded file */
  url: string;
  /** warnings during upload */
  warnings: string[];
}

/** cursor position on the current page */
export interface CursorPosition extends Position {
  /** whether the editor has focus */
  hasFocus: boolean;
}

/** position in {@linkcode SelectionRange} */
export interface Position {
  /** line number */
  line: number;
  /** character position within the line */
  char: number;
}

/** text selection range on the current page */
export interface SelectionRange {
  /** selection start position */
  start: Position;
  /** selection end position */
  end: Position;
}

/** options for inserting or updating a line */
export interface LineEditOptions {
  /** whether to skip updating infobox */
  noInfoboxUpdate?: boolean;
}

/** current user information exposed via UserScript */
export interface UserInfoViaUserScript {
  /** current user display name */
  get name(): string | undefined;
  /** current user email */
  get email(): string | undefined;
  /** current user UI language */
  get uiLanguage(): string;
}

/** AI prompt API exposed via UserScript */
export interface AiViaUserScript {
  /** send a prompt to the AI API
   *
   * @param options prompt options
   */
  prompt(options: AIPromptOptions): Promise<AIPromptResult>;
}

/** result of an AI prompt */
export type AIPromptResult =
  | { data: string }
  | { name: string; message: string };

/** options for {@linkcode AiViaUserScript.prompt} */
export interface AIPromptOptions {
  /** system prompt */
  system?: string;
  /** user prompt */
  user?: string;
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
