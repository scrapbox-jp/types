export interface ErrorLike {
  name: string;
  message: string;
}
export interface NotMemberError extends ErrorLike {
  name: "NotMemberError";
}

export interface NotFoundError extends ErrorLike {
  name: "NotFoundError";
}
