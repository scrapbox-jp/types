/** error types returned by Scrapbox REST API
 *
 * `name` may not exist
 */
export interface ErrorLike {
  /** error name */
  name: string;
  /** error message */
  message: string;
}

/** error that occurs when calling API on a private project you haven't joined */
export interface NotMemberError extends ErrorLike {
  /** error name */
  name: "NotMemberError";
}

/** error that occurs when the specified project or page is not found */
export interface NotFoundError extends ErrorLike {
  /** error name */
  name: "NotFoundError";
}

/** error that occurs when owner/admin privileges are insufficient */
export interface NotPrivilegeError extends ErrorLike {
  /** error name */
  name: "NotPrivilegeError";
}

/** error that occurs when calling an API that requires login without being logged in */
export interface NotLoggedInError extends ErrorLike {
  /** error name */
  name: "NotLoggedInError";

  /** detailed information */
  details: {
    /** name of the project you tried to access */
    project: string;

    /** available login methods */
    loginStrategies: (
      | "google"
      | "github"
      | "microsoft"
      | "gyazo"
      | "email"
      | "saml"
      | "easy-trial"
    )[];
  };
}

/** error that occurs when CSRF token is invalid */
export interface SessionError extends ErrorLike {
  /** error name */
  name: "SessionError";
}

/** error returned when passing an invalid URL
 *
 * note that in actual response, only message is returned
 */
export interface InvalidURLError extends ErrorLike {
  /** error name */
  name: "InvalidURLError";
}

/** error when normal response is not returned from the URL destination page */
export interface BadRequestError extends ErrorLike {
  /** error name */
  name: "BadRequestError";
}

/** error that appears when you don't pass a search string
 *
 * note that in actual response, only message is returned
 */
export interface NoQueryError extends ErrorLike {
  /** error name */
  name: "NoQueryError";
}
/** error that occurs when an invalid followingId is passed
 *
 * note that in actual response, only message is returned
 */
export interface InvalidFollowingIdError extends ErrorLike {
  name: "InvalidFollowingIdError";
}

/** error that occurs when capacity is exhausted
 *
 * note that in actual response, only message is returned
 */
export interface FileCapacityError extends ErrorLike {
  name: "FileCapacityError";
}

/** Google Cloud Storage XML API error
 *
 * `message` contains XML in [this format](https://cloud.google.com/storage/docs/xml-api/reference-status#http-status-and-error-codes)
 */
export interface GCSError extends ErrorLike {
  name: "GCSError";
}
