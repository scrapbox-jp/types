import type { ProjectId, UnixTime, UserId } from "../../base.ts";
import type { UserInfo } from "../pages/project/title.ts";

/** project information */
export interface Project {
  id: ProjectId;

  name: string;

  displayName: string;

  publicVisible: boolean;

  loginStrategies: string[];

  /** planの種類
   *
   * public projectの場合は`null`になる
   *
   * 古いprojectだとpropertyが生えていない
   */
  plan?: string | null;

  theme: string;

  gyazoTeamsName: string | null;

  translation: boolean;

  infobox: boolean;

  created: UnixTime;

  updated: UnixTime;

  isMember: boolean;

  trialing: boolean;
}

/** project information which isn't joined */
export interface NotMemberProject
  extends Omit<Project, "isMember" | "plan" | "trialing"> {
  image?: string;

  isMember: false;
}

/** project information which is joined */
export interface MemberProject extends Omit<Project, "isMember"> {
  isMember: true;

  image?: string;

  users: UserInfo[];

  admins: UserId[];

  owner: UserId;

  isUserPageExists: boolean;

  trialMaxPages: number;

  skipPayment: boolean;

  uploadFileTo: "gcs";

  uploadImaegTo: "gyazo" | "gcs";

  emailAddressPatterns: string[];

  projectScript: boolean;

  backuped: UnixTime | null;
}
