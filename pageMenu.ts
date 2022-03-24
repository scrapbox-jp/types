import type { React } from "./deps/react.ts";
import { BaseStore } from "./baseStore.ts";

export type AddMenuInit = {
  title?: string;
  image: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
};
export type Menu = {
  image: string;
  items: ((Item & { separator: false }) | { separator: true })[];
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
};
export type Item = {
  /** the title of a menu item */
  title: string | (() => string);
  /** the URL of an image which views on the left of the title */
  image?: string;
  /** the event listener which is executed when the menu item is clicked */
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
};

export declare class PageMenu extends BaseStore {
  constructor();
  public initialize(): void;
  public reset(): void;
  public pageMenu(menuName?: string): PageMenu;
  public addMenu(init: AddMenuInit): void;
  /** Add a menu item to a particular Page Menu button
   *
   * @param item information used for a menu item
   */
  public addItem(item: Item): void;
  /** Add a separator to a particular Page Menu button */
  public addSeparator(): void;
  public removeAllItems(): void;

  public menuName: string;
  public menus: Map<string, Menu>;

  private _addToMenu(
    item: (Item & { separator: false }) | { separator: true },
  ): void;
}
