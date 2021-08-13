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

export type CodeBlock = {
  lang: string;
  filename?: string;
  indent: number;
  start: boolean;
  end: boolean;
};
export type TableBlock = {
  title: string;
  cells: string[];
  indent: number;
  start: boolean;
  end: boolean;
};
export type Helpfeel = {
  prefix: "?";
  entry: string;
};
export type Cli = {
  prefix: "$" | "%";
  command: string;
};
