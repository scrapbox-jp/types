export interface Unit {
  /** 記法を取り除いたテキスト */
  content: string;

  /** 記法を取り除いていない生のテキスト */
  whole: string;
}

export interface BracketUnit extends Unit {
  /** 記法を取り除いていない生のテキスト */
  whole: `[${this["content"]}]`;
}

export interface DoubleBracketUnit extends Unit {
  /** 記法を取り除いていない生のテキスト */
  whole: `[[${this["content"]}]]`;
}
