import type { UserInfo } from "../pages/project/title.ts";

/** the response type of https://scrapbox.io/api/users/me */
export type UserResponse = GuestUser | MemberUser;

export interface GuestUser {
  isGuest: true;

  csrfToken: string;
}

export interface MemberUser extends UserInfo {
  isGuest: false;

  csrfToken: string;

  config: {
    userScript: boolean;

    emacsBinding: boolean;
  };
}
