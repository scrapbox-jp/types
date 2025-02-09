import type {
  BaseLine,
  BasePage,
  StringLc,
  UnixTime,
  UserId,
} from "../../../base.ts";
import type { SearchQuery } from "./search/query.ts";

/** user information */
export interface User {
  id: UserId;

  /** user name */
  name: string;

  /** user display name */
  displayName: string;

  /** profile image URL */
  photo: string;
}

/** user detailed information */
export interface UserInfo extends User {
  /** user e-mail */
  email: string;

  /** login provider */
  provider: "google" | "microsoft" | "email";

  /** creation time of the account */
  created: UnixTime;

  /** update time of the account */
  updated: UnixTime;
}

/** page information */
export interface Page extends BasePage {
  /** APIを叩いたuserの最終アクセス日時。
   *
   * おそらくこの値を元にテロメアの未読/既読の判別をしている
   */
  lastAccessed: UnixTime | null;

  /** 生成されたPage historyの数 */
  snapshotCount: number;

  /** 空リンクだと`false` */
  persistent: boolean;

  /** ページの行情報 */
  lines: BaseLine[];

  /** ページ内のリンク */
  links: string[];

  /** ページ内の外部プロジェクトリンク */
  projectLinks: string[];

  /** ページ内のアイコン */
  icons: string[];

  /** ページ内に含まれる、scrapbox.ioにアップロードしたファイルのfile id */
  files: string[];

  infoboxDefinition: string[];

  infoboxResult: InfoboxResult[];

  infoboxDisableLinks: string[];

  /** 関連ページリスト */
  relatedPages: RelatedPages;

  /** ページを作成したユーザー */
  user: User;

  /** 最後にページを更新したユーザー */
  lastUpdateUser: User;

  /** ページを編集したユーザーのうち、`user`以外の人 */
  collaborators: User[];
}

export interface RelatedPages {
  /** 1 hop links */
  links1hop: RelatedPage[];

  /** 2 hop links */
  links2hop: RelatedPage[];

  /** external links */
  projectLinks1hop: ProjectRelatedPage[];

  /** このページを参照しているページorアイコンがあればtrue */
  hasBackLinksOrIcons: boolean;

  /** 2 hop searchのquery */
  search: string;

  /** 全文検索エンジンの名前 */
  searchBackend: string;
}

export interface InfoboxResult {
  title: string;

  infobox: Record<string, string>;

  hallucination: boolean;

  truncated: boolean;
}

/** 関連ページのメタデータ */
export interface RelatedPage extends
  Pick<
    BasePage,
    | "id"
    | "title"
    | "image"
    | "descriptions"
    | "linked"
    | "pageRank"
    | "created"
    | "updated"
    | "accessed"
  > {
  /** page title */
  titleLc: StringLc;

  /**
   * links1hopの場合：ページ内の全てのリンク
   *
   * links2hopの場合：ページ内の全てのリンクのうち、`Page.links`に含まれるリンク
   */
  linksLc: StringLc[];

  infoboxResult: InfoboxResult[];

  infoboxDisableLinks: string[];

  search?: SearchQuery;
}

/** 外部プロジェクトの関連ページ */
export interface ProjectRelatedPage extends
  Pick<
    BasePage,
    | "id"
    | "title"
    | "image"
    | "descriptions"
    | "linked"
    | "updated"
    | "accessed"
  > {
  /** page title */
  titleLc: StringLc;

  created: number | null;

  /** project name */
  projectName: string;
}
