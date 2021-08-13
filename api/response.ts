import { Omit } from "../utils.ts";
import {
  CommitId,
  Line,
  Page as PageBase,
  PageId,
  ProjectId,
  UserId,
} from "../base.ts";
import { NotFoundError, NotMemberError } from "./error.ts";

/** 関連ページのメタデータ */
export interface RelatedPage extends PageBase {
  /** ページ内のリンク */ linksLc: string[];
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
  /** accountの作成日時 */ created: number;
  /** accountの更新日時 */ updated: number;
}

/** summary of page information */
export interface PageSummary extends PageBase {
  /** ピン留めされていたら1, されていなかったら0 */ pin: 0 | 1;
  /** ページの閲覧回数 */ views: number;
  /** おそらく被リンク数 */ linked: number;
  /** 最新の編集コミットid */ commitId: CommitId;
  /** ページの作成日時 */ created: number;
  /** page rank */ pageRank: number;
  /** Page historyの最終生成日時 */ snapshotCreated: number | null;
}

/** page information */
export interface Page extends PageSummary {
  /** APIを叩いたuserの最終アクセス日時。おそらくこの値を元にテロメアの未読/既読の判別をしている */ lastAccessed:
    | number
    | null;
  /** 生成されたPage historyの数 */ snapshotCount: number;
  /** 不明。削除されたページだとfalse？ */ persistent: boolean;
  /** ページの行情報 */ lines: Line[];
  /** ページ内のリンク */ links: string[];
  /** ページ内のアイコン */ icons: string[];
  /** ページ内に含まれる、scrapbox.ioにアップロードしたファイルへのリンク */ files: string[];
  /** 関連ページリスト */
  relatedPages: {
    /** 1 hop links */ links1hop: RelatedPage[];
    /** 2 hop links */ links2hop: RelatedPage[];
    /** このページを参照しているページorアイコンがあればtrue */ hasBackLinksOrIcons: boolean;
  };
  /** 最後にページを更新したユーザー */ user: User;
  /** ページを編集したユーザーのうち、`user`以外の人 */ collaborators: User[];
}

/** the response type of https://scrpabox.io/api/pages/:projectname */
export interface PageList {
  /** data取得先のproject名 */ projectName: string;
  /** parameterに渡したskipと同じ */ skip: number;
  /** parameterに渡したlimitと同じ */ limit: number;
  /** projectの全ページ数 (中身のないページを除く) */ count: number;
  /** 取得できたページ情報 */ pages: PageSummary[];
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
  created: number;
  updated: number;
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
  backuped: number | null;
}

/** the response type of https://scrapbox.io/api/users/me */
export type UserResponse =
  | {
    isGuest: true;
    csrfToken: string;
  }
  | ({
    isGuest: false;
    csrfToken: string;
    config: {
      userScript: boolean;
      emacsBinding: boolean;
    };
  } & UserInfo);

/** the response type of https://scrapbox.io/api/pages/:projectname/search/titles */
export interface SearchedTitle {
  id: PageId;
  /** page title */ title: string;
  /** 画像が存在するかどうか */ hasIcon: boolean;
  /** ページの更新日時 */ updated: number;
  /** ページ内のリンク */ links: string[];
}

export type ProjectBackup = {
  name: string;
  displayName: string;
  exported: number;
  pages: {
    id: PageId;
    title: string;
    created: number;
    updated: number;
    lines: string[];
  };
};
export type ProjectBackupWithMetadata = {
  name: string;
  displayName: string;
  exported: number;
  pages: {
    id: PageId;
    title: string;
    created: number;
    updated: number;
    lines: Omit<Line, "id" | "userId">[];
  };
};
