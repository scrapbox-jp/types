import type { UnixTime, UserId } from "../../../base.ts";

/** the response type of /api/projects/:projectname/users */
export interface ProjectUsersResponse {
  /** current members */
  users: ProjectUser[];
  /** former members' records */
  memberSnapshots?: MemberSnapshot[];
  /** service accounts */
  serviceAccounts?: ServiceAccount[];
  /** deleted service account records */
  serviceAccountSnapshots?: ServiceAccount[];
}

export interface ProjectUser {
  id: UserId;
  name?: string;
  displayName?: string;
  photo?: string;
  email?: string;
  provider?: string;
  created?: UnixTime;
  updated?: UnixTime;
}

export interface MemberSnapshot {
  id: string;
  reason: "deleted" | "left";
  created: UnixTime;
  updated: UnixTime;
  data: {
    id: UserId;
    name?: string;
    displayName?: string;
    email?: string;
  };
}

export interface ServiceAccount {
  id: string;
  usage?: string;
}
