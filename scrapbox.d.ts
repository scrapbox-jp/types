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

/** page information */
export interface Page {
  /** ページのid */ id: string;
  /** ページのタイトル */ title: string;
  /** ページのサムネイル画像 */ image: string;
  /** ページのサムネイル本文。最大5行 */ descriptions: string[];
  /** ピン留めされていたら1, されていなかったら0 */ pin: 0 | 1;
  /** ページの閲覧回数 */ views: number;
  /** おそらく被リンク数 */ linked: number;
  /** 最新の編集コミットid */ commitId: string;
  /** ページの作成日時 */ created: number;
  /** ページの最終更新日時 */ updated: number;
  /** Date last visitedに使われる最終アクセス日時 */ accessed: number;
  /** APIを叩いたuserの最終アクセス日時。おそらくこの値を元にテロメアの未読/既読の判別をしている */ lastAccessed:
    | number
    | null;
  /** Page historyの最終生成日時 */ snapshotCreated: number | null;
  /** 生成されたPage historyの数 */ snapshotCount: number;
  /** page rank */ pageRank: number;
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

/** summary of page information */
export interface PageSummary {
  id: string;
  title: string;
  image: string | null;
  descriptions: string[];
  user: { id: string };
  /** ピン留めされていたら1, されていなかったら0 */ pin: 0 | 1;
  views: number;
  linked: number;
  commitId: string;
  created: number;
  updated: number;
  accessed: number;
  snapshotCreated: number | null;
  pageRank: number;
}

/** the response type of https://scrpabox.io/api/pages/:projectname */
export interface ProjectResponse {
  /** data取得先のproject名 */ projectName: string;
  /** parameterに渡したskipと同じ */ skip: number;
  /** parameterに渡したlimitと同じ */ limit: number;
  /** projectの全ページ数 (中身のないページを除く) */ count: number;
  /** 取得できたページ情報 */ pages: PageSummary[];
}
