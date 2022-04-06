/** Scrapbox REST APIが返すエラーの型
 *
 * `name`はないことがある
 */
export interface ErrorLike {
  /** error name */ name: string;
  /** error message */ message: string;
}

/** 参加していないprivate projectに対してAPIを叩いたときに発生するエラー */
export interface NotMemberError extends ErrorLike {
  name: "NotMemberError";
}

/** 指定したprojectやpageが見つからないときに発生するエラー */
export interface NotFoundError extends ErrorLike {
  name: "NotFoundError";
}

/** owner/admin権限が不足しているときに発生するエラー */
export interface NotPrivilegeError extends ErrorLike {
  name: "NotPrivilegeError";
}

/** Loginが必要なAPIをloginせずに叩いたときに発生するエラー */
export interface NotLoggedInError extends ErrorLike {
  name: "NotLoggedInError";
  /** 詳細情報 */
  details: {
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
  name: "SessionError";
}

/** 不正なURLを渡したときに返ってくるエラー
 *
 * 実際のresponseではmessageしか返ってこないことに注意
 */
export interface InvalidURLError extends ErrorLike {
  name: "InvalidURLError";
}

/** URL先ページから正常な応答が返ってこなかったときのエラー */
export interface BadRequestError extends ErrorLike {
  name: "BadRequestError";
}

/** 検索文字列を渡さないと出てくるエラー
 *
 * 実際のresponseではmessageしか返ってこないことに注意
 */
export interface NoQueryError extends ErrorLike {
  name: "NoQueryError";
}
