export type NodeWithoutIndent =
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
  | GoogleMap
  | Formula;

export type Node = NodeWithoutIndent | Indent;

export interface UnitBase {
  /** 記法を取り除いたテキスト */
  content: string;
  /** 記法を取り除いていない生のテキスト */
  whole: string;
}

/** plain text node */
export type PlainText = string;

/** インデントがある行 */
export interface Indent {
  type: "indent";
  /** 構文解析結果 */
  unit: UnitBase & {
    /** インデントに使われている空白 */
    tag: string;
  };
  /** 中に含まれるNodes */
  children: NodeWithoutIndent | NodeWithoutIndent[];
}

/** 空白記法 */
export interface Blank {
  type: "blank";
  /** 構文解析結果 */
  unit: UnitBase;
  /** the same as `unit.content` */
  children: PlainText;
}

/** リンク記法
 *
 * 以下の形式が対象
 *
 * - [aaa]
 * - [/xxx/aaa]
 * - [/xxx/]
 * - [/xxx]
 */
export interface Link {
  type: "link";
  /** 構文解析結果 */
  unit:
    & UnitBase
    & ({
      /** page title */
      page: string;
    } | {
      /** project name */
      project: string;
      /** page title */
      page: string;
    } | {
      /** project name */
      project: string;
    });
  /** the same as `unit.content` */
  children: PlainText;
}

/** 裸のURL */
export interface Url {
  type: "url";
  /** 構文解析結果 */
  unit: UnitBase;
  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされたファイルのときのみ生える
   */
  fileId?: string;
  /** the same as `unit.content` */
  children: PlainText;
}

/** 外部リンク記法 */
export interface UrlLink {
  type: "urlLink";
  /** 構文解析結果 */
  unit: UnitBase & {
    /** URL */
    link: string;
    /** タイトル */
    title?: string;
  };
  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされたファイルのときのみ生える
   */
  fileId?: string;
  /** the same as `unit.content` */
  children: PlainText;
}

/** 引用記法 */
export interface Quote {
  type: "quote";
  /** 構文解析結果 */
  unit: UnitBase & {
    /** 引用記号とそれに続く空白を含んだもの */
    tag: `>${string}`;
  };
  /** 中に含まれるNodes */
  children: NodeWithoutIndent | NodeWithoutIndent[];
}

/** コード記法 */
export interface Code {
  type: "code";
  /** 構文解析結果 */
  unit: UnitBase;
  /** the same as `unit.content` */
  children: PlainText;
}

/** アイコン記法 */
export interface Icon extends IconBase {
  type: "icon";
}

/** 強調アイコン記法 */
export interface StrongIcon extends IconBase {
  type: "strong-icon";
}

export interface IconBase {
  /** 構文解析結果 */
  unit: UnitBase & {
    /** アイコンがあるproject name
     *
     * 同じprojectのアイコンのときは省略される
     */
    project?: string;
    /** アイコンがあるページのタイトル */
    page: string;
    /** 繰り返し回数
     *
     * 最大1000
     */
    size: number;
  };
  /** the same as `unit.content` */
  children: PlainText;
}

/** 数式記法 */
export interface Formula {
  type: "deco-formula";
  /** 構文解析結果 */
  unit: UnitBase & {
    /** KaTeX text
     *
     * `content` から`$ `を外したもの
     */
    formula: string;
  };
  /** the same as `unit.content` */
  children: PlainText;
}

/** 強調記法 */
export interface Strong {
  type: "strong";
  /** 構文解析結果 */
  unit: UnitBase;
  /** 中に含まれるNode */
  children: NodeWithoutIndent;
}
/** 文字装飾記法 */
export interface Decoration {
  type: "deco";
  /** 構文解析結果 */
  unit: UnitBase & {
    /** 文字装飾記号 */
    deco: string;
    /** 強調のレベル
     *
     * `*`が一つ増えるごとに1増える
     *
     * 一つもないときは`0`になる
     */
    strong: number;
    /** 斜体記号`/`を含むとき`true` */
    italic: boolean;
    /** 打ち消し記号`-`を含むとき`true` */
    strike: boolean;
    /** 下線記号`_`を含むとき`true` */
    underline: boolean;
  };
  /** 中に含まれるNode */
  children: NodeWithoutIndent;
}

