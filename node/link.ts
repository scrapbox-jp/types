import { PlainText } from "./plainText.ts";

/** リンク記法
 *
 * 以下の形式が対象
 *
 * - [aaa]
 * - [/xxx/aaa]
 * - [/xxx/]
 * - [/xxx]
 */
export interface Link {
  type: "link";

  /** 構文解析結果 */
  unit: InternalLinkUnit | ProjectLinkUnit | ProjectHomeLinkUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface InternalLinkUnit {
  /** page title */
  page: string;

  /** line id */
  line?: string;
}

export interface ProjectLinkUnit {
  /** project name */
  project: string;

  /** page title */
  page: string;

  /** line id */
  line?: string;
}

export interface ProjectHomeLinkUnit {
  /** project name */
  project: string;
}
