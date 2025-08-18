export interface Unit {
  /** text with notation removed */
  content: string;

  /** raw text without notation removed */
  whole: string;
}

export interface BracketUnit extends Unit {
  /** raw text without notation removed */
  whole: `[${this["content"]}]`;
}

export interface DoubleBracketUnit extends Unit {
  /** raw text without notation removed */
  whole: `[[${this["content"]}]]`;
}
