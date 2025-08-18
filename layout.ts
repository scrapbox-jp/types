/** string representing Scrapbox page types excluding `"page"`
 *
 * | String | Description |
 * | ------ | ----------- |
 * | list | top page and full-text search results page |
 * | stream | stream page |
 * | error-page | page to navigate to when some error occurs |
 * | new-project-page | new project creation page |
 * | invitation-page | page that appears when joining a project |
 * | invitation-page | page that appears when joining a project |
 * | settings-* | user settings page |
 * | project-settings-* | project settings page |
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

/** string representing Scrapbox page types */
export type Layout = "page" | PartialLayout;
