import type { Node, NodeWithoutIndent } from "./node/node.ts";
import type { BaseLine } from "./base.ts";

export type Line =
  & BaseLine
  & {
    section: {
      /** section number */
      number: number;

      /** section開始行なら`true` */
      start: boolean;

      /** section終了行なら`true` */
      end: boolean;
    };
  }
  & ({
    /** タイトル行だったときのみ生える */
    title?: true;
  } | {
    codeBlock: CodeBlock;
  } | {
    tableBlock: TableBlock;
  } | {
    helpfeel: Helpfeel;
  } | {
    cli: Cli;
  } | {
    /** 番号付きリストのときのみ生える */
    numberList?: {
      /** 番号の長さ */
      digit: number;
    };

    /** 数式を含む行のときのみ生える */
    formulaLine?: true;

    /** 画像を並べているときのみ生える */
    numberOfImages?: number;

    /** 引用文のときのみ生える */
    quoteLine?: true;

    /** 中に含まれるnodes */
    get nodes(): Node | NodeWithoutIndent[];
  });

/**  the type which represents a line in a block */
export interface Block {
  /** the number of indents */
  indent: number;

  /** is the start line of this block */
  start: boolean;

  /** is the end line of this block */
  end: boolean;
}

/**  the type which represents a line in a code block */
export interface CodeBlock extends Block {
  /** the language of the code block */
  lang: string;

  /** the file name of the code block */
  filename: string;

  hasCursor: boolean;
}

/**  the type which represents a line in a table block */
export interface TableBlock extends Block {
  /** the title of the table block */
  title: string;

  /** cells included in the present line */
  cells: string[];
}

/** Helpfeel記法 */
export interface Helpfeel {
  prefix: "?";

  /** Helpfeel本文 */
  entry: string;
}

/** Command Line記法 */
export interface Cli {
  prefix: "$" | "%";

  /** Command Line本文 */
  command: string;
}
