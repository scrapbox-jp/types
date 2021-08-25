import { Node, NodeWithoutIndent } from "./nodes.ts";
import { Line } from "../base.ts";

export type ParsedLine =
  & Line
  & {
    section: {
      number: number;
      start: boolean;
      end: boolean;
    };
  }
  & ({
    title?: boolean;
  } | {
    codeBlock: CodeBlock;
  } | {
    tableBlock: TableBlock;
  } | {
    helpfeel: Helpfeel;
  } | {
    cli: Cli;
  } | {
    formulaLine?: true;
    nodes: NodeWithoutIndent[];
  } | {
    numberList?: { digit: number };
    formulaLine?: true;
    nodes: Node[];
  });

/**  the type which represents a line in a block */
export interface Block {
  /** the number of indents */ indent: number;
  /** is the start line of this block */ start: boolean;
  /** is the end line of this block */ end: boolean;
}

/**  the type which represents a line in a code block */
export interface CodeBlock extends Block {
  /** the language of the code block */ lang: string;
  /** the file name of the code block */ filename?: string;
}

/**  the type which represents a line in a table block */
export interface TableBlock extends Block {
  /** the title of the table block */ title: string;
  /** cells included in the present line */ cells: string[];
}
export type Helpfeel = {
  prefix: "?";
  entry: string;
};
export type Cli = {
  prefix: "$" | "%";
  command: string;
};
