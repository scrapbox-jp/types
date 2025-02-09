import type {
  ChangeLine,
  CharsCountChange,
  DeleteChange,
  DescriptionsChange,
  FilesChange,
  HelpFeelsChange,
  ImageChange,
  InfoboxDefinitionChange,
  InsertChange,
  LinesCountChange,
  PinChange,
} from "../change.ts";

/** Changes to push to the cosense server */
export type ChangeToPush =
  | InsertChange
  | UpdateChange
  | DeleteChange
  | LinksChange
  | ProjectLinksChange
  | IconsChange
  | DescriptionsChange
  | ImageChange
  | FilesChange
  | HelpFeelsChange
  | InfoboxDefinitionChange
  | TitleChange
  | LinesCountChange
  | CharsCountChange
  | PinChange;

export interface UpdateChange {
  _update: string;
  lines: Pick<ChangeLine, "text">;
  noTimestampUpdate?: unknown;
}

export interface LinksChange {
  links: string[];
}

export interface ProjectLinksChange {
  projectLinks: string[];
}

export interface IconsChange {
  icons: string[];
}

export interface TitleChange {
  title: string;
}

export interface DeletePageChange {
  deleted: true;
  merged?: true;
}
