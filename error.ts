/** Scrapbox REST APIが返すエラーの型
 *
 * `name`はないことがある
 */
export interface ErrorLike {
  /** error name */
  name: string;
  /** error message */
  message: string;
}

/** 参加していないprivate projectに対してAPIを叩いたときに発生するエラー */
export interface NotMemberError extends ErrorLike {
  /** error name */
  name: "NotMemberError";
}

/** 指定したprojectやpageが見つからないときに発生するエラー */
export interface NotFoundError extends ErrorLike {
  /** error name */
  name: "NotFoundError";
}

/** owner/admin権限が不足しているときに発生するエラー */
export interface NotPrivilegeError extends ErrorLike {
  /** error name */
  name: "NotPrivilegeError";
}

/** Loginが必要なAPIをloginせずに叩いたときに発生するエラー */
export interface NotLoggedInError extends ErrorLike {
  /** error name */
  name: "NotLoggedInError";

  /** 詳細情報 */
  details: {
    /** 取得しようとしたprojectの名前 */
    project: string;

    /** 使用できるログイン方法 */
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

/** CSRF tokenが不正なときに発生するエラー */
export interface SessionError extends ErrorLike {
  /** error name */
  name: "SessionError";
}

/** 不正なURLを渡したときに返ってくるエラー
 *
 * 実際のresponseではmessageしか返ってこないことに注意
 */
export interface InvalidURLError extends ErrorLike {
  /** error name */
  name: "InvalidURLError";
}

/** URL先ページから正常な応答が返ってこなかったときのエラー */
export interface BadRequestError extends ErrorLike {
  /** error name */
  name: "BadRequestError";
}

/** 検索文字列を渡さないと出てくるエラー
 *
 * 実際のresponseではmessageしか返ってこないことに注意
 */
export interface NoQueryError extends ErrorLike {
  /** error name */
  name: "NoQueryError";
}
/** 不正なfollowingIdを渡されたときに発生するエラー
 *
 * 実際のresponseではmessageしか返ってこないことに注意
 */
export interface InvalidFollowingIdError extends ErrorLike {
  name: "InvalidFollowingIdError";
}

/** 容量を使い切ったときに発生するerror
 *
 * 実際のresponseではmessageしか返ってこないことに注意
 */
export interface FileCapacityError extends ErrorLike {
  name: "FileCapacityError";
}

/** Google Cloud Storage XML APIのerror
 *
 * `message`には[この形式](https://cloud.google.com/storage/docs/xml-api/reference-status#http-status-and-error-codes)のXMLが入る
 */
export interface GCSError extends ErrorLike {
  name: "GCSError";
}
