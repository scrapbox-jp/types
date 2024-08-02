import type { Unit } from "./unit.ts";
import type { NodeWithoutIndent } from "./node.ts";

/** インデントがある行 */
export interface Indent {
  type: "indent";

  /** 構文解析結果 */
  unit: IndentUnit;

  /** 中に含まれるNodes */
  children: NodeWithoutIndent | NodeWithoutIndent[];
}

export interface IndentUnit extends Unit {
  /** インデントに使われている空白 */
  tag: string;
}
