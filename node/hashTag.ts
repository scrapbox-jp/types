import type { NodeWithoutIndent } from "./node.ts";
import type { Unit } from "./unit.ts";

/** hashtag */
export interface HashTag {
  type: "hashTag";

  /** 構文解析結果 */
  unit: HashTagUnit;

  /** 中に含まれるNodes */
  children: NodeWithoutIndent | NodeWithoutIndent[];
}

export interface HashTagUnit extends Unit {
  /** page title */
  page: string;

  tag: "#";
}
