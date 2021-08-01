import type { ParsedLine } from "./line.ts";
export * from "./line.ts";

// utilities
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** scrapboxの行のメタデータ */
export interface Line {
  /** 行のid */ id: string;
  /** 行のテキスト */ text: string;
  /** 一番最後に行を編集した人のid */ userId: string;
  /** 行の作成日時 */ created: number;
  /** 行の最終更新日時 */ updated: number;
}

/** 関連ページのメタデータ */
export interface RelatedPage {
  /** ページのid */ id: string;
  /** ページのタイトル */ title: string;
  /** ページのタイトルを小文字にして、` `を`_`に変換したもの */ titleLc: string;
  /** ページのサムネイル画像 */ image: string;
  /** ページのサムネイル本文。最大5行 */ descriptions: string[];
  /** ページ内のリンク */ linksLc: string[];
  /** おそらく被リンク数 */ linked: number;
  /** ページの最終更新日時 */ updated: number;
  /** おそらくページの閲覧日時 */ accessed: number;
}

/** user information */
export interface User {
  /** user id */ id: string;
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
export interface PageSummary {
  /** ページのid */ id: string;
  /** ページのタイトル */ title: string;
  /** ページのサムネイル画像
   * 存在しなければ`null`
  */
  image: string | null;
  /** ページのサムネイル本文。最大5行 */ descriptions: string[];
  /** ピン留めされていたら1, されていなかったら0 */ pin: 0 | 1;
  /** ページの閲覧回数 */ views: number;
  /** おそらく被リンク数 */ linked: number;
  /** 最新の編集コミットid */ commitId: string;
  /** ページの作成日時 */ created: number;
  /** ページの最終更新日時 */ updated: number;
  /** Date last visitedに使われる最終アクセス日時 */ accessed: number;
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
export type PageListResponse =
  | NotFoundError
  | NotMemberError
  | {
    /** data取得先のproject名 */ projectName: string;
    /** parameterに渡したskipと同じ */ skip: number;
    /** parameterに渡したlimitと同じ */ limit: number;
    /** projectの全ページ数 (中身のないページを除く) */ count: number;
    /** 取得できたページ情報 */ pages: PageSummary[];
  };

/** project basic information */
export interface Project {
  id: string;
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
  isMember: boolean;
  plan?: string;
}

export type NotMemberError = {
  name: "NotMemberError";
  message: string;
};

export type NotFoundError = {
  name: "NotFoundError";
  message: string;
};

/** the response type of https://scrpabox.io/api/projects/:projectname */
export type ProjectResponse =
  | NotFoundError
  | NotMemberError
  | (
    & Omit<Omit<Project, "isMember">, "plan">
    & ({ isMember: false } | {
      isMember: true;
      plan?: string | null;
      users: UserInfo[];
      admins: string[];
      owner: string;
      trialing: boolean;
      trialMaxPages: number;
      skipPayment: boolean;
      uploadFileTo: "gcs";
      uploadImaegTo: "gyazo" | "gcs";
      emailAddressPatterns: string[];
      backuped: number | null;
    })
  );

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
export type LinksResponse =
  | NotFoundError
  | NotMemberError
  | {
    message: "Invalid pageId";
  }
  | {
    /** page id */ id: string;
    /** page title */ title: string;
    /** 画像が存在するかどうか */ hasIcon: boolean;
    /** ページの更新日時 */ updated: number;
    /** ページ内のリンク */ links: string[];
  }[];

export type ProjectBackup = {
  name: string;
  displayName: string;
  exported: number;
  pages: {
    id: string;
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
    id: string;
    title: string;
    created: number;
    updated: number;
    lines: { text: string; updated: number; created: number }[];
  };
};

export type Layout =
  | "list"
  | "page"
  | "stream"
  | "project-settings-billing-page"
  | "project-settings-basic-page"
  | "project-settings-members-page"
  | "settings-profile-page"
  | "settings-extensions-page"
  | "settings-delete-account-page";
export type Scrapbox =
  & {
    Project: {
      name: string;
      pages: PageBrief[];
    };
    TimeStamp: TimeStamp;
    PopupMenu: {
      addButton: (
        props: {
          title: string | ((selectedText: string) => string);
          onClick: (selectedText: string) => string | undefined;
        },
      ) => void;
    };
    PageMenu: ((name: string) => PageMenu) & {
      addMenu: (
        props: { title: string; image: string; onClick?: () => void },
      ) => void;
      addItem: (props: AddItemProps) => void;
      addSeparator: () => void;
      removeAllItems: () => void;
    };
    addListener: (type: string, listener: () => void) => void;
    on: (type: string, listener: () => void) => void;
    removeListener: (type: string, listener: () => void) => void;
    off: (type: string, listener: () => void) => void;
    removeAllListeners: (type?: string) => void;
    once: (type: string, listener: () => void) => void;
    prependListener: (type: string, listener: () => void) => void;
    prependOnceListener: (type: string, listener: () => void) => void;
    listeners: (type: string) => (() => void)[];
    rawListeners: (type: string) => (() => void)[];
    listenerCount: (type: string) => number;
    emit: (type: string) => void;
    eventNames: () => string[];
    getMexListeners: () => number;
    setMexListeners: (length: number) => void;
  }
  & ({
    Layout:
      | "list"
      | "stream"
      | "project-settings-billing-page"
      | "project-settings-basic-page"
      | "project-settings-members-page"
      | "settings-profile-page"
      | "settings-extensions-page"
      | "settings-delete-account-page";
    Page: {
      title: null;
      lines: null;
      id: null;
    };
  } | {
    Layout: "page";
    Page: {
      title: string;
      lines: ParsedLine[];
      id: string;
    };
  });

export type PageBrief = {
  exists: boolean;
  hasIcon?: boolean;
  id: string;
  title: string;
  titleLc: string;
  updated: number;
};

type TimeStamp = {
  addFormat: (format: string | (() => string)) => void;
  removeAllFormat: () => void;
};

type AddItemProps = {
  title: string | (() => string);
  image?: string;
  onClick: () => void;
};
type PageMenu = {
  addItem: (
    props: AddItemProps,
  ) => void;
  addSeparator: () => void;
  removeAllItems: () => void;
  menuName: string;
  reset: () => void;
  emitChange: () => void;
  menus: Map<
    string,
    {
      image: string | null;
      onClick?: () => void;
      items: (AddItemProps & { separator: boolean })[];
    }
  >;
};

export type eventName =
  | "lines:changed"
  | "page:changed"
  | "layout:changed"
  | "project:changed";
