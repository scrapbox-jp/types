import type { PageId, ProjectId, StringLc, UnixTime, UserId } from "./base.ts";

export type ProjectUpdatesStreamEvent =
  | PageDeleteEvent
  | MemberJoinEvent
  | MemberAddEvent
  | AdminAddEvent
  | AdminDeleteEvent
  | OwnerSetEvent
  | InvitationResetEvent;

export interface ProjectEvent {
  id: string;
  pageId: PageId;
  userId: UserId;
  projectId: ProjectId;
  created: UnixTime;
  updated: UnixTime;
}

export interface PageDeleteEvent extends ProjectEvent {
  type: "page.delete";
  data: {
    titleLc: StringLc;
  };
}
export interface MemberJoinEvent extends ProjectEvent {
  type: "member.join";
}
export interface MemberAddEvent extends ProjectEvent {
  type: "member.add";
}
export interface InvitationResetEvent extends ProjectEvent {
  type: "invitation.reset";
}
export interface AdminAddEvent extends ProjectEvent {
  type: "admin.add";
  targetUserId: UserId;
}
export interface AdminDeleteEvent extends ProjectEvent {
  type: "admin.delete";
  targetUserId: UserId;
}
export interface OwnerSetEvent extends ProjectEvent {
  type: "owner.set";
  targetUserId: UserId;
}
