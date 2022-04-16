import { Unit } from "./unit.ts";
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

export interface InternalLinkUnit extends Unit {
  /** page title */
  page: string;
}

export interface ProjectLinkUnit extends Unit {
  /** project name */
  project: string;

  /** page title */
  page: string;
}

export interface ProjectHomeLinkUnit extends Unit {
  /** project name */
  project: string;
}
