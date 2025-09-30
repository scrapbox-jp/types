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

  /** The settings for [Page list filter](https://scrapbox.io/shokai/Page_list_filter) */
  pageFilters: PageFilter[];

  /** The setting for [Translation mode (beta)](https://scrapbox.io/help-jp/Translation_mode_(beta)) */
  translation: TranslationSetting;

  /** creation time of the account */
  created: UnixTime;

  /** update time of the account */
  updated: UnixTime;
}

/** Setting for [Page list filter](https://scrapbox.io/shokai/Page_list_filter) */
export interface PageFilter {
  /** filter type */
  type: string;

  /** icon name to filter */
  value: string;
}

/** Setting for [Translation mode (beta)](https://scrapbox.io/help-jp/Translation_mode_(beta)) */
export interface TranslationSetting {
  /** User native language */
  nativeLanguage: string;

  /** The language that the user wants to translate any language into */
  to: string;
}

/**
 * Available languages you can use in [Translation mode (beta)](https://scrapbox.io/help-jp/Translation_mode_(beta))
 *
 * | language               | value   |
 * | ---------------------- | ------- |
 * | Arabic                 | `AR`    |
 * | Bulgarian              | `BG`    |
 * | Czech                  | `CS`    |
 * | Danish                 | `DA`    |
 * | German                 | `DE`    |
 * | Greek                  | `EL`    |
 * | English (British)      | `EN-GB` |
 * | English (American)     | `EN-US` |
 * | Spanish                | `ES`    |
 * | Estonian               | `ET`    |
 * | Finnish                | `FI`    |
 * | French                 | `FR`    |
 * | Hungarian              | `HU`    |
 * | Indonesian             | `ID`    |
 * | Italian                | `IT`    |
 * | Japanese               | `JA`    |
 * | Korean                 | `KO`    |
 * | Lithuanian             | `LT`    |
 * | Latvian                | `LV`    |
 * | Norwegian              | `NB`    |
 * | Dutch                  | `NL`    |
 * | Polish                 | `PL`    |
 * | Portuguese (Brazilian) | `PT-BR` |
 * | Portuguese (European)  | `PT-PT` |
 * | Romanian               | `RO`    |
 * | Russian                | `RU`    |
 * | Slovak                 | `SK`    |
 * | Slovenian              | `SL`    |
 * | Swedish                | `SV`    |
 * | Turkish                | `TR`    |
 * | Ukrainian              | `UK`    |
 * | Chinese (simplified)   | `ZH`    |
 */
export type TranslationLanguage =
  | "AR"
  | "BG"
  | "CS"
  | "DA"
  | "DE"
  | "EL"
  | "EN-GB"
  | "EN-US"
  | "ES"
  | "ET"
  | "FI"
  | "FR"
  | "HU"
  | "ID"
  | "IT"
  | "JA"
  | "KO"
  | "LT"
  | "LV"
  | "NB"
  | "NL"
  | "PL"
  | "PT-BR"
  | "PT-PT"
  | "RO"
  | "RU"
  | "SK"
  | "SL"
  | "SV"
  | "TR"
  | "UK"
  | "ZH";

/** page information
 *
 * @typeParam HasInfoboxDefinition Whether the page includes the infobox definition
 */
export interface Page<HasInfoboxDefinition extends boolean = false>
  extends BasePage {
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

  helpfeels: string[];

  /** ページ内に含まれる、scrapbox.ioにアップロードしたファイルのfile id */
  files: string[];

  infoboxDefinition: HasInfoboxDefinition extends true ? string[] : [];

  infoboxResult: InfoboxResult[];

  infoboxDisableLinks: string[];

  /** 関連ページリスト */
  relatedPages: RelatedPages<HasInfoboxDefinition>;

  /** ページを作成したユーザー */
  user: User;

  /** 最後にページを更新したユーザー */
  lastUpdateUser: User;

  /** ページを編集したユーザーのうち、`user`以外の人 */
  collaborators: User[];

  charsCount: number;

  linesCount: number;
}

/** A page with infobox definition */
export type PageWithInfoboxDefinition = Page<true>;

/** A page without infobox definition */
export type PageWithoutInfoboxDefinition = Page<false>;

export interface RelatedPages<HasInfoboxDefinition extends boolean = false> {
  /** 1 hop links */
  links1hop:
    (HasInfoboxDefinition extends true ? Omit<RelatedPage, "descriptions">
      : RelatedPage)[];

  /** 2 hop links */
  links2hop:
    (HasInfoboxDefinition extends true ? Omit<RelatedPage, "descriptions">
      : RelatedPage)[];

  /** external links */
  projectLinks1hop: ProjectRelatedPage[];

  /** `true` if there are pages or icons that reference this page */
  hasBackLinksOrIcons: boolean;

  fatHeadwordsLc: string[];

  hiddenHeadwordsLc: string[];

  /** 2 hop searchのquery */
  search: string;

  /** 全文検索エンジンの名前 */
  searchBackend: string;

  charsCount: {
    links1hop: number;
    links2hop: number;
  };
}

export interface InfoboxResult {
  title: string;

  infobox: Record<string, string>;

  hallucination: boolean;

  truncated: boolean;
}

/** related page metadata */
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

  infoboxResult?: InfoboxResult[];

  infoboxDisableLinks?: string[];

  charsCount: number;

  lastAccessed: number;

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
