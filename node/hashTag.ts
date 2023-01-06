import { NodeWithoutIndent } from "./node.ts";

/** hashtag */
export interface HashTag {
  type: "hashTag";

  /** 構文解析結果 */
  unit: HashTagUnit;

  /** 中に含まれるNodes */
  children: NodeWithoutIndent | NodeWithoutIndent[];
}

export interface HashTagUnit {
  /** page title */
  page: string;

  tag: "#";
}
