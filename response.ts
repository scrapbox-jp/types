import {
  BaseLine,
  BasePage,
  PageId,
  ProjectId,
  StringLc,
  UnixTime,
  UserId,
} from "./base.ts";
import { Commit } from "./commit.ts";

/** 関連ページのメタデータ */
export interface RelatedPage extends BasePage {
  /** ページ内のリンク */ linksLc: StringLc[];
  /** おそらく被リンク数 */ linked: number;
}

/** user information */
export interface User {
  id: UserId;
  /** user name */ name: string;
  /** user display name */ displayName: string;
  /** profile image URL */ photo: string;
}

/** user detailed information */
export interface UserInfo extends User {
  /** user e-mail */ email: string;
  /** whether the user is a pro user or not */ pro: boolean;
  /** login provider */ provider: "google" | "microsoft" | "email";
  /** accountの作成日時 */ created: UnixTime;
  /** accountの更新日時 */ updated: UnixTime;
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

  /** ページ内のアイコン */
  icons: string[];

  /** ページ内に含まれる、scrapbox.ioにアップロードしたファイルへのリンク */
  files: string[];

  /** 関連ページリスト */
  relatedPages: {
    /** 1 hop links */
    links1hop: RelatedPage[];

    /** 2 hop links */
    links2hop: RelatedPage[];

    /** このページを参照しているページorアイコンがあればtrue */
    hasBackLinksOrIcons: boolean;
  };
  /** 最後にページを更新したユーザー */
  user: User;

  /** ページを編集したユーザーのうち、`user`以外の人 */
  collaborators: User[];
}

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

/** project information which isn't joined */
export interface NotMemberProject {
  id: ProjectId;
  name: string;
  displayName: string;
  publicVisible: boolean;
  loginStrategies: string[];
  theme: string;
  gyazoTeamsName: string | null;
  googleAnalyticsCode: string | null;
  image?: string;
  created: UnixTime;
  updated: UnixTime;
  isMember: false;
}

/** project information which is joined */
export interface MemberProject extends Omit<NotMemberProject, "isMember"> {
  isMember: true;
  plan?: string | null;
  users: UserInfo[];
  admins: UserId[];
  owner: UserId;
  trialing: boolean;
  trialMaxPages: number;
  skipPayment: boolean;
  uploadFileTo: "gcs";
  uploadImaegTo: "gyazo" | "gcs";
  emailAddressPatterns: string[];
  backuped: UnixTime | null;
}

export interface GuestUser {
  isGuest: true;
  csrfToken: string;
}

export interface MemberUser extends UserInfo {
  isGuest: false;
  csrfToken: string;
  config: {
    userScript: boolean;
    emacsBinding: boolean;
  };
}

/** the response type of https://scrapbox.io/api/users/me */
export type UserResponse = GuestUser | MemberUser;

/** the response type of https://scrapbox.io/api/pages/:projectname/search/titles */
export interface SearchedTitle
  extends Pick<BasePage, "id" | "title" | "updated"> {
  /** 画像が存在するかどうか */
  hasIcon: boolean;

  /** ページ内のリンク */
  links: string[];
}

/** exportもしくはbackupをとったときのページデータ */
export interface ExportedPage<hasMetadata extends true | false = false>
  extends Pick<Page, "title" | "updated" | "created" | "id"> {
  /** ページ本文
   *
   * `hasMetadata === true`のときは行のmetadataが入る
   * それ以外の場合は行のテキストが入る
   */
  lines: hasMetadata extends true ? Omit<BaseLine, "id" | "userId">[]
    : string[];
}

export interface ExportedData<hasMetadata extends true | false = false> {
  /** project's name */
  name: string;

  /** project's display name */
  displayName: string;

  /** このデータを生成した日時 (UNIX時刻) */
  exported: UnixTime;

  /** exported pages */
  pages: ExportedPage<hasMetadata>[];
}

/** メタデータ無しインポート用ページデータ */
export interface ImportedLightPage {
  /** page's title
   *
   * `title` should be equal to `lines[0]`
   */
  title: string;

  /** page's text
   *
   * `lines[0]` should be equal to `title`
   */
  lines: string[];
}
/** インポート用メタデータ付き行データ */
export interface ImportedLine {
  /** line text */
  text: string;

  /** 行の最終更新日時 (UNIX時刻) */
  updated?: UnixTime;

  /** 行の最終作成日時 (UNIX時刻) */
  created?: UnixTime;
}
/** メタデータ付きインポート用ページデータ */
export interface ImportedPage {
  /** page's title
   *
   * `title` should be equal to `lines[0].text`
   */
  title: string;

  /** page's line data
   *
   * `lines[0].text` should be equal to `title`
   */
  lines: ImportedLine[];
}
/** JSON data for importing by https://scrapbox.io/api/page-data/import/:projectname.json  */
export interface ImportedData<hasMetadata extends true | false = false> {
  /** pages importing to a project */
  pages: hasMetadata extends true ? ImportedPage[] : ImportedLightPage[];
}

/** the response type of /api/embed-text/twitter */
export interface TweetInfo {
  /** Tweet本文 */
  description: string;

  /** Tweet投稿者のuser name*/
  userName: string;

  /** Tweet投稿者の表示名 */
  screenName: string;

  /** Tweetに添付された画像 */
  images: string[];
}

/** the response type of /api/pages/:projectname/search/titles */
export interface SearchResult {
  /** 検索したprojectの名前 */
  projectName: string;

  /** 検索文字列 */
  searchQuery: string;

  /** 検索語句 */
  query: SearchQuery;

  /** 検索件数の上限 */
  limit: number;

  /** 検索件数 */
  count: number;

  /** 検索文字列と完全一致するタイトルが見つかったら`true` */
  existsExactTitleMatch: boolean;

  /** 全文検索エンジンの名前 */
  backend: string;

  /** 見つかったページ */
  pages: {
    id: PageId;

    /** page title */
    title: string;

    /** page thumbnail
     *
     * 無いときは空文字が入る
     */
    image: string;

    /** 検索語句の中で、このページに含まれている語句 */
    words: string[];

    /** 検索語句に一致した行
     *
     * タイトル行のみが一致した場合は、検索語句の有無にかかわらずその次の行のみが入る
     */
    lines: string[];
  }[];
}

/** the response type of /api/projects/search/query and /api/projects/search/watch-list */
export interface ProjectSearchResult {
  /** 検索文字列 */
  searchQuery: string;

  /** 検索語句 */
  query: SearchQuery;

  /** 見つかったprojects */
  projects: {
    _id: ProjectId;

    /** project name */
    name: string;

    /** projectの表示名 */
    displayName: string;

    /** project favicon
     *
     * 無いときは`null`が入るかproperty自体が存在しない
     */
    image?: string | null;
  }[];
}

/** 検索クエリ */
export interface SearchQuery {
  /** AND検索に使う語句 */
  words: string[];

  /** NOT検索に使う語句 */
  excludes: string[];
}

/** the response type of /api/commits/:projectname/:pageid */
export interface CommitsResponse {
  /** 指定したページのcommits */
  commits: Commit[];
}