// 埋め込み系

/** 画像記法 */
export interface Image extends ImageBase {
  type: "image";
}

/** 強調画像記法 */
export interface StrongImage extends ImageBase {
  type: "strongImage";
}

export interface ImageBase {
  /** 構文解析結果 */
  unit: UnitBase;
  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた画像ファイルのときのみ生える
   */
  fileId?: string;
  /** the same as `unit.content` */
  children: PlainText;
}

/** Gyazoから引っ張ってきた画像の画像記法 */
export interface Gyazo extends GyazoBase {
  type: "gyazo";
}

/** Gyazoから引っ張ってきた画像の強調画像記法 */
export interface StrongGyazo extends GyazoBase {
  type: "strongGyazo";
}
export interface GyazoBase {
  /** 構文解析結果 */
  unit: UnitBase;
  /** the same as `unit.content` */
  children: PlainText;
}

/** リンク付き画像記法 */
export interface ImageLink extends ImageLinkBase {
  type: "imageLink";
}
/** リンク付き強調画像記法 */
export interface StrongImageLink extends ImageLinkBase {
  type: "strongImageLink";
}
export interface ImageLinkBase {
  /** 構文解析結果 */
  unit: UnitBase & {
    /** 画像のURL */
    image: string;
    /** 埋め込まれたリンクのURL */
    link: string;
  };
  /** the same as `unit.content` */
  children: PlainText;
}

/** Gyazoから引っ張ってきた画像のリンク付き画像記法 */
export interface GyazoLink extends GyazoLinkBase {
  type: "gyazoLink";
}
/** Gyazoから引っ張ってきた画像のリンク付き強調画像記法 */
export interface StrongGyazoLink extends GyazoLinkBase {
  type: "strongGyazoLink";
}
export interface GyazoLinkBase {
  /** 構文解析結果 */
  unit: UnitBase & {
    /** 画像のURL */
    gyazo: string;
    /** 埋め込まれたリンクのURL */
    link: string;
  };
  /** the same as `unit.content` */
  children: PlainText;
}

/** 動画埋め込み */
export interface Video {
  type: "video";
  /** 構文解析結果 */
  unit: UnitBase;
  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた動画ファイルのときのみ生える
   */
  fileId?: string;
  /** the same as `unit.content` */
  children: PlainText;
}
/** Youtube埋め込み */
export interface Youtube {
  type: "youtube";
  /** 構文解析結果 */
  unit:
    & UnitBase
    & {
      /** URL parameters */
      params: Record<string, string> & { t?: number };
    }
    & ({
      /** Youtube video ID */
      videoId: string;
    } | {
      /** Youtube playlist ID
       *
       * `/playlist?list=xxx`の形のURLのときのみ生える
       */
      listId: string;
    });
  /** the same as `unit.content` */
  children: PlainText;
}
/** Vimeo埋め込み */
export interface Vimeo {
  type: "vimeo";
  /** 構文解析結果 */
  unit: UnitBase & {
    /** vimeoのvideo id */
    videoId: string;
  };
  /** the same as `unit.content` */
  children: PlainText;
}

/** 音声埋め込み */
export interface Audio {
  type: "audio";
  /** 構文解析結果 */
  unit: UnitBase;
  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた音声ファイルのときのみ生える
   */
  fileId?: string;
  /** the same as `unit.content` */
  children: PlainText;
}
/** タイトル付き音声 */
export interface AudioLink {
  type: "audioLink";
  /** 構文解析結果 */
  unit: UnitBase & {
    /** 音声のURL */
    link: string;
    /** 音声のタイトル */
    title: string;
  };
  /** scrapboxにuploadされたfileのID
   *
   * このpropertyはscrapboxにuploadされた音声ファイルのときのみ生える
   */
  fileId?: string;
  /** the same as `unit.content` */
  children: PlainText;
}

/** Location記法 */
export interface GoogleMap {
  type: "location";
  /** 構文解析結果 */
  unit: UnitBase & {
    /** 緯度 */
    latitude: number;
    /** 経度 */
    longitude: number;
    /** 拡大レベル */
    zoom: number;
    /** 地点の名前 */
    title?: string;
  };
  /** the same as `unit.content` */
  children: PlainText;
}
