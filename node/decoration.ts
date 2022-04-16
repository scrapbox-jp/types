import { Unit } from "./unit.ts";
import { NodeWithoutIndent } from "./node.ts";

/** 文字装飾記法 */
export interface Decoration {
  type: "deco";

  /** 構文解析結果 */
  unit: DecorationUnit;

  /** 中に含まれるNode */
  children: NodeWithoutIndent;
}

export interface DecorationUnit extends Unit {
  /** 文字装飾記号 */
  deco: string;

  /** 強調のレベル
   *
   * `*`が一つ増えるごとに1増える
   *
   * 一つもないときは`0`になる
   */
  strong: number;

  /** 斜体記号`/`を含むとき`true` */
  italic: boolean;

  /** 打ち消し記号`-`を含むとき`true` */
  strike: boolean;

  /** 下線記号`_`を含むとき`true` */
  underline: boolean;
}
