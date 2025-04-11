import type { CommitId, PageId, ProjectId, UserId } from "../base.ts";
import type {
  ChangeToPush,
  DeletePageChange,
  IconsChange,
  LinksChange,
  TitleChange,
  UpdateChange,
} from "./change.ts";
import type {
  DeleteChange,
  DescriptionsChange,
  ImageChange,
  InsertChange,
} from "../change.ts";
import type { User } from "../api/pages/project/title.ts";
import type { ProjectUpdatesStreamEvent } from "../stream-event.ts";

export interface EmitEventMap {
  "socket.io-request": (
    req: { method: "commit"; data: PageCommit } | {
      method: "room:join";
      data: JoinRoomRequest;
    },
    callback: (
      res:
        | { data: PageCommitResponse | JoinRoomResponse }
        | { error: { name: string; message?: string } },
    ) => void,
  ) => void;
  "page-leave": (req: { projectId: ProjectId, pageId: PageId }) => void;
  cursor: (req: Omit<MoveCursorData, "socketId">) => void;
}

export interface PageCommit {
  kind: "page";
  parentId: CommitId;
  projectId: ProjectId;
  pageId: PageId;
  userId: UserId;
  changes: ChangeToPush[] | [DeletePageChange];
  cursor?: null;
  freeze: true;
}

export interface PageCommitResponse {
  commitId: CommitId;
}

export type JoinRoomRequest =
  | JoinPageRoomRequest
  | JoinProjectRoomRequest
  | JoinStreamRoomRequest;

export interface JoinProjectRoomRequest {
  pageId: null;
  projectId: ProjectId;
  projectUpdatesStream: false;
}

export interface JoinPageRoomRequest {
  pageId: PageId;
  projectId: ProjectId;
  projectUpdatesStream: false;
}

export interface JoinStreamRoomRequest {
  pageId: null;
  projectId: ProjectId;
  projectUpdatesStream: true;
}

export interface JoinRoomResponse {
  success: true;
  pageId: PageId | null;
  projectId: ProjectId;
}

export interface MoveCursorData {
  user: Omit<User, "photo">;
  pageId: PageId;
  position: {
    line: number;
    char: number;
  };
  visible: boolean;
  socketId: string;
}

export interface ListenEventMap {
  "projectUpdatesStream:commit": (event: ProjectUpdatesStreamCommit) => void;
  "projectUpdatesStream:event": (event: ProjectUpdatesStreamEvent) => void;
  commit: (event: CommitNotification) => void;
  cursor: (event: MoveCursorData) => void;
  "quick-search:commit": (event: QuickSearchCommit) => void;
  "quick-search:replace-link": QuickSearchReplaceLink;
  "infobox:updating": boolean;
  "infobox:reload": (event: { updating: boolean }) => void;
  "literal-database:reload": void;
}

export interface ProjectUpdatesStreamCommit {
  kind: "page";
  id: CommitId;
  parentId: CommitId;
  projectId: ProjectId;
  pageId: PageId;
  userId: UserId;
  changes:
  | (
    | InsertChange
    | UpdateChange
    | DeleteChange
    | TitleChange
    | LinksChange
    | IconsChange
  )[]
  | [DeletePageChange];
  cursor: null;
  freeze: true;
}

export interface CommitNotification extends PageCommit {
  id: string;
}

export interface QuickSearchCommit extends Omit<CommitNotification, "changes"> {
  changes:
  | (TitleChange | LinksChange | DescriptionsChange | ImageChange)[]
  | [DeletePageChange];
}

export interface QuickSearchReplaceLink {
  from: string;
  to: string;
}
