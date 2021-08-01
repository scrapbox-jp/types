export type ParsedLine =
  & {
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
  }
  & ({
    title?: boolean;
  } | {
    codeBlock: CodeBlock;
  } | {
    tableBlock: TableBlock;
  } | {
    helpfeel: Helpfeel;
  } | {
    cli: Cli;
  } | {
    formulaLine?: true;
    nodes: NodeWithoutIndent[];
  } | {
    numberList?: { digit: number };
    formulaLine?: true;
    nodes: Node[];
  });

export type CodeBlock = {
  lang: string;
  filename?: string;
  indent: number;
  start: boolean;
  end: boolean;
};
export type TableBlock = {
  title: string;
  cells: string[];
  indent: number;
  start: boolean;
  end: boolean;
};
export type Helpfeel = {
  prefix: "?";
  entry: string;
};
export type Cli = {
  prefix: "$" | "%";
  command: string;
};

type NodeBase =
  | PlainText
  | Blank
  | Video
  | Vimeo
  | Decoration
  | Link
  | Quote
  | Code
  | Audio
  | AudioLink
  | Image
  | StrongImage
  | Gyazo
  | StrongGyazo
  | ImageLink
  | StrongImageLink
  | GyazoLink
  | StrongGyazoLink
  | Strong
  | Icon
  | StrongIcon
  | Url
  | UrlLink
  | Youtube
  | GoogleMap;
type NodeWithoutIndent = NodeBase | Formula;
export type Node = NodeWithoutIndent | Indent;
type UnitBase = {
  content: string;
  whole: string;
};
export type PlainText = string;
export type Blank = {
  type: "blank";
  unit: UnitBase;
  children: PlainText;
};
export type Video = {
  type: "video";
  unit: UnitBase;
  fileId: string | undefined;
  children: PlainText;
};
export type Vimeo = {
  type: "vimeo";
  unit: UnitBase & {
    videoId: string;
  };
  children: PlainText;
};
export type Decoration = {
  type: "deco";
  unit: UnitBase & {
    deco: string;
    strong: number;
    italic: boolean;
    strike: boolean;
    underline: boolean;
  };
  children: NodeWithoutIndent;
};
export type Link = {
  type: "link";
  unit:
    & UnitBase
    & ({
      page: string;
    } | {
      project: string;
      page: string;
    } | {
      project: string;
    });
  children: PlainText;
};
export type Quote = {
  type: "quote";
  unit: UnitBase & {
    tag: string;
  };
  children: NodeWithoutIndent;
};
export type Code = {
  type: "code";
  unit: UnitBase;
  children: PlainText;
};
export type Indent = {
  type: "indent";
  unit: UnitBase & {
    tag: string;
  };
  children: NodeWithoutIndent;
};
export type Audio = {
  type: "audio";
  unit: UnitBase;
  fileId: string | undefined;
  children: PlainText;
};
export type AudioLink = {
  type: "audioLink";
  unit: UnitBase & {
    link: string;
    title: string;
  };
  fileId: string | undefined;
  children: PlainText;
};
export type Image = ImageBase & { type: "image" };
export type StrongImage = ImageBase & { type: "strongImage" };
type ImageBase = {
  unit: UnitBase;
  fileId: string | undefined;
  children: PlainText;
};
export type Gyazo = GyazoBase & { type: "gyazo" };
export type StrongGyazo = GyazoBase & { type: "strongGyazo" };
type GyazoBase = {
  unit: UnitBase;
  children: PlainText;
};
export type ImageLink = ImageLinkBase & { type: "imageLink" };
export type StrongImageLink = ImageLinkBase & { type: "strongImageLink" };
type ImageLinkBase = {
  unit: UnitBase & {
    image: string;
    link: string;
  };
  children: PlainText;
};
export type GyazoLink = GyazoLinkBase & { type: "gyazoLink" };
export type StrongGyazoLink = GyazoLinkBase & { type: "strongGyazoLink" };
type GyazoLinkBase = {
  unit: UnitBase & {
    gyazo: string;
    link: string;
  };
  children: PlainText;
};
export type Icon = IconBase & { type: "icon" };
export type StrongIcon = IconBase & { type: "strong-icon" };
type IconBase = {
  unit: UnitBase & {
    project?: string;
    page: string;
    size: number;
  };
  children: PlainText;
};
export type Formula = {
  type: "deco-formula";
  unit: UnitBase & {
    formula: string;
  };
  children: PlainText;
};
export type Strong = {
  type: "strong";
  unit: UnitBase;
  children: NodeWithoutIndent;
};
export type Url = {
  type: "url";
  unit: UnitBase;
  fileId: string | undefined;
  children: PlainText;
};
export type UrlLink = {
  type: "urlLink";
  unit: UnitBase & {
    link: string;
    title?: string;
  };
  fileId: string | undefined;
  children: PlainText;
};
export type Youtube = {
  type: "youtube";
  unit:
    & UnitBase
    & {
      params: Record<string, string> & { t?: number };
    }
    & ({
      videoId?: string;
    } | {
      listId?: string;
    });
  children: PlainText;
};
export type GoogleMap = {
  type: "location";
  unit: UnitBase & {
    latitude: number;
    longitude: number;
    zoom: number;
    title?: string;
  };
  children: PlainText;
};
