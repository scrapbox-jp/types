import type { React } from "./vendor/react.ts";
import type { BaseStore } from "./baseStore.ts";
export type { BaseStore };

export type AddMenuInit =
  & {
    title?: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  }
  & (
    | {
      image: string;
    }
    | {
      icon: string;
    }
    | {
      image: string;
      icon: string;
    }
  );
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
  /** the class names of an icon which views on the left of the title */
  icon?: string;
  /** the event listener which is executed when the menu item is clicked */
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export declare class PageMenu extends BaseStore {
  constructor();
  public initialize(): void;
  public reset(): void;
  public pageMenu(menuName?: string): PageMenu;
  /** Add a new Page Menu button
   *
   * @param init information used for a Page Menu button
   */
  public addMenu(init: AddMenuInit): void;
  /** Add a menu item to a particular Page Menu button
   *
   * @param item information used for a menu item
   */
  public addItem(item: Item): void;
  /** Add a separator to a particular Page Menu button */
  public addSeparator(): void;
  /** remove all custom items from a particular Page Menu button */
  public removeAllItems(): void;

  public menuName: string;
  public menus: Map<string, Menu>;

  private _addToMenu(
    item: (Item & { separator: false }) | { separator: true },
  ): void;
}
