import type { NodeInDecoration } from "./decoration.ts";
import type { DoubleBracketUnit } from "./unit.ts";

/** 強調記法 */
export interface Strong {
  type: "strong";

  /** 構文解析結果 */
  unit: DoubleBracketUnit;

  /** 中に含まれるNode */
  children: NodeInDecoration | NodeInDecoration[];
}
