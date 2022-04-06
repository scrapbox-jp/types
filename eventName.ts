/** built-in UserScript events
 *
 * | Event | Description |
 * | ------ | ----------- |
 * | lines:changed | 今開いているページの文章が変更された |
 * | page:changed | 別のページに遷移した |
 * | layout:changed | 別の種類のページに遷移した |
 * | project:changed | 別のprojectに遷移した |
 */
export type eventName =
  | "lines:changed"
  | "page:changed"
  | "layout:changed"
  | "project:changed";
