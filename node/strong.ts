import type { Unit } from "./unit.ts";
import type { NodeWithoutIndent } from "./node.ts";

/** 強調記法 */
export interface Strong {
  type: "strong";

  /** 構文解析結果 */
  unit: Unit;

  /** 中に含まれるNode */
  children: NodeWithoutIndent;
}
