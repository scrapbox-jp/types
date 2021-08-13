/** scrapboxの行のメタデータ */
export interface Line {
  /** 行のid */ id: string;
  /** 行のテキスト */ text: string;
  /** 一番最後に行を編集した人のid */ userId: string;
  /** 行の作成日時 */ created: number;
  /** 行の最終更新日時 */ updated: number;
}
