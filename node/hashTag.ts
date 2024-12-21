import type { Unit } from "./unit.ts";

/** hashtag */
export interface HashTag {
  type: "hashTag";

  /** 構文解析結果 */
  unit: HashTagUnit;

  /** same as {@linkcode HashTagUnit.content} */
  children: `#${string}`;
}

export interface HashTagUnit extends Unit {
  /** page title */
  page: string;

  tag: "#";

  /** page title */
  get content(): string;

  /** raw text */
  get whole(): `#${string}`;
}
