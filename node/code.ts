import type { Unit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** コード記法 */
export interface Code {
  type: "code";

  /** 構文解析結果 */
  unit: CodeUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface CodeUnit extends Unit {
  content: string;
  whole: `\`${string}\``;
}
