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

  /** whether the user is a pro user or not */
  pro: boolean;

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

  /** 関連ページリスト */
  relatedPages: RelatedPages;

  /** 最後にページを更新したユーザー */
  user: User;

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
}

/** 外部プロジェクトの関連ページ */
export interface ProjectRelatedPage extends Omit<RelatedPage, "linksLc"> {
  /** project name */
  projectName: string;
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

/** project information */
export interface Project {
  id: ProjectId;

  name: string;

  displayName: string;

  publicVisible: boolean;

  loginStrategies: string[];

  theme: string;

  gyazoTeamsName: string | null;

  googleAnalyticsCode: string | null;

  /** planの種類
   *
   * public projectの場合は`null`になる
   *
   * 古いprojectだとpropertyが生えていない
   */
  plan?: string | null;

  created: UnixTime;

  updated: UnixTime;

  isMember: boolean;
}

/** the response type of /api/projects */
export interface ProjectResponse {
  projects: Project[];
}

/** project information which isn't joined */
export interface NotMemberProject extends Omit<Project, "isMember"> {
  image?: string;

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
  /** thumbnail URL */
  image?: string;

  /** ページ内のリンク */
  links: string[];
}

/** exportしたときのページデータ */
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

/** backupされるページデータ */
export interface BackupedPage
  extends Pick<Page, "title" | "updated" | "created" | "id"> {
  /** ページ本文 */
  lines: Pick<BaseLine, "text" | "created" | "updated">[];

  /** ページに含まれているリンク*/
  linksLc: StringLc[];
}

/** project backup data */
export interface BackupData {
  /** project's name */
  name: string;

  /** project's display name */
  displayName: string;

  /** このデータを生成した日時 (UNIX時刻) */
  exported: UnixTime;

  /** backuped pages */
  pages: BackupedPage[];
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
  description?: string;

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
  pages: FoundPage[];
}

/** /api/pages/:projectname/search/titles で見つかったページ */
export interface FoundPage {
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
}

/** the response type of /api/projects/search/query and /api/projects/search/watch-list */
export interface ProjectSearchResult {
  /** 検索文字列 */
  searchQuery: string;

  /** 検索語句 */
  query: SearchQuery;

  /** 見つかったprojects */
  projects: FoundProject[];
}

/** /api/projects/search/query や /api/projects/search/watch-list で見つかったproject */
export interface FoundProject {
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

/** the response type of /api/page-snapshots/:projectname/:pageid */
export interface PageSnapshot {
  pageId: PageId;

  /** 作成されているsnapshots */
  snapshots: Snapshot[];
}

/** a page snapshot */
export interface Snapshot {
  /** snapshotを撮ったときのページタイトル */
  title: string;

  /** snapshotの作成日時 */
  created: UnixTime;

  /** snapshotしたページ本文 */
  lines: BaseLine[];
}
