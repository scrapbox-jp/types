import type { Unit } from "./unit.ts";
import type { NodeWithoutIndent } from "./node.ts";

/** line with indentation */
export interface Indent {
  type: "indent";

  /** parsing result */
  unit: IndentUnit;

  /** nodes contained inside */
  children: NodeWithoutIndent | NodeWithoutIndent[];
}

export interface IndentUnit extends Unit {
  /** whitespace used for indentation */
  tag: string;
}
