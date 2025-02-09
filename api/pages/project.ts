import type { BasePage } from "../../base.ts";

/** the response type of https://scrpabox.io/api/pages/:projectname */
export interface PageList {
  /** data取得先のproject名 */
  projectName: string;

  /** parameterに渡したskipと同じ */
  skip: number;

  /** parameterに渡したlimitと同じ */
  limit: number;

  /** projectの全ページ数 (中身のないページを除く) */
  count: number;

  /** 取得できたページ情報 */
  pages: BasePage[];
}
