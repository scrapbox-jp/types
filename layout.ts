/** Scrapboxのページの種類を表す文字列から`"page"`を除いたもの
 *
 * | String | Description |
 * | ------ | ----------- |
 * | list | トップページと全文検索結果ページ |
 * | stream | streamページ |
 * | error-page | 何らかのエラーが発生したときに遷移するページ |
 * | new-project-page | 新規project作成ページ |
 * | invitation-page | projectに参加するときに出てくるページ |
 * | invitation-page | projectに参加するときに出てくるページ |
 * | settings-* | ユーザー設定ページ |
 * | project-settings-* | projectの設定ページ |
 */
export type PartialLayout =
  | "launch"
  | "error-page"
  | "billings-new"
  | "billings-info"
  | "login-by-email-page"
  | "login-by-email-confirm-page"
  | "login-by-easy-trial-page"
  | "list"
  | "stream"
  | "welcome-page"
  | "new-project-page"
  | "invitation-page"
  | "no-project-page"
  | "setup-profile"
  | "settings-profile-page"
  | "settings-extensions-page"
  | "settings-file-capacity-page"
  | "settings-delete-account-page"
  | "project-settings-basic-page"
  | "project-settings-pro-page"
  | "project-settings-theme-page"
  | "project-settings-notifications-page"
  | "project-settings-backup-page"
  | "project-settings-audit-page"
  | "project-settings-members-page"
  | "project-settings-page-data-page"
  | "project-settings-upload-page"
  | "project-settings-billing-page";

/** Scrapboxのページの種類を表す文字列 */
export type Layout = "page" | PartialLayout;
