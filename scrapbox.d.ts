export type Layout =
  | "list"
  | "page"
  | "stream"
  | "project-settings-billing-page"
  | "project-settings-basic-page"
  | "project-settings-members-page"
  | "settings-profile-page"
  | "settings-extensions-page"
  | "settings-delete-account-page";
export type Scrapbox =
  & {
    Project: {
      name: string;
      pages: PageBrief[];
    };
    TimeStamp: TimeStamp;
    PopupMenu?: {
      addButton: (
        props: {
          title: string | ((selectedText: string) => string);
          onClick: (selectedText: string) => string | undefined;
        },
      ) => void;
    };
    addListener: (type: string, listener: () => void) => void;
    on: (type: string, listener: () => void) => void;
    removeListener: (type: string, listener: () => void) => void;
    off: (type: string, listener: () => void) => void;
    removeAllListeners: (type?: string) => void;
    once: (type: string, listener: () => void) => void;
    prependListener: (type: string, listener: () => void) => void;
    prependOnceListener: (type: string, listener: () => void) => void;
    listeners: (type: string) => (() => void)[];
    rawListeners: (type: string) => (() => void)[];
    listenerCount: (type: string) => number;
    emit: (type: string) => void;
    eventNames: () => string[];
    getMexListeners: () => number;
    setMexListeners: (length: number) => void;
  }
  & ({
    Layout:
      | "list"
      | "stream"
      | "project-settings-billing-page"
      | "project-settings-basic-page"
      | "project-settings-members-page"
      | "settings-profile-page"
      | "settings-extensions-page"
      | "settings-delete-account-page";
    Page: {
      title: null;
      lines: null;
      id: null;
    };
  } | {
    Layout: "page";
    Page: {
      title: string;
      lines: ParsedLine[];
      id: string;
    };
  });

export type PageBrief = {
  exists: boolean;
  hasIcon?: boolean;
  id: string;
  title: string;
  titleLc: string;
  updated: number;
};

export type ParsedLine = {
  text: string;
  id: string;
  userId: string;
  updated: number;
  created: number;
  section: {
    number: number;
    start: boolean;
    end: boolean;
  };
  title?: boolean;
};

type TimeStamp = {
  addFormat: (format: string | (() => string)) => void;
  removeAllFormat: () => void;
};

export type eventName =
  | "lines:changed"
  | "page:changed"
  | "layout:changed"
  | "project:changed";
