import type { PlainText } from "./plainText.ts";
import type { Unit } from "./unit.ts";

/** アイコン記法 */
export interface Icon {
  type: "icon";

  /** 構文解析結果 */
  unit:
    | IconUnit<false>
    | ProjectIconUnit<false>
    | RepeatIconUnit<false>
    | RepeatProjectIconUnit<false>;

  /** the same as `unit.content` */
  children: PlainText;
}

/** 強調アイコン記法 */
export interface StrongIcon {
  type: "strong-icon";

  /** 構文解析結果 */
  unit:
    | IconUnit<true>
    | ProjectIconUnit<true>
    | RepeatIconUnit<true>
    | RepeatProjectIconUnit<true>;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface IconUnit<Strong extends boolean = false> extends Unit {
  /** title of the page where the icon is located */
  page: string;

  /** repeat count
   *
   * maximum 1000
   */
  size: 1;

  /** icon syntax */
  get content(): `${string}.icon`;

  /** raw text */
  get whole(): Strong extends true ? `[[${string}.icon]]` : `[${string}.icon]`;
}

export interface ProjectIconUnit<Strong extends boolean> extends Unit {
  /** project name where the icon is located */
  project: string;

  /** title of the page where the icon is located */
  page: string;

  /** repeat count
   *
   * maximum 1000
   */
  size: 1;

  /** icon syntax */
  get content(): `/${string}/${string}.icon`;

  /** raw text */
  get whole(): Strong extends true ? `[[/${string}/${string}.icon]]`
    : `[/${string}/${string}.icon]`;
}

export interface RepeatIconUnit<Strong extends boolean> extends Unit {
  /** title of the page where the icon is located */
  page: string;

  /** repeat count
   *
   * maximum 1000
   */
  size: number;

  /** icon syntax */
  get content(): `${string}.icon${"*" | "x"}${number}`;

  /** raw text */
  get whole(): Strong extends true ? `[[${string}.icon${"*" | "x"}${number}]]`
    : `[${string}.icon${"*" | "x"}${number}]`;
}

export interface RepeatProjectIconUnit<Strong extends boolean> extends Unit {
  /** project name where the icon is located */
  project: string;

  /** title of the page where the icon is located */
  page: string;

  /** repeat count
   *
   * maximum 1000
   */
  size: number;

  /** icon syntax */
  get content(): `/${string}/${string}.icon${"*" | "x"}${number}`;

  /** raw text */
  get whole(): Strong extends true
    ? `[[/${string}/${string}.icon${"*" | "x"}${number}]]`
    : `[/${string}/${string}.icon${"*" | "x"}${number}]`;
}
