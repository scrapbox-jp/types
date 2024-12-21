import type { BracketUnit } from "./unit.ts";

/** リンク記法
 *
 * 以下の形式が対象
 *
 * - `[aaa]`
 * - `[aaa#id]`
 * - `[/xxx/aaa]`
 * - `[/xxx/aaa#id]`
 * - `[/xxx/]`
 * - `[/xxx]`
 */
export interface Link {
  type: "link";

  /** 構文解析結果 */
  unit:
    | InternalLinkUnit
    | InternalLinkUnitWithLineId
    | ProjectLinkUnit
    | ProjectLinkUnitWithLineId
    | ProjectHomeLinkUnit;

  /** the same as {@linkcode Link.unit.content} */
  children: string;
}

export interface InternalLinkUnit extends BracketUnit {
  /** page title */
  page: string;

  /** page title */
  get content(): string;

  /** raw text */
  get whole(): `[${string}]`;
}
export interface InternalLinkUnitWithLineId extends BracketUnit {
  /** page title */
  page: string;

  /** line id */
  line: string;

  /** page title with a line id if exists */
  get content(): `${string}#${string}`;

  /** raw text */
  get whole(): `[${string}#${string}]`;
}

export interface ProjectLinkUnit extends BracketUnit {
  /** project name */
  project: string;

  /** page title */
  page: string;

  /** project name and page title */
  get content(): `/${string}/${string}`;

  /** raw text */
  get whole(): `[/${string}/${string}]`;
}
export interface ProjectLinkUnitWithLineId extends BracketUnit {
  /** project name */
  project: string;

  /** page title */
  page: string;

  /** line id */
  line: string;

  /** project name and page title with a line id if exists */
  get content(): `/${string}/${string}#${string}`;

  /** raw text */
  get whole(): `[/${string}/${string}#${string}]`;
}

export interface ProjectHomeLinkUnit extends BracketUnit {
  /** project name */
  project: string;
}
