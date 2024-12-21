import { assertType, type IsExact } from "@std/testing/types";
import type { Line } from "./blocks.ts";

// scrapbox.Page.lines の型定義が正しいか確認する
// サンプルは https://scrapbox.io/villagepump/記法サンプル より拝借した
// 適宜サンプルを更新し、最新の状態にあわせる
const lines: Line[] = [{
  "id": "61dd268d1d99c4001de09576",
  "text": "記法サンプル",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883282,
  "updated": 1641883760,
  "title": true,
  "section": { "number": 0, "start": true, "end": false },
}, {
  "id": "61dd26977838e300002ff243",
  "text": "[Settings]で設定した[UserCSS]の表示テスト用ページ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883288,
  "updated": 1648441277,
  "section": { "number": 0, "start": false, "end": false },
  "nodes": [
    {
      "type": "link",
      "unit": {
        "page": "Settings",
        "content": "Settings",
        "whole": "[Settings]",
      },
      "children": "Settings",
    },
    "で設定した",
    {
      "type": "link",
      "unit": { "page": "UserCSS", "content": "UserCSS", "whole": "[UserCSS]" },
      "children": "UserCSS",
    },
    "の表示テスト用ページ",
  ],
}, {
  "id": "61fe3c9f7838e300001888e9",
  "text": "",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644051614,
  "updated": 1644051614,
  "section": { "number": 0, "start": false, "end": false },
  "nodes": "",
}, {
  "id": "624de3331280f0000050bec0",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271602,
  "updated": 1649271602,
  "section": { "number": 0, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "624de3341280f0000050bec1",
  "text": "[** でかい文字]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** でかい文字]",
      "content": "でかい文字",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "でかい文字",
  },
}, {
  "id": "624de3341280f0000050bec2",
  "text": "[* 1]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[* 1]",
      "content": "1",
      "deco": "*",
      "strong": 1,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "1",
  },
}, {
  "id": "624de3341280f0000050bec3",
  "text": "[** 2]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** 2]",
      "content": "2",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "2",
  },
}, {
  "id": "624de3341280f0000050bec4",
  "text": "[*** 3]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[*** 3]",
      "content": "3",
      "deco": "***",
      "strong": 3,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "3",
  },
}, {
  "id": "624de3341280f0000050bec5",
  "text": "[**** 4]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[**** 4]",
      "content": "4",
      "deco": "****",
      "strong": 4,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "4",
  },
}, {
  "id": "624de3341280f0000050bec6",
  "text": "[***** 5]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[***** 5]",
      "content": "5",
      "deco": "*****",
      "strong": 5,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "5",
  },
}, {
  "id": "624de3341280f0000050bec7",
  "text": "[****** 6]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[****** 6]",
      "content": "6",
      "deco": "******",
      "strong": 6,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "6",
  },
}, {
  "id": "624de3341280f0000050bec8",
  "text": "[******* 7]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[******* 7]",
      "content": "7",
      "deco": "*******",
      "strong": 7,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "7",
  },
}, {
  "id": "624de3341280f0000050bec9",
  "text": "[******** 8]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[******** 8]",
      "content": "8",
      "deco": "********",
      "strong": 8,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "8",
  },
}, {
  "id": "624de3341280f0000050beca",
  "text": "[********* 9]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[********* 9]",
      "content": "9",
      "deco": "*********",
      "strong": 9,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "9",
  },
}, {
  "id": "624de3341280f0000050becb",
  "text": "[********** 10]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271603,
  "updated": 1649271603,
  "section": { "number": 1, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[********** 10]",
      "content": "10",
      "deco": "**********",
      "strong": 10,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "10",
  },
}, {
  "id": "624de3321280f0000050bebf",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271602,
  "updated": 1649271602,
  "section": { "number": 1, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61fe3c8e7838e300001888e8",
  "text": "[** リンク]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644051597,
  "updated": 1644051616,
  "section": { "number": 2, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** リンク]",
      "content": "リンク",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "リンク",
  },
}, {
  "id": "61dd289e7838e30000dc9caf",
  "text": "#ハッシュタグ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 2, "start": false, "end": false },
  "nodes": {
    "type": "hashTag",
    "unit": {
      "page": "ハッシュタグ",
      "tag": "#",
      "content": "ハッシュタグ",
      "whole": "#ハッシュタグ",
    },
    "children": "#ハッシュタグ",
  },
}, {
  "id": "61dd289e7838e30000dc9cb0",
  "text": "[リンク]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 2, "start": false, "end": false },
  "nodes": {
    "type": "link",
    "unit": { "page": "リンク", "content": "リンク", "whole": "[リンク]" },
    "children": "リンク",
  },
}, {
  "id": "61dd289e7838e30000dc9cb1",
  "text": "[###存在しないリンク###]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 2, "start": false, "end": false },
  "nodes": {
    "type": "link",
    "unit": {
      "page": "###存在しないリンク###",
      "content": "###存在しないリンク###",
      "whole": "[###存在しないリンク###]",
    },
    "children": "###存在しないリンク###",
  },
}, {
  "id": "61dd289e7838e30000dc9cb2",
  "text": "[/help-jp/ブラケティング] （外部プロジェクトリンク）",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 2, "start": false, "end": false },
  "nodes": [{
    "type": "link",
    "unit": {
      "project": "help-jp",
      "page": "ブラケティング",
      "content": "/help-jp/ブラケティング",
      "whole": "[/help-jp/ブラケティング]",
    },
    "children": "/help-jp/ブラケティング",
  }, " （外部プロジェクトリンク）"],
}, {
  "id": "61dd289e7838e30000dc9cb3",
  "text":
    "[外部プロジェクトリンク(scrapbox.io) https://scrapbox.io/help-jp/ブラケティング]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641884145,
  "section": { "number": 2, "start": false, "end": false },
  "nodes": {
    "type": "urlLink",
    "unit": {
      "link": "https://scrapbox.io/help-jp/ブラケティング",
      "space": " ",
      "title": "外部プロジェクトリンク(scrapbox.io)",
      "content":
        "外部プロジェクトリンク(scrapbox.io) https://scrapbox.io/help-jp/ブラケティング",
      "whole":
        "[外部プロジェクトリンク(scrapbox.io) https://scrapbox.io/help-jp/ブラケティング]",
    },
    "children":
      "外部プロジェクトリンク(scrapbox.io) https://scrapbox.io/help-jp/ブラケティング",
  },
}, {
  "id": "676646f11280f000000d134a",
  "text":
    "生のURLもリンクとして認識される：https://example.com 空白を末尾に入れれば、それ以降の文字列をURLから切り離せる",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767911,
  "updated": 1734767912,
  "section": { "number": 2, "start": false, "end": false },
  "nodes": ["生のURLもリンクとして認識される：", {
    "type": "url",
    "unit": {
      "content": "https://example.com",
      "whole": "https://example.com",
    },
    "children": "https://example.com",
  }, " 空白を末尾に入れれば、それ以降の文字列をURLから切り離せる"],
}, {
  "id": "676647221280f000000d134b",
  "text":
    "`[]`で囲めば、[https://example.com]のように空白を入れずに文章をつなげられる",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767912,
  "updated": 1734767912,
  "section": { "number": 2, "start": false, "end": false },
  "nodes": [
    {
      "type": "code",
      "unit": { "whole": "`[]`", "content": "[]" },
      "children": "[]",
    },
    "で囲めば、",
    {
      "type": "urlLink",
      "unit": {
        "link": "https://example.com",
        "content": "https://example.com",
        "whole": "[https://example.com]",
      },
      "children": "https://example.com",
    },
    "のように空白を入れずに文章をつなげられる",
  ],
}, {
  "id": "61fe3cbf7838e300001888ec",
  "text": "",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644051646,
  "updated": 1644051646,
  "section": { "number": 2, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61fe3ca37838e300001888ea",
  "text": "[* [外部リンクを区別するUserCSS]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644051618,
  "updated": 1644051640,
  "section": { "number": 3, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[* [外部リンクを区別するUserCSS]]",
      "content": "[外部リンクを区別するUserCSS]",
      "deco": "*",
      "strong": 1,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "外部リンクを区別するUserCSS",
        "content": "外部リンクを区別するUserCSS",
        "whole": "[外部リンクを区別するUserCSS]",
      },
      "children": "外部リンクを区別するUserCSS",
    },
  },
}, {
  "id": "61dd29a77838e30000dc9cc9",
  "text": " [外部サイトリンク https://example.com/]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884071,
  "updated": 1644051633,
  "section": { "number": 3, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [外部サイトリンク https://example.com/]",
      "tag": " ",
      "content": "[外部サイトリンク https://example.com/]",
    },
    "children": {
      "type": "urlLink",
      "unit": {
        "link": "https://example.com/",
        "space": " ",
        "title": "外部サイトリンク",
        "content": "外部サイトリンク https://example.com/",
        "whole": "[外部サイトリンク https://example.com/]",
      },
      "children": "外部サイトリンク https://example.com/",
    },
  },
}, {
  "id": "61dd6fcd1280f00000ab09cd",
  "text":
    " [https://twitter.com/shokai/status/1480481768247549954 Twitterのリンク]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641902029,
  "updated": 1644051633,
  "section": { "number": 3, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " [https://twitter.com/shokai/status/1480481768247549954 Twitterのリンク]",
      "tag": " ",
      "content":
        "[https://twitter.com/shokai/status/1480481768247549954 Twitterのリンク]",
    },
    "children": {
      "type": "urlLink",
      "unit": {
        "link": "https://twitter.com/shokai/status/1480481768247549954",
        "space": " ",
        "title": "Twitterのリンク",
        "content":
          "https://twitter.com/shokai/status/1480481768247549954 Twitterのリンク",
        "whole":
          "[https://twitter.com/shokai/status/1480481768247549954 Twitterのリンク]",
      },
      "children":
        "https://twitter.com/shokai/status/1480481768247549954 Twitterのリンク",
    },
  },
}, {
  "id": "62012b2a7838e30000b54cf8",
  "text": "[* [特定のリンクにアイコンをつけるUserCSS]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644243754,
  "updated": 1644243759,
  "section": { "number": 3, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[* [特定のリンクにアイコンをつけるUserCSS]]",
      "content": "[特定のリンクにアイコンをつけるUserCSS]",
      "deco": "*",
      "strong": 1,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "特定のリンクにアイコンをつけるUserCSS",
        "content": "特定のリンクにアイコンをつけるUserCSS",
        "whole": "[特定のリンクにアイコンをつけるUserCSS]",
      },
      "children": "特定のリンクにアイコンをつけるUserCSS",
    },
  },
}, {
  "id": "61fd72957838e3000076ff1e",
  "text": " [https://github.com/ GitHubのリンク]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1643999893,
  "updated": 1644051633,
  "section": { "number": 3, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [https://github.com/ GitHubのリンク]",
      "tag": " ",
      "content": "[https://github.com/ GitHubのリンク]",
    },
    "children": {
      "type": "urlLink",
      "unit": {
        "link": "https://github.com/",
        "space": " ",
        "title": "GitHubのリンク",
        "content": "https://github.com/ GitHubのリンク",
        "whole": "[https://github.com/ GitHubのリンク]",
      },
      "children": "https://github.com/ GitHubのリンク",
    },
  },
}, {
  "id": "61fd72c97838e3000076ff1f",
  "text": " [https://ja.wikipedia.org ウィキペディアのリンク]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1643999944,
  "updated": 1644051633,
  "section": { "number": 3, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [https://ja.wikipedia.org ウィキペディアのリンク]",
      "tag": " ",
      "content": "[https://ja.wikipedia.org ウィキペディアのリンク]",
    },
    "children": {
      "type": "urlLink",
      "unit": {
        "link": "https://ja.wikipedia.org",
        "space": " ",
        "title": "ウィキペディアのリンク",
        "content": "https://ja.wikipedia.org ウィキペディアのリンク",
        "whole": "[https://ja.wikipedia.org ウィキペディアのリンク]",
      },
      "children": "https://ja.wikipedia.org ウィキペディアのリンク",
    },
  },
}, {
  "id": "620129c37838e30000b54cf7",
  "text":
    " [https://www.mhlw.go.jp/content/10900000/000622211.pdf PDFへのリンク]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644243396,
  "updated": 1644243406,
  "section": { "number": 3, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " [https://www.mhlw.go.jp/content/10900000/000622211.pdf PDFへのリンク]",
      "tag": " ",
      "content":
        "[https://www.mhlw.go.jp/content/10900000/000622211.pdf PDFへのリンク]",
    },
    "children": {
      "type": "urlLink",
      "unit": {
        "link": "https://www.mhlw.go.jp/content/10900000/000622211.pdf",
        "space": " ",
        "title": "PDFへのリンク",
        "content":
          "https://www.mhlw.go.jp/content/10900000/000622211.pdf PDFへのリンク",
        "whole":
          "[https://www.mhlw.go.jp/content/10900000/000622211.pdf PDFへのリンク]",
      },
      "children":
        "https://www.mhlw.go.jp/content/10900000/000622211.pdf PDFへのリンク",
    },
  },
}, {
  "id": "62132e1f7838e30000b7c835",
  "text": " [Amazonのリンク https://www.amazon.co.jp]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1645424159,
  "updated": 1645424193,
  "section": { "number": 3, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [Amazonのリンク https://www.amazon.co.jp]",
      "tag": " ",
      "content": "[Amazonのリンク https://www.amazon.co.jp]",
    },
    "children": {
      "type": "urlLink",
      "unit": {
        "link": "https://www.amazon.co.jp",
        "space": " ",
        "title": "Amazonのリンク",
        "content": "Amazonのリンク https://www.amazon.co.jp",
        "whole": "[Amazonのリンク https://www.amazon.co.jp]",
      },
      "children": "Amazonのリンク https://www.amazon.co.jp",
    },
  },
}, {
  "id": "61fe3c897838e300001888e7",
  "text": "",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644051592,
  "updated": 1644051592,
  "section": { "number": 3, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "624de2df1280f0000050bebc",
  "text": "[** コードブロック]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271519,
  "updated": 1649271524,
  "section": { "number": 4, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** コードブロック]",
      "content": "コードブロック",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "コードブロック",
  },
}, {
  "id": "61dd289e7838e30000dc9cb5",
  "text": "code:コードブロック.py",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "py",
    "filename": "コードブロック.py",
    "indent": 1,
    "start": true,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dd289e7838e30000dc9cb6",
  "text": ' print("Hello World!")',
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "py",
    "filename": "コードブロック.py",
    "indent": 1,
    "start": false,
    "end": true,
    "hasCursor": false,
  },
}, {
  "id": "61dd6e581280f00000ab09bc",
  "text": "ファイル名なしコードブロック",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901656,
  "updated": 1672983030,
  "section": { "number": 4, "start": false, "end": false },
  "nodes": "ファイル名なしコードブロック",
}, {
  "id": "61dd6e601280f00000ab09bd",
  "text": "code:py",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901664,
  "updated": 1641901679,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "py",
    "filename": "py",
    "indent": 1,
    "start": true,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dd6e641280f00000ab09be",
  "text": ' print("Hello World!")',
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901667,
  "updated": 1641901679,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "py",
    "filename": "py",
    "indent": 1,
    "start": false,
    "end": true,
    "hasCursor": false,
  },
}, {
  "id": "61dd6e721280f00000ab09bf",
  "text": "インデントつき",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901682,
  "updated": 1641901705,
  "section": { "number": 4, "start": false, "end": false },
  "nodes": "インデントつき",
}, {
  "id": "61dd6e891280f00000ab09c0",
  "text": " code:インデント.md",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901705,
  "updated": 1641901712,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "md",
    "filename": "インデント.md",
    "indent": 2,
    "start": true,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dd6e911280f00000ab09c1",
  "text": "  - インデント",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901712,
  "updated": 1641901718,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "md",
    "filename": "インデント.md",
    "indent": 2,
    "start": false,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dd6e961280f00000ab09c2",
  "text": "    - インデント",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901718,
  "updated": 1641901721,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "md",
    "filename": "インデント.md",
    "indent": 2,
    "start": false,
    "end": true,
    "hasCursor": false,
  },
}, {
  "id": "61dd6e9a1280f00000ab09c3",
  "text": "言語を強制",
  "userId": "616ca537c25a92001e5f1e0d",
  "created": 1641901722,
  "updated": 1659671826,
  "section": { "number": 4, "start": false, "end": false },
  "nodes": "言語を強制",
}, {
  "id": "61dd6eb01280f00000ab09c4",
  "text": " code:python(js)",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901744,
  "updated": 1641901764,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "js",
    "filename": "python",
    "indent": 2,
    "start": true,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dd6eba1280f00000ab09c5",
  "text": '  console.log("I\'m JavaScript");',
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901754,
  "updated": 1641901775,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "js",
    "filename": "python",
    "indent": 2,
    "start": false,
    "end": true,
    "hasCursor": false,
  },
}, {
  "id": "61dfadbd1280f00000faf8db",
  "text": "[文芸的プログラミング]",
  "userId": "616ca537c25a92001e5f1e0d",
  "created": 1642048956,
  "updated": 1671266328,
  "section": { "number": 4, "start": false, "end": false },
  "nodes": {
    "type": "link",
    "unit": {
      "page": "文芸的プログラミング",
      "content": "文芸的プログラミング",
      "whole": "[文芸的プログラミング]",
    },
    "children": "文芸的プログラミング",
  },
}, {
  "id": "61dfaded1280f00000faf8e2",
  "text": " 標準ヘッダファイルをインクルード",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049004,
  "updated": 1642049016,
  "section": { "number": 4, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " 標準ヘッダファイルをインクルード",
      "tag": " ",
      "content": "標準ヘッダファイルをインクルード",
    },
    "children": "標準ヘッダファイルをインクルード",
  },
}, {
  "id": "61dfadc31280f00000faf8dc",
  "text": "  code:main.cpp",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642048963,
  "updated": 1642049018,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "cpp",
    "filename": "main.cpp",
    "indent": 3,
    "start": true,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dfaddc1280f00000faf8df",
  "text": "   #include <iostream>",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642048987,
  "updated": 1642049018,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "cpp",
    "filename": "main.cpp",
    "indent": 3,
    "start": false,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dfade41280f00000faf8e0",
  "text": "   ",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642048995,
  "updated": 1642049019,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "cpp",
    "filename": "main.cpp",
    "indent": 3,
    "start": false,
    "end": true,
    "hasCursor": false,
  },
}, {
  "id": "61dfadea1280f00000faf8e1",
  "text": " main函数の定義",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049001,
  "updated": 1642049025,
  "section": { "number": 4, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " main函数の定義",
      "tag": " ",
      "content": "main函数の定義",
    },
    "children": "main函数の定義",
  },
}, {
  "id": "61dfae021280f00000faf8e3",
  "text": "  code:main.cpp",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049025,
  "updated": 1642049029,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "cpp",
    "filename": "main.cpp",
    "indent": 3,
    "start": true,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dfae051280f00000faf8e4",
  "text": "   int main() {",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049029,
  "updated": 1642049034,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "cpp",
    "filename": "main.cpp",
    "indent": 3,
    "start": false,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dfae0b1280f00000faf8e5",
  "text": '     std::cout << "Hello, C++" << "from scrapbox.io" << std::endl;',
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049034,
  "updated": 1642049064,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "cpp",
    "filename": "main.cpp",
    "indent": 3,
    "start": false,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dfae0b1280f00000faf8e6",
  "text": "   }",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049035,
  "updated": 1642049035,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "cpp",
    "filename": "main.cpp",
    "indent": 3,
    "start": false,
    "end": false,
    "hasCursor": false,
  },
}, {
  "id": "61dfae2b1280f00000faf8e7",
  "text": "   ",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049066,
  "updated": 1642049066,
  "section": { "number": 4, "start": false, "end": false },
  "codeBlock": {
    "lang": "cpp",
    "filename": "main.cpp",
    "indent": 3,
    "start": false,
    "end": true,
    "hasCursor": false,
  },
}, {
  "id": "624de2ed1280f0000050bebd",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271532,
  "updated": 1649271532,
  "section": { "number": 4, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "624de2ed1280f0000050bebe",
  "text": "[** テーブル]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271532,
  "updated": 1649271538,
  "section": { "number": 5, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** テーブル]",
      "content": "テーブル",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "テーブル",
  },
}, {
  "id": "61dd289e7838e30000dc9cb7",
  "text": "table:表組み",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "表組み",
    "indent": 1,
    "cells": [" ", "able:表組み"],
    "start": true,
    "end": false,
  },
}, {
  "id": "61dd289e7838e30000dc9cb8",
  "text": " ■\t列2",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "表組み",
    "indent": 1,
    "cells": [" ", "■\t", "列2"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dd289e7838e30000dc9cb9",
  "text": " 行2\t■",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883806,
  "updated": 1641883806,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "表組み",
    "indent": 1,
    "cells": [" ", "行2\t", "■"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dd6ed81280f00000ab09c6",
  "text": " [リンク]\t[イドバタニシ.icon]アイコン\t[イドバタニシ.icon*3]",
  "userId": "616ca537c25a92001e5f1e0d",
  "created": 1641901784,
  "updated": 1659672416,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "表組み",
    "indent": 1,
    "cells": [
      " ",
      "[リンク]\t",
      "[イドバタニシ.icon]アイコン\t",
      "[イドバタニシ.icon*3]",
    ],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dd73361280f00000ab09ea",
  "text":
    " と \tて\tも\tな\tが\tい\tて\tー\tぶ\tる\tの\tて\tす\tと\tThe\ttest\tfor\tvery\tlong\ttable\t\t\t\t\t\t\t\t",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902902,
  "updated": 1641902985,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "表組み",
    "indent": 1,
    "cells": [
      " ",
      "と \t",
      "て\t",
      "も\t",
      "な\t",
      "が\t",
      "い\t",
      "て\t",
      "ー\t",
      "ぶ\t",
      "る\t",
      "の\t",
      "て\t",
      "す\t",
      "と\t",
      "The\t",
      "test\t",
      "for\t",
      "very\t",
      "long\t",
      "table\t",
      "\t",
      "\t",
      "\t",
      "\t",
      "\t",
      "\t",
      "\t",
      "",
    ],
    "start": false,
    "end": true,
  },
}, {
  "id": "61dfae3e1280f00000faf8e8",
  "text": "文芸的CSV",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049086,
  "updated": 1642049238,
  "section": { "number": 5, "start": false, "end": false },
  "nodes": "文芸的CSV",
}, {
  "id": "61dfae431280f00000faf8ea",
  "text": " table:plot",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049090,
  "updated": 1642049139,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "able:plot"],
    "start": true,
    "end": false,
  },
}, {
  "id": "61dfae741280f00000faf8eb",
  "text": "  x\ty",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049139,
  "updated": 1642049141,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "x\t", "y"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae761280f00000faf8ec",
  "text": "  0\t1",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049141,
  "updated": 1642049157,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "0\t", "1"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae791280f00000faf8ed",
  "text": "  1\t1",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049144,
  "updated": 1642049159,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "1\t", "1"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae7b1280f00000faf8ee",
  "text": "  2\t2",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049146,
  "updated": 1642049161,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "2\t", "2"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae7f1280f00000faf8ef",
  "text": "  3\t3",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049150,
  "updated": 1642049165,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "3\t", "3"],
    "start": false,
    "end": true,
  },
}, {
  "id": "61dfae901280f00000faf8f0",
  "text": " フィボナッチだ！",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049168,
  "updated": 1642049173,
  "section": { "number": 5, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " フィボナッチだ！",
      "tag": " ",
      "content": "フィボナッチだ！",
    },
    "children": "フィボナッチだ！",
  },
}, {
  "id": "61dfae961280f00000faf8f1",
  "text": " table:plot",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049173,
  "updated": 1642049177,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "able:plot"],
    "start": true,
    "end": false,
  },
}, {
  "id": "61dfae9a1280f00000faf8f2",
  "text": "  4\t5",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049177,
  "updated": 1642049186,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "4\t", "5"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae9b1280f00000faf8f3",
  "text": "  5\t8",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049179,
  "updated": 1642049187,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "5\t", "8"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae9c1280f00000faf8f4",
  "text": "  6\t13",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049180,
  "updated": 1642049189,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "6\t", "13"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae9d1280f00000faf8f5",
  "text": "  7\t21",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049180,
  "updated": 1642049190,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "7\t", "21"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae9d1280f00000faf8f6",
  "text": "  8\t34",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049180,
  "updated": 1642049192,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "8\t", "34"],
    "start": false,
    "end": false,
  },
}, {
  "id": "61dfae9e1280f00000faf8f7",
  "text": "  9\t55",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049182,
  "updated": 1642049194,
  "section": { "number": 5, "start": false, "end": false },
  "tableBlock": {
    "title": "plot",
    "indent": 2,
    "cells": ["  ", "9\t", "55"],
    "start": false,
    "end": true,
  },
}, {
  "id": "61dfae3f1280f00000faf8e9",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642049086,
  "updated": 1642049086,
  "section": { "number": 5, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61dd70c51280f00000ab09da",
  "text": "[** 数式]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641902277,
  "updated": 1644051698,
  "section": { "number": 6, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** 数式]",
      "content": "数式",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "数式",
  },
}, {
  "id": "61dd70a61280f00000ab09d9",
  "text": " [$ e^{i\\theta}=\\cos\\theta+i\\sin\\theta]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902246,
  "updated": 1641902280,
  "section": { "number": 6, "start": false, "end": false },
  "formulaLine": true,
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [$ e^{i\\theta}=\\cos\\theta+i\\sin\\theta]",
      "tag": " ",
      "content": "[$ e^{i\\theta}=\\cos\\theta+i\\sin\\theta]",
    },
    "children": {
      "type": "deco-formula",
      "unit": {
        "whole": "[$ e^{i\\theta}=\\cos\\theta+i\\sin\\theta]",
        "content": "$ e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
        "formula": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
      },
      "children": "$ e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
    },
  },
}, {
  "id": "61dd289d7838e30000dc9ca9",
  "text": " 文章の中に[$ \\text{数式}]を入れる",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641883805,
  "updated": 1641902301,
  "section": { "number": 6, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " 文章の中に[$ \\text{数式}]を入れる",
      "tag": " ",
      "content": "文章の中に[$ \\text{数式}]を入れる",
    },
    "children": ["文章の中に", {
      "type": "deco-formula",
      "unit": {
        "whole": "[$ \\text{数式}]",
        "content": "$ \\text{数式}",
        "formula": "\\text{数式}",
      },
      "children": "$ \\text{数式}",
    }, "を入れる"],
  },
}, {
  "id": "639d80415f1e0d000036c9ba",
  "text": "  [$ a_{n+1}=a_n+1]",
  "userId": "616ca537c25a92001e5f1e0d",
  "created": 1671266369,
  "updated": 1671266422,
  "section": { "number": 6, "start": false, "end": false },
  "formulaLine": true,
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [$ a_{n+1}=a_n+1]",
      "tag": "  ",
      "content": "[$ a_{n+1}=a_n+1]",
    },
    "children": {
      "type": "deco-formula",
      "unit": {
        "whole": "[$ a_{n+1}=a_n+1]",
        "content": "$ a_{n+1}=a_n+1",
        "formula": "a_{n+1}=a_n+1",
      },
      "children": "$ a_{n+1}=a_n+1",
    },
  },
}, {
  "id": "639d80815f1e0d000036c9bb",
  "text": "  あれ？箇条書きの点消えるんじゃなかったっけ？",
  "userId": "616ca537c25a92001e5f1e0d",
  "created": 1671266433,
  "updated": 1671266446,
  "section": { "number": 6, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  あれ？箇条書きの点消えるんじゃなかったっけ？",
      "tag": "  ",
      "content": "あれ？箇条書きの点消えるんじゃなかったっけ？",
    },
    "children": "あれ？箇条書きの点消えるんじゃなかったっけ？",
  },
}, {
  "id": "639d80b25f1e0d000036c9bc",
  "text": "  [数式行にも常にバレットを表示するUserCSS]が利いてるっぽい",
  "userId": "616ca537c25a92001e5f1e0d",
  "created": 1671266481,
  "updated": 1672225060,
  "section": { "number": 6, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [数式行にも常にバレットを表示するUserCSS]が利いてるっぽい",
      "tag": "  ",
      "content": "[数式行にも常にバレットを表示するUserCSS]が利いてるっぽい",
    },
    "children": [{
      "type": "link",
      "unit": {
        "page": "数式行にも常にバレットを表示するUserCSS",
        "content": "数式行にも常にバレットを表示するUserCSS",
        "whole": "[数式行にも常にバレットを表示するUserCSS]",
      },
      "children": "数式行にも常にバレットを表示するUserCSS",
    }, "が利いてるっぽい"],
  },
}, {
  "id": "61dd70cb1280f00000ab09db",
  "text": "\t[Scrapboxの数式記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641902283,
  "updated": 1653532682,
  "section": { "number": 6, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t[Scrapboxの数式記法]",
      "tag": "\t",
      "content": "[Scrapboxの数式記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "Scrapboxの数式記法",
        "content": "Scrapboxの数式記法",
        "whole": "[Scrapboxの数式記法]",
      },
      "children": "Scrapboxの数式記法",
    },
  },
}, {
  "id": "628ee8017838e30000e6fe12",
  "text": "",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1653532673,
  "updated": 1653532673,
  "section": { "number": 6, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61fe44d77838e300001888ef",
  "text": "[** 文字装飾とか]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644053718,
  "updated": 1644053718,
  "section": { "number": 7, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** 文字装飾とか]",
      "content": "文字装飾とか",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "文字装飾とか",
  },
}, {
  "id": "61fe44d77838e300001888f0",
  "text": "通常",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644053718,
  "updated": 1644053718,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": "通常",
}, {
  "id": "61fe44d77838e300001888f1",
  "text": "[[太字]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644053718,
  "updated": 1644053718,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "strong",
    "unit": { "content": "太字", "whole": "[[太字]]" },
    "children": "太字",
  },
}, {
  "id": "641e8df61280f00000780bf8",
  "text": " [[[リンク]入り太字[イドバタニシ.icon]]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1679724022,
  "updated": 1734767936,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [[[リンク]入り太字[イドバタニシ.icon]]]",
      "tag": " ",
      "content": "[[[リンク]入り太字[イドバタニシ.icon]]]",
    },
    "children": {
      "type": "strong",
      "unit": {
        "content": "[リンク]入り太字[イドバタニシ.icon]",
        "whole": "[[[リンク]入り太字[イドバタニシ.icon]]]",
      },
      "children": [
        {
          "type": "link",
          "unit": {
            "page": "リンク",
            "content": "リンク",
            "whole": "[リンク]",
          },
          "children": "リンク",
        },
        "入り太字",
        {
          "type": "icon",
          "unit": {
            "page": "イドバタニシ",
            "size": 1,
            "content": "イドバタニシ.icon",
            "whole": "[イドバタニシ.icon]",
          },
          "children": "イドバタニシ.icon",
        },
      ],
    },
  },
}, {
  "id": "641e8ddd1280f00000780bf7",
  "text": " [[[リンク]とアイコンは書き込めるが、[* 文字装飾]は書き込めない]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1679723997,
  "updated": 1734767932,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " [[[リンク]とアイコンは書き込めるが、[* 文字装飾]は書き込めない]]",
      "tag": " ",
      "content":
        "[[[リンク]とアイコンは書き込めるが、[* 文字装飾]は書き込めない]]",
    },
    "children": [
      "[[",
      {
        "type": "link",
        "unit": { "page": "リンク", "content": "リンク", "whole": "[リンク]" },
        "children": "リンク",
      },
      "とアイコンは書き込めるが、",
      {
        "type": "deco",
        "unit": {
          "whole": "[* 文字装飾]",
          "content": "文字装飾",
          "deco": "*",
          "strong": 1,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "文字装飾",
      },
      "は書き込めない]]",
    ],
  },
}, {
  "id": "61fe44d77838e300001888f2",
  "text": "[- 取り消し線]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644053718,
  "updated": 1644053718,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[- 取り消し線]",
      "content": "取り消し線",
      "deco": "-",
      "strong": 0,
      "italic": false,
      "strike": true,
      "underline": false,
    },
    "children": "取り消し線",
  },
}, {
  "id": "61fe44d77838e300001888f3",
  "text": "[_ 下線]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644053718,
  "updated": 1644053718,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[_ 下線]",
      "content": "下線",
      "deco": "_",
      "strong": 0,
      "italic": false,
      "strike": false,
      "underline": true,
    },
    "children": "下線",
  },
}, {
  "id": "61fe44d77838e300001888f4",
  "text": "[/ 斜体(Italic)]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644053718,
  "updated": 1644053718,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[/ 斜体(Italic)]",
      "content": "斜体(Italic)",
      "deco": "/",
      "strong": 0,
      "italic": true,
      "strike": false,
      "underline": false,
    },
    "children": "斜体(Italic)",
  },
}, {
  "id": "61fe44d77838e300001888f5",
  "text": "`インラインコード`",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644053718,
  "updated": 1671920659,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "code",
    "unit": { "whole": "`インラインコード`", "content": "インラインコード" },
    "children": "インラインコード",
  },
}, {
  "id": "676669ad1280f000000d1356",
  "text": " `\\`をescapeできる`",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767914,
  "updated": 1734767914,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `\\`をescapeできる`",
      "tag": " ",
      "content": "`\\`をescapeできる`",
    },
    "children": {
      "type": "code",
      "unit": {
        "whole": "`\\`をescapeできる`",
        "content": "\\`をescapeできる",
      },
      "children": "\\`をescapeできる",
    },
  },
}, {
  "id": "624de33e1280f0000050bf08",
  "text": ">引用文",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271613,
  "updated": 1649271613,
  "section": { "number": 7, "start": false, "end": false },
  "quoteLine": true,
  "nodes": {
    "type": "quote",
    "unit": { "whole": ">引用文", "tag": ">", "content": "引用文" },
    "children": "引用文",
  },
}, {
  "id": "624de33e1280f0000050bf09",
  "text": " > インデントつき[_ 引用文]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271613,
  "updated": 1649272895,
  "section": { "number": 7, "start": false, "end": false },
  "quoteLine": true,
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " > インデントつき[_ 引用文]",
      "tag": " ",
      "content": "> インデントつき[_ 引用文]",
    },
    "children": {
      "type": "quote",
      "unit": {
        "whole": "> インデントつき[_ 引用文]",
        "tag": "> ",
        "content": "インデントつき[_ 引用文]",
      },
      "children": ["インデントつき", {
        "type": "deco",
        "unit": {
          "whole": "[_ 引用文]",
          "content": "引用文",
          "deco": "_",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": true,
        },
        "children": "引用文",
      }],
    },
  },
}, {
  "id": "641e8dce1280f00000780bf6",
  "text": " > 中には[リンク]や[$ \\text{数式}]も書けます",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1679723982,
  "updated": 1679723995,
  "section": { "number": 7, "start": false, "end": false },
  "quoteLine": true,
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " > 中には[リンク]や[$ \\text{数式}]も書けます",
      "tag": " ",
      "content": "> 中には[リンク]や[$ \\text{数式}]も書けます",
    },
    "children": {
      "type": "quote",
      "unit": {
        "whole": "> 中には[リンク]や[$ \\text{数式}]も書けます",
        "tag": "> ",
        "content": "中には[リンク]や[$ \\text{数式}]も書けます",
      },
      "children": [
        "中には",
        {
          "type": "link",
          "unit": {
            "page": "リンク",
            "content": "リンク",
            "whole": "[リンク]",
          },
          "children": "リンク",
        },
        "や",
        {
          "type": "deco-formula",
          "unit": {
            "whole": "[$ \\text{数式}]",
            "content": "$ \\text{数式}",
            "formula": "\\text{数式}",
          },
          "children": "$ \\text{数式}",
        },
        "も書けます",
      ],
    },
  },
}, {
  "id": "676641c61280f000000d1346",
  "text": " >\t中に箇条書きを書く",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734754759,
  "updated": 1734754772,
  "section": { "number": 7, "start": false, "end": false },
  "quoteLine": true,
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " >\t中に箇条書きを書く",
      "tag": " ",
      "content": ">\t中に箇条書きを書く",
    },
    "children": {
      "type": "quote",
      "unit": {
        "whole": ">\t中に箇条書きを書く",
        "tag": ">",
        "content": "\t中に箇条書きを書く",
      },
      "children": {
        "type": "indent",
        "unit": {
          "whole": "\t中に箇条書きを書く",
          "tag": "\t",
          "content": "中に箇条書きを書く",
        },
        "children": "中に箇条書きを書く",
      },
    },
  },
}, {
  "id": "676641d31280f000000d1347",
  "text": " >\t\tタブ or 半角スペース or 全角スペースでインデントできる",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734754772,
  "updated": 1734755190,
  "section": { "number": 7, "start": false, "end": false },
  "quoteLine": true,
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " >\t\tタブ or 半角スペース or 全角スペースでインデントできる",
      "tag": " ",
      "content": ">\t\tタブ or 半角スペース or 全角スペースでインデントできる",
    },
    "children": {
      "type": "quote",
      "unit": {
        "whole": ">\t\tタブ or 半角スペース or 全角スペースでインデントできる",
        "tag": ">",
        "content": "\t\tタブ or 半角スペース or 全角スペースでインデントできる",
      },
      "children": {
        "type": "indent",
        "unit": {
          "whole": "\t\tタブ or 半角スペース or 全角スペースでインデントできる",
          "tag": "\t\t",
          "content": "タブ or 半角スペース or 全角スペースでインデントできる",
        },
        "children": "タブ or 半角スペース or 全角スペースでインデントできる",
      },
    },
  },
}, {
  "id": "676641dc1280f000000d1348",
  "text": " > \t\t",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734755175,
  "updated": 1734755177,
  "section": { "number": 7, "start": false, "end": false },
  "quoteLine": true,
  "nodes": {
    "type": "indent",
    "unit": { "whole": " > \t\t", "tag": " ", "content": "> \t\t" },
    "children": {
      "type": "quote",
      "unit": { "whole": "> \t\t", "tag": "> ", "content": "\t\t" },
      "children": {
        "type": "indent",
        "unit": { "whole": "\t\t", "tag": "\t\t", "content": "" },
        "children": "",
      },
    },
  },
}, {
  "id": "6766435a1280f000000d1349",
  "text": " >　　　",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734755178,
  "updated": 1734755180,
  "section": { "number": 7, "start": false, "end": false },
  "quoteLine": true,
  "nodes": {
    "type": "indent",
    "unit": { "whole": " >　　　", "tag": " ", "content": ">　　　" },
    "children": {
      "type": "quote",
      "unit": { "whole": ">　　　", "tag": ">", "content": "　　　" },
      "children": {
        "type": "indent",
        "unit": { "whole": "　　　", "tag": "　　　", "content": "" },
        "children": "",
      },
    },
  },
}, {
  "id": "676666341280f000000d1352",
  "text": " >  ",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767913,
  "updated": 1734767913,
  "section": { "number": 7, "start": false, "end": false },
  "quoteLine": true,
  "nodes": {
    "type": "indent",
    "unit": { "whole": " >  ", "tag": " ", "content": ">  " },
    "children": {
      "type": "quote",
      "unit": { "whole": ">  ", "tag": "> ", "content": " " },
      "children": {
        "type": "indent",
        "unit": { "whole": " ", "tag": " ", "content": "" },
        "children": "",
      },
    },
  },
}, {
  "id": "624de33e1280f0000050bf0a",
  "text": "? Helpfeel",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1649271613,
  "updated": 1714902875,
  "section": { "number": 7, "start": false, "end": false },
  "helpfeel": { "prefix": "?", "entry": "Helpfeel" },
}, {
  "id": "6637575d71b3c20000e3f965",
  "text": "\tcss:code.helpfeel",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1714902877,
  "updated": 1714902887,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\tcss:code.helpfeel",
      "tag": "\t",
      "content": "css:code.helpfeel",
    },
    "children": "css:code.helpfeel",
  },
}, {
  "id": "624de33e1280f0000050bf0b",
  "text": "$ コマンド",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1649271613,
  "updated": 1671920664,
  "section": { "number": 7, "start": false, "end": false },
  "cli": { "prefix": "$", "command": "コマンド" },
}, {
  "id": "6637570471b3c20000e3f964",
  "text": "\tcss: .text.cli(%と同じ)",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1714902788,
  "updated": 1714902819,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\tcss: .text.cli(%と同じ)",
      "tag": "\t",
      "content": "css: .text.cli(%と同じ)",
    },
    "children": "css: .text.cli(%と同じ)",
  },
}, {
  "id": "624de33e1280f0000050bf0c",
  "text": "% コマンド",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1649271613,
  "updated": 1671920667,
  "section": { "number": 7, "start": false, "end": false },
  "cli": { "prefix": "%", "command": "コマンド" },
}, {
  "id": "624de33e1280f0000050bf0d",
  "text": "[　]: [空白記法]",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1649271613,
  "updated": 1714902849,
  "section": { "number": 7, "start": false, "end": false },
  "nodes": [
    {
      "type": "blank",
      "unit": { "content": "　", "whole": "[　]" },
      "children": "　",
    },
    ": ",
    {
      "type": "link",
      "unit": {
        "page": "空白記法",
        "content": "空白記法",
        "whole": "[空白記法]",
      },
      "children": "空白記法",
    },
  ],
}, {
  "id": "6766693c1280f000000d1355",
  "text": " % コマンド",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767913,
  "updated": 1734767913,
  "section": { "number": 7, "start": false, "end": false },
  "cli": { "prefix": "%", "command": "コマンド" },
}, {
  "id": "61fe45047838e300001888f7",
  "text": "",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644053764,
  "updated": 1644053764,
  "section": { "number": 7, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61fe3cfe7838e300001888ee",
  "text": "[** ブラケット記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644051709,
  "updated": 1644051720,
  "section": { "number": 8, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** ブラケット記法]",
      "content": "ブラケット記法",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "ブラケット記法",
  },
}, {
  "id": "61dd26b87838e300002ff246",
  "text": "デフォルト",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883320,
  "updated": 1641883378,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": "デフォルト",
}, {
  "id": "61dd27d57838e3000053df20",
  "text": "\t`[]`:[[abcABC123あいう]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883606,
  "updated": 1641883620,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t`[]`:[[abcABC123あいう]]",
      "tag": "\t",
      "content": "`[]`:[[abcABC123あいう]]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`[]`", "content": "[]" },
        "children": "[]",
      },
      ":",
      {
        "type": "strong",
        "unit": {
          "content": "abcABC123あいう",
          "whole": "[[abcABC123あいう]]",
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61fe342c7838e3000072858e",
  "text": "\t\t[マーカー記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644049452,
  "updated": 1644049456,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t\t[マーカー記法]",
      "tag": "\t\t",
      "content": "[マーカー記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "マーカー記法",
        "content": "マーカー記法",
        "whole": "[マーカー記法]",
      },
      "children": "マーカー記法",
    },
  },
}, {
  "id": "61dd26c07838e300002ff247",
  "text": "\t`*`: [* abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883380,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t`*`: [* abcABC123あいう]",
      "tag": "\t",
      "content": "`*`: [* abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`*`", "content": "*" },
        "children": "*",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[* abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "*",
          "strong": 1,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd26c07838e300002ff248",
  "text": "\t`/`: [/ abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883382,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t`/`: [/ abcABC123あいう]",
      "tag": "\t",
      "content": "`/`: [/ abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`/`", "content": "/" },
        "children": "/",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[/ abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "/",
          "strong": 0,
          "italic": true,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd26c07838e300002ff249",
  "text": " `-`: [- abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883384,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `-`: [- abcABC123あいう]",
      "tag": " ",
      "content": "`-`: [- abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`-`", "content": "-" },
        "children": "-",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[- abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "-",
          "strong": 0,
          "italic": false,
          "strike": true,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd26c07838e300002ff24a",
  "text": " `_`: [_ abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883384,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `_`: [_ abcABC123あいう]",
      "tag": " ",
      "content": "`_`: [_ abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`_`", "content": "_" },
        "children": "_",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[_ abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "_",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": true,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd26c07838e300002ff24b",
  "text": "UserCSS",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883390,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": "UserCSS",
}, {
  "id": "61dd26c07838e300002ff24d",
  "text": ' `"`: [" abcABC123あいう]',
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": ' `"`: [" abcABC123あいう]',
      "tag": " ",
      "content": '`"`: [" abcABC123あいう]',
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": '`"`', "content": '"' },
        "children": '"',
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": '[" abcABC123あいう]',
          "content": "abcABC123あいう",
          "deco": '"',
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2af67838e30000dc9ccb",
  "text": " \t[インライン引用記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884406,
  "updated": 1644051443,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[インライン引用記法]",
      "tag": " \t",
      "content": "[インライン引用記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "インライン引用記法",
        "content": "インライン引用記法",
        "whole": "[インライン引用記法]",
      },
      "children": "インライン引用記法",
    },
  },
}, {
  "id": "61dd26c07838e300002ff24e",
  "text": " `#`: [# abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `#`: [# abcABC123あいう]",
      "tag": " ",
      "content": "`#`: [# abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`#`", "content": "#" },
        "children": "#",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[# abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "#",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2f2b7838e30000dc9ce8",
  "text": " \t[- [ネタバレ防止記法]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641885483,
  "updated": 1647635688,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[- [ネタバレ防止記法]]",
      "tag": " \t",
      "content": "[- [ネタバレ防止記法]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[- [ネタバレ防止記法]]",
        "content": "[ネタバレ防止記法]",
        "deco": "-",
        "strong": 0,
        "italic": false,
        "strike": true,
        "underline": false,
      },
      "children": {
        "type": "link",
        "unit": {
          "page": "ネタバレ防止記法",
          "content": "ネタバレ防止記法",
          "whole": "[ネタバレ防止記法]",
        },
        "children": "ネタバレ防止記法",
      },
    },
  },
}, {
  "id": "6234ecec7838e30000fbd7b6",
  "text": " \t\t無効化された",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1647635691,
  "updated": 1647907200,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t\t無効化された",
      "tag": " \t\t",
      "content": "無効化された",
    },
    "children": "無効化された",
  },
}, {
  "id": "623911817838e30000e26bb1",
  "text": " \t[白黒記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1647907202,
  "updated": 1647907204,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " \t[白黒記法]", "tag": " \t", "content": "[白黒記法]" },
    "children": {
      "type": "link",
      "unit": {
        "page": "白黒記法",
        "content": "白黒記法",
        "whole": "[白黒記法]",
      },
      "children": "白黒記法",
    },
  },
}, {
  "id": "623911887838e30000e26bb2",
  "text": " \t\t[*******# [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1647907208,
  "updated": 1647912082,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t\t[*******# [イドバタニシ.icon]]",
      "tag": " \t\t",
      "content": "[*******# [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[*******# [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "*******#",
        "strong": 7,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61dd26c07838e300002ff24f",
  "text": " `%`: [% abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `%`: [% abcABC123あいう]",
      "tag": " ",
      "content": "`%`: [% abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`%`", "content": "%" },
        "children": "%",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[% abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "%",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2d647838e30000dc9ce3",
  "text": " \t[スプレッドシート的に使う記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641885029,
  "updated": 1644051462,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[スプレッドシート的に使う記法]",
      "tag": " \t",
      "content": "[スプレッドシート的に使う記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "スプレッドシート的に使う記法",
        "content": "スプレッドシート的に使う記法",
        "whole": "[スプレッドシート的に使う記法]",
      },
      "children": "スプレッドシート的に使う記法",
    },
  },
}, {
  "id": "61dd26c07838e300002ff250",
  "text": " `&`: [& abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `&`: [& abcABC123あいう]",
      "tag": " ",
      "content": "`&`: [& abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`&`", "content": "&" },
        "children": "&",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[& abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "&",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2d2b7838e30000dc9ce2",
  "text": " \t[愚痴記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884971,
  "updated": 1644051465,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " \t[愚痴記法]", "tag": " \t", "content": "[愚痴記法]" },
    "children": {
      "type": "link",
      "unit": {
        "page": "愚痴記法",
        "content": "愚痴記法",
        "whole": "[愚痴記法]",
      },
      "children": "愚痴記法",
    },
  },
}, {
  "id": "61dd26c07838e300002ff251",
  "text": " `'`: [' abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641884950,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `'`: [' abcABC123あいう]",
      "tag": " ",
      "content": "`'`: [' abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`'`", "content": "'" },
        "children": "'",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[' abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "'",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2d127838e30000dc9ce1",
  "text": " \t[中央揃え記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884946,
  "updated": 1644051468,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[中央揃え記法]",
      "tag": " \t",
      "content": "[中央揃え記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "中央揃え記法",
        "content": "中央揃え記法",
        "whole": "[中央揃え記法]",
      },
      "children": "中央揃え記法",
    },
  },
}, {
  "id": "61dd26c07838e300002ff256",
  "text": " `.`: [. abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `.`: [. abcABC123あいう]",
      "tag": " ",
      "content": "`.`: [. abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`.`", "content": "." },
        "children": ".",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[. abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": ".",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2d927838e30000dc9ce4",
  "text":
    " \t[リンクを出典アイコンにするUserCSS][. [Settings#6157ebcf1280f00000ad87f1]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641885075,
  "updated": 1644051217,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " \t[リンクを出典アイコンにするUserCSS][. [Settings#6157ebcf1280f00000ad87f1]]",
      "tag": " \t",
      "content":
        "[リンクを出典アイコンにするUserCSS][. [Settings#6157ebcf1280f00000ad87f1]]",
    },
    "children": [{
      "type": "link",
      "unit": {
        "page": "リンクを出典アイコンにするUserCSS",
        "content": "リンクを出典アイコンにするUserCSS",
        "whole": "[リンクを出典アイコンにするUserCSS]",
      },
      "children": "リンクを出典アイコンにするUserCSS",
    }, {
      "type": "deco",
      "unit": {
        "whole": "[. [Settings#6157ebcf1280f00000ad87f1]]",
        "content": "[Settings#6157ebcf1280f00000ad87f1]",
        "deco": ".",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "link",
        "unit": {
          "page": "Settings",
          "line": "6157ebcf1280f00000ad87f1",
          "content": "Settings#6157ebcf1280f00000ad87f1",
          "whole": "[Settings#6157ebcf1280f00000ad87f1]",
        },
        "children": "Settings#6157ebcf1280f00000ad87f1",
      },
    }],
  },
}, {
  "id": "61dd26c07838e300002ff258",
  "text": " `{`: [{ abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `{`: [{ abcABC123あいう]",
      "tag": " ",
      "content": "`{`: [{ abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`{`", "content": "{" },
        "children": "{",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[{ abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "{",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd26c07838e300002ff25a",
  "text": " `}`: [} abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `}`: [} abcABC123あいう]",
      "tag": " ",
      "content": "`}`: [} abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`}`", "content": "}" },
        "children": "}",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[} abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "}",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2b287838e30000dc9ccd",
  "text": " \t[ふきだし記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884457,
  "updated": 1644051480,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[ふきだし記法]",
      "tag": " \t",
      "content": "[ふきだし記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "ふきだし記法",
        "content": "ふきだし記法",
        "whole": "[ふきだし記法]",
      },
      "children": "ふきだし記法",
    },
  },
}, {
  "id": "61dd2a4f7838e30000dc9cca",
  "text": " `|`: [| abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884239,
  "updated": 1641884239,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `|`: [| abcABC123あいう]",
      "tag": " ",
      "content": "`|`: [| abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`|`", "content": "|" },
        "children": "|",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[| abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "|",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2fbd7838e30000dc9cea",
  "text": " \t[画像を並べて表示する記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641885629,
  "updated": 1644051483,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[画像を並べて表示する記法]",
      "tag": " \t",
      "content": "[画像を並べて表示する記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "画像を並べて表示する記法",
        "content": "画像を並べて表示する記法",
        "whole": "[画像を並べて表示する記法]",
      },
      "children": "画像を並べて表示する記法",
    },
  },
}, {
  "id": "61df8a4c7838e300001de3b0",
  "text": " \t[***| 123456]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039885,
  "updated": 1642039923,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[***| 123456]",
      "tag": " \t",
      "content": "[***| 123456]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[***| 123456]",
        "content": "123456",
        "deco": "***|",
        "strong": 3,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": "123456",
    },
  },
}, {
  "id": "61dd26c07838e300002ff25b",
  "text": " `<`: [< abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `<`: [< abcABC123あいう]",
      "tag": " ",
      "content": "`<`: [< abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`<`", "content": "<" },
        "children": "<",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[< abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "<",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2e7d7838e30000dc9ce7",
  "text": " \t[< る  び きほう][ルビ記法]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641885310,
  "updated": 1644062465,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[< る  び きほう][ルビ記法]",
      "tag": " \t",
      "content": "[< る  び きほう][ルビ記法]",
    },
    "children": [{
      "type": "deco",
      "unit": {
        "whole": "[< る  び きほう]",
        "content": "る  び きほう",
        "deco": "<",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": "る  び きほう",
    }, {
      "type": "link",
      "unit": {
        "page": "ルビ記法",
        "content": "ルビ記法",
        "whole": "[ルビ記法]",
      },
      "children": "ルビ記法",
    }],
  },
}, {
  "id": "6637543771b3c20000e679fe",
  "text": " \tあまり使われてない？[bsahd.icon]",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1714902071,
  "updated": 1714902079,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \tあまり使われてない？[bsahd.icon]",
      "tag": " \t",
      "content": "あまり使われてない？[bsahd.icon]",
    },
    "children": ["あまり使われてない？", {
      "type": "icon",
      "unit": {
        "page": "bsahd",
        "size": 1,
        "content": "bsahd.icon",
        "whole": "[bsahd.icon]",
      },
      "children": "bsahd.icon",
    }],
  },
}, {
  "id": "61dd26c07838e300002ff25c",
  "text": " `>`: [> abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `>`: [> abcABC123あいう]",
      "tag": " ",
      "content": "`>`: [> abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`>`", "content": ">" },
        "children": ">",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[> abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": ">",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2e617838e30000dc9ce6",
  "text": " \t[ユーザーフラッグ記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641885281,
  "updated": 1644051489,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[ユーザーフラッグ記法]",
      "tag": " \t",
      "content": "[ユーザーフラッグ記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "ユーザーフラッグ記法",
        "content": "ユーザーフラッグ記法",
        "whole": "[ユーザーフラッグ記法]",
      },
      "children": "ユーザーフラッグ記法",
    },
  },
}, {
  "id": "61dd26c07838e300002ff25d",
  "text": " `~`: [~ abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883328,
  "updated": 1641883395,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `~`: [~ abcABC123あいう]",
      "tag": " ",
      "content": "`~`: [~ abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`~`", "content": "~" },
        "children": "~",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[~ abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "~",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd2e407838e30000dc9ce5",
  "text": " \t[曇りガラス記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641885248,
  "updated": 1644051492,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[曇りガラス記法]",
      "tag": " \t",
      "content": "[曇りガラス記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "曇りガラス記法",
        "content": "曇りガラス記法",
        "whole": "[曇りガラス記法]",
      },
      "children": "曇りガラス記法",
    },
  },
}, {
  "id": "620518307838e30000deb4d2",
  "text": " `/`: [/ abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644501040,
  "updated": 1644501062,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `/`: [/ abcABC123あいう]",
      "tag": " ",
      "content": "`/`: [/ abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`/`", "content": "/" },
        "children": "/",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[/ abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "/",
          "strong": 0,
          "italic": true,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "620518477838e30000deb4d4",
  "text": " \t[/ [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644501063,
  "updated": 1644501080,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[/ [イドバタニシ.icon]]",
      "tag": " \t",
      "content": "[/ [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[/ [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "/",
        "strong": 0,
        "italic": true,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "620518337838e30000deb4d3",
  "text": " \t[アイコン記法を画像記法っぽくするUserCSS]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644501044,
  "updated": 1644501044,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[アイコン記法を画像記法っぽくするUserCSS]",
      "tag": " \t",
      "content": "[アイコン記法を画像記法っぽくするUserCSS]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "アイコン記法を画像記法っぽくするUserCSS",
        "content": "アイコン記法を画像記法っぽくするUserCSS",
        "whole": "[アイコン記法を画像記法っぽくするUserCSS]",
      },
      "children": "アイコン記法を画像記法っぽくするUserCSS",
    },
  },
}, {
  "id": "627739857838e300009c99bf",
  "text": " `-`: [- abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1651980677,
  "updated": 1651980691,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `-`: [- abcABC123あいう]",
      "tag": " ",
      "content": "`-`: [- abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`-`", "content": "-" },
        "children": "-",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[- abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "-",
          "strong": 0,
          "italic": false,
          "strike": true,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "627739967838e300009c99c0",
  "text": " \t[- [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1651980695,
  "updated": 1651980708,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[- [イドバタニシ.icon]]",
      "tag": " \t",
      "content": "[- [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[- [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "-",
        "strong": 0,
        "italic": false,
        "strike": true,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "627739a57838e300009c99c1",
  "text": " \t[iconを回転する記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1651980709,
  "updated": 1651980715,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[iconを回転する記法]",
      "tag": " \t",
      "content": "[iconを回転する記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "iconを回転する記法",
        "content": "iconを回転する記法",
        "whole": "[iconを回転する記法]",
      },
      "children": "iconを回転する記法",
    },
  },
}, {
  "id": "627739b47838e300009c99c3",
  "text": " `!`: [! abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1651980725,
  "updated": 1651981861,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `!`: [! abcABC123あいう]",
      "tag": " ",
      "content": "`!`: [! abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`!`", "content": "!" },
        "children": "!",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[! abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "!",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "62773e267838e300009c99c4",
  "text": " \t[! [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1651981862,
  "updated": 1651981874,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[! [イドバタニシ.icon]]",
      "tag": " \t",
      "content": "[! [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[! [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "!",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "62773e347838e300009c99c5",
  "text": " \t[iconを振動させる記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1651981876,
  "updated": 1651981885,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[iconを振動させる記法]",
      "tag": " \t",
      "content": "[iconを振動させる記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "iconを振動させる記法",
        "content": "iconを振動させる記法",
        "whole": "[iconを振動させる記法]",
      },
      "children": "iconを振動させる記法",
    },
  },
}, {
  "id": "6278ab9e7838e30000094747",
  "text": " `()`: [() abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1652075411,
  "updated": 1652075434,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `()`: [() abcABC123あいう]",
      "tag": " ",
      "content": "`()`: [() abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`()`", "content": "()" },
        "children": "()",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[() abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "()",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "6278abb77838e30000094748",
  "text": " \t[() [blu3mo.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1652075437,
  "updated": 1652075453,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[() [blu3mo.icon]]",
      "tag": " \t",
      "content": "[() [blu3mo.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[() [blu3mo.icon]]",
        "content": "[blu3mo.icon]",
        "deco": "()",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "blu3mo",
          "size": 1,
          "content": "blu3mo.icon",
          "whole": "[blu3mo.icon]",
        },
        "children": "blu3mo.icon",
      },
    },
  },
}, {
  "id": "6278ac977838e3000009474c",
  "text":
    " \t\t[イドバタニシ.icon]だとわかりにくいので[blu3mo.icon]氏のアイコンをお借りしました[Mijinko_SD.icon]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1652075660,
  "updated": 1652075689,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " \t\t[イドバタニシ.icon]だとわかりにくいので[blu3mo.icon]氏のアイコンをお借りしました[Mijinko_SD.icon]",
      "tag": " \t\t",
      "content":
        "[イドバタニシ.icon]だとわかりにくいので[blu3mo.icon]氏のアイコンをお借りしました[Mijinko_SD.icon]",
    },
    "children": [
      {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
      "だとわかりにくいので",
      {
        "type": "icon",
        "unit": {
          "page": "blu3mo",
          "size": 1,
          "content": "blu3mo.icon",
          "whole": "[blu3mo.icon]",
        },
        "children": "blu3mo.icon",
      },
      "氏のアイコンをお借りしました",
      {
        "type": "icon",
        "unit": {
          "page": "Mijinko_SD",
          "size": 1,
          "content": "Mijinko_SD.icon",
          "whole": "[Mijinko_SD.icon]",
        },
        "children": "Mijinko_SD.icon",
      },
    ],
  },
}, {
  "id": "6278abcc7838e30000094749",
  "text": " \t[iconを丸くする記法]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1652075457,
  "updated": 1652075462,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[iconを丸くする記法]",
      "tag": " \t",
      "content": "[iconを丸くする記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "iconを丸くする記法",
        "content": "iconを丸くする記法",
        "whole": "[iconを丸くする記法]",
      },
      "children": "iconを丸くする記法",
    },
  },
}, {
  "id": "623fec24c1f87f0000398fe1",
  "text": " `,`: [, abcABC123あいう]",
  "userId": "6226a730abe6b0001dc1f87f",
  "created": 1648356388,
  "updated": 1648356388,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `,`: [, abcABC123あいう]",
      "tag": " ",
      "content": "`,`: [, abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`,`", "content": "," },
        "children": ",",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[, abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": ",",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "623fec71c1f87f0000398fe4",
  "text": "  [行内で小さくするUserCSS]",
  "userId": "6226a730abe6b0001dc1f87f",
  "created": 1648356466,
  "updated": 1648356494,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [行内で小さくするUserCSS]",
      "tag": "  ",
      "content": "[行内で小さくするUserCSS]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "行内で小さくするUserCSS",
        "content": "行内で小さくするUserCSS",
        "whole": "[行内で小さくするUserCSS]",
      },
      "children": "行内で小さくするUserCSS",
    },
  },
}, {
  "id": "6637563b71b3c20000e3f962",
  "text": "\t`+!`: [+! abcABC123あいう]",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1714902586,
  "updated": 1714902613,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t`+!`: [+! abcABC123あいう]",
      "tag": "\t",
      "content": "`+!`: [+! abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`+!`", "content": "+!" },
        "children": "+!",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[+! abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "+!",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "6637565771b3c20000e3f963",
  "text": "\t\t[明朝体記法]",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1714902615,
  "updated": 1714902618,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t\t[明朝体記法]",
      "tag": "\t\t",
      "content": "[明朝体記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "明朝体記法",
        "content": "明朝体記法",
        "whole": "[明朝体記法]",
      },
      "children": "明朝体記法",
    },
  },
}, {
  "id": "66ed230571b3c20000fb24f5",
  "text": " `+_`:[+_ abcABC123あいう]",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1726817030,
  "updated": 1726817440,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `+_`:[+_ abcABC123あいう]",
      "tag": " ",
      "content": "`+_`:[+_ abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`+_`", "content": "+_" },
        "children": "+_",
      },
      ":",
      {
        "type": "deco",
        "unit": {
          "whole": "[+_ abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "+_",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": true,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "66ed234d71b3c20000fb24f8",
  "text": " \t`_+`:[_+ abcABC123あいう]",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1726817107,
  "updated": 1726817452,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t`_+`:[_+ abcABC123あいう]",
      "tag": " \t",
      "content": "`_+`:[_+ abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`_+`", "content": "_+" },
        "children": "_+",
      },
      ":",
      {
        "type": "deco",
        "unit": {
          "whole": "[_+ abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "_+",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": true,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "66ed231e71b3c20000fb24f7",
  "text": " \t[文法エラー・警告をIDE風に表示するUserCSS]",
  "userId": "661b6e882a96e9002371b3c2",
  "created": 1726817055,
  "updated": 1726817065,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " \t[文法エラー・警告をIDE風に表示するUserCSS]",
      "tag": " \t",
      "content": "[文法エラー・警告をIDE風に表示するUserCSS]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "文法エラー・警告をIDE風に表示するUserCSS",
        "content": "文法エラー・警告をIDE風に表示するUserCSS",
        "whole": "[文法エラー・警告をIDE風に表示するUserCSS]",
      },
      "children": "文法エラー・警告をIDE風に表示するUserCSS",
    },
  },
}, {
  "id": "61dd314f7838e30000494402",
  "text": "未使用",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641886031,
  "updated": 1641886036,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": "未使用",
}, {
  "id": "61dd31477838e300004943fe",
  "text": " `(`: [( abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641886023,
  "updated": 1641886023,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `(`: [( abcABC123あいう]",
      "tag": " ",
      "content": "`(`: [( abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`(`", "content": "(" },
        "children": "(",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[( abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "(",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "61dd31477838e300004943ff",
  "text": " `)`: [) abcABC123あいう]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641886023,
  "updated": 1641886023,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `)`: [) abcABC123あいう]",
      "tag": " ",
      "content": "`)`: [) abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`)`", "content": ")" },
        "children": ")",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[) abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": ")",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "6278dc917838e30000742aa0",
  "text":
    " \t単体で使われていないだけで、`(`と`)`を同時に使うと[iconを丸くする記法]になる[Mijinko_SD.icon]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1652087941,
  "updated": 1652088139,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " \t単体で使われていないだけで、`(`と`)`を同時に使うと[iconを丸くする記法]になる[Mijinko_SD.icon]",
      "tag": " \t",
      "content":
        "単体で使われていないだけで、`(`と`)`を同時に使うと[iconを丸くする記法]になる[Mijinko_SD.icon]",
    },
    "children": [
      "単体で使われていないだけで、",
      {
        "type": "code",
        "unit": { "whole": "`(`", "content": "(" },
        "children": "(",
      },
      "と",
      {
        "type": "code",
        "unit": { "whole": "`)`", "content": ")" },
        "children": ")",
      },
      "を同時に使うと",
      {
        "type": "link",
        "unit": {
          "page": "iconを丸くする記法",
          "content": "iconを丸くする記法",
          "whole": "[iconを丸くする記法]",
        },
        "children": "iconを丸くする記法",
      },
      "になる",
      {
        "type": "icon",
        "unit": {
          "page": "Mijinko_SD",
          "size": 1,
          "content": "Mijinko_SD.icon",
          "whole": "[Mijinko_SD.icon]",
        },
        "children": "Mijinko_SD.icon",
      },
    ],
  },
}, {
  "id": "6278dd177838e30000742aa1",
  "text":
    " \t今後単体で使う場合は、`.deco-\\):not(.deco-\\() {}`といった感じで両方使われた場合は無効化する工夫が必要になるかもしれない",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1652088075,
  "updated": 1652088137,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " \t今後単体で使う場合は、`.deco-\\):not(.deco-\\() {}`といった感じで両方使われた場合は無効化する工夫が必要になるかもしれない",
      "tag": " \t",
      "content":
        "今後単体で使う場合は、`.deco-\\):not(.deco-\\() {}`といった感じで両方使われた場合は無効化する工夫が必要になるかもしれない",
    },
    "children": [
      "今後単体で使う場合は、",
      {
        "type": "code",
        "unit": {
          "whole": "`.deco-\\):not(.deco-\\() {}`",
          "content": ".deco-\\):not(.deco-\\() {}",
        },
        "children": ".deco-\\):not(.deco-\\() {}",
      },
      "といった感じで両方使われた場合は無効化する工夫が必要になるかもしれない",
    ],
  },
}, {
  "id": "61dd31477838e30000494400",
  "text": " `+`: [+ abcABC123あいう]",
  "userId": "6226a730abe6b0001dc1f87f",
  "created": 1641886023,
  "updated": 1648356403,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `+`: [+ abcABC123あいう]",
      "tag": " ",
      "content": "`+`: [+ abcABC123あいう]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "`+`", "content": "+" },
        "children": "+",
      },
      ": ",
      {
        "type": "deco",
        "unit": {
          "whole": "[+ abcABC123あいう]",
          "content": "abcABC123あいう",
          "deco": "+",
          "strong": 0,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "abcABC123あいう",
      },
    ],
  },
}, {
  "id": "6278e4e17838e30000c3c3a6",
  "text":
    " 　[(提案)+のブラケット記法はサンドボックス的な用途のために残しておきたい]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1652090082,
  "updated": 1652090097,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " 　[(提案)+のブラケット記法はサンドボックス的な用途のために残しておきたい]",
      "tag": " 　",
      "content":
        "[(提案)+のブラケット記法はサンドボックス的な用途のために残しておきたい]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page":
          "(提案)+のブラケット記法はサンドボックス的な用途のために残しておきたい",
        "content":
          "(提案)+のブラケット記法はサンドボックス的な用途のために残しておきたい",
        "whole":
          "[(提案)+のブラケット記法はサンドボックス的な用途のために残しておきたい]",
      },
      "children":
        "(提案)+のブラケット記法はサンドボックス的な用途のために残しておきたい",
    },
  },
}, {
  "id": "623fed0ac1f87f0000ea2098",
  "text":
    "`[(使用されていない|空いている)(装飾|かっこ|ブラケット)記法の記号]` [, [(使用されていない装飾記法の記号)​]] [, [(使用されていないかっこ記法の記号)​]] [, [(使用されていないブラケット記法の記号)​]] [, [(空いている装飾記法の記号)​]] [, [(空いているかっこ記法の記号)​]] [, [(空いているブラケット記法の記号)​]]",
  "userId": "5d89b1f60230ae001779e113",
  "created": 1648356619,
  "updated": 1652090579,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": [
    {
      "type": "code",
      "unit": {
        "whole":
          "`[(使用されていない|空いている)(装飾|かっこ|ブラケット)記法の記号]`",
        "content":
          "[(使用されていない|空いている)(装飾|かっこ|ブラケット)記法の記号]",
      },
      "children":
        "[(使用されていない|空いている)(装飾|かっこ|ブラケット)記法の記号]",
    },
    " ",
    {
      "type": "deco",
      "unit": {
        "whole": "[, [(使用されていない装飾記法の記号)​]]",
        "content": "[(使用されていない装飾記法の記号)​]",
        "deco": ",",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "link",
        "unit": {
          "page": "(使用されていない装飾記法の記号)​",
          "content": "(使用されていない装飾記法の記号)​",
          "whole": "[(使用されていない装飾記法の記号)​]",
        },
        "children": "(使用されていない装飾記法の記号)​",
      },
    },
    " ",
    {
      "type": "deco",
      "unit": {
        "whole": "[, [(使用されていないかっこ記法の記号)​]]",
        "content": "[(使用されていないかっこ記法の記号)​]",
        "deco": ",",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "link",
        "unit": {
          "page": "(使用されていないかっこ記法の記号)​",
          "content": "(使用されていないかっこ記法の記号)​",
          "whole": "[(使用されていないかっこ記法の記号)​]",
        },
        "children": "(使用されていないかっこ記法の記号)​",
      },
    },
    " ",
    {
      "type": "deco",
      "unit": {
        "whole": "[, [(使用されていないブラケット記法の記号)​]]",
        "content": "[(使用されていないブラケット記法の記号)​]",
        "deco": ",",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "link",
        "unit": {
          "page": "(使用されていないブラケット記法の記号)​",
          "content": "(使用されていないブラケット記法の記号)​",
          "whole": "[(使用されていないブラケット記法の記号)​]",
        },
        "children": "(使用されていないブラケット記法の記号)​",
      },
    },
    " ",
    {
      "type": "deco",
      "unit": {
        "whole": "[, [(空いている装飾記法の記号)​]]",
        "content": "[(空いている装飾記法の記号)​]",
        "deco": ",",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "link",
        "unit": {
          "page": "(空いている装飾記法の記号)​",
          "content": "(空いている装飾記法の記号)​",
          "whole": "[(空いている装飾記法の記号)​]",
        },
        "children": "(空いている装飾記法の記号)​",
      },
    },
    " ",
    {
      "type": "deco",
      "unit": {
        "whole": "[, [(空いているかっこ記法の記号)​]]",
        "content": "[(空いているかっこ記法の記号)​]",
        "deco": ",",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "link",
        "unit": {
          "page": "(空いているかっこ記法の記号)​",
          "content": "(空いているかっこ記法の記号)​",
          "whole": "[(空いているかっこ記法の記号)​]",
        },
        "children": "(空いているかっこ記法の記号)​",
      },
    },
    " ",
    {
      "type": "deco",
      "unit": {
        "whole": "[, [(空いているブラケット記法の記号)​]]",
        "content": "[(空いているブラケット記法の記号)​]",
        "deco": ",",
        "strong": 0,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "link",
        "unit": {
          "page": "(空いているブラケット記法の記号)​",
          "content": "(空いているブラケット記法の記号)​",
          "whole": "[(空いているブラケット記法の記号)​]",
        },
        "children": "(空いているブラケット記法の記号)​",
      },
    },
  ],
}, {
  "id": "623fec2dc1f87f0000398fe3",
  "text":
    "　（使用されていない記号を検索したらここに飛ぶ様にしたいという意図のリンクです↑）[blu3mo.icon]",
  "userId": "6226a730abe6b0001dc1f87f",
  "created": 1648356398,
  "updated": 1648356660,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "　（使用されていない記号を検索したらここに飛ぶ様にしたいという意図のリンクです↑）[blu3mo.icon]",
      "tag": "　",
      "content":
        "（使用されていない記号を検索したらここに飛ぶ様にしたいという意図のリンクです↑）[blu3mo.icon]",
    },
    "children": [
      "（使用されていない記号を検索したらここに飛ぶ様にしたいという意図のリンクです↑）",
      {
        "type": "icon",
        "unit": {
          "page": "blu3mo",
          "size": 1,
          "content": "blu3mo.icon",
          "whole": "[blu3mo.icon]",
        },
        "children": "blu3mo.icon",
      },
    ],
  },
}, {
  "id": "623fed1cc1f87f0000ea2099",
  "text": "\t\tなるほど[Mijinko_SD.icon]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1648356636,
  "updated": 1648356658,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t\tなるほど[Mijinko_SD.icon]",
      "tag": "\t\t",
      "content": "なるほど[Mijinko_SD.icon]",
    },
    "children": ["なるほど", {
      "type": "icon",
      "unit": {
        "page": "Mijinko_SD",
        "size": 1,
        "content": "Mijinko_SD.icon",
        "whole": "[Mijinko_SD.icon]",
      },
      "children": "Mijinko_SD.icon",
    }],
  },
}, {
  "id": "623fed2f7838e300007c088e",
  "text": "[文字装飾記法]の書き方",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1648356656,
  "updated": 1672985565,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": [{
    "type": "link",
    "unit": {
      "page": "文字装飾記法",
      "content": "文字装飾記法",
      "whole": "[文字装飾記法]",
    },
    "children": "文字装飾記法",
  }, "の書き方"],
}, {
  "id": "63b7bbd21280f0000059b3c8",
  "text": " `[何か 適用文字]`",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985553,
  "updated": 1672985553,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " `[何か 適用文字]`",
      "tag": " ",
      "content": "`[何か 適用文字]`",
    },
    "children": {
      "type": "code",
      "unit": { "whole": "`[何か 適用文字]`", "content": "[何か 適用文字]" },
      "children": "[何か 適用文字]",
    },
  },
}, {
  "id": "63b7bbd21280f0000059b3c9",
  "text": "  ` [* 太字]`：[* 太字]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985553,
  "updated": 1672985573,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  ` [* 太字]`：[* 太字]",
      "tag": "  ",
      "content": "` [* 太字]`：[* 太字]",
    },
    "children": [
      {
        "type": "code",
        "unit": { "whole": "` [* 太字]`", "content": " [* 太字]" },
        "children": " [* 太字]",
      },
      "：",
      {
        "type": "deco",
        "unit": {
          "whole": "[* 太字]",
          "content": "太字",
          "deco": "*",
          "strong": 1,
          "italic": false,
          "strike": false,
          "underline": false,
        },
        "children": "太字",
      },
    ],
  },
}, {
  "id": "63b7bbe61280f0000059b3ca",
  "text": " 記号を重ねると効果が重複する(順不同)",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985574,
  "updated": 1672985741,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " 記号を重ねると効果が重複する(順不同)",
      "tag": " ",
      "content": "記号を重ねると効果が重複する(順不同)",
    },
    "children": "記号を重ねると効果が重複する(順不同)",
  },
}, {
  "id": "63b7bc711280f0000059b3cd",
  "text": "  [*-/_ 色々てんこもり]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985713,
  "updated": 1672985725,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [*-/_ 色々てんこもり]",
      "tag": "  ",
      "content": "[*-/_ 色々てんこもり]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[*-/_ 色々てんこもり]",
        "content": "色々てんこもり",
        "deco": "*-/_",
        "strong": 1,
        "italic": true,
        "strike": true,
        "underline": true,
      },
      "children": "色々てんこもり",
    },
  },
}, {
  "id": "63b7bbfe1280f0000059b3cb",
  "text": "  UserCSSで特殊コンボを設定している場合もある",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985598,
  "updated": 1672985617,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  UserCSSで特殊コンボを設定している場合もある",
      "tag": "  ",
      "content": "UserCSSで特殊コンボを設定している場合もある",
    },
    "children": "UserCSSで特殊コンボを設定している場合もある",
  },
}, {
  "id": "63b7bbd11280f0000059b3c7",
  "text": "   例：[-!***** [イドバタニシ.icon]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985552,
  "updated": 1672985744,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "   例：[-!***** [イドバタニシ.icon]]",
      "tag": "   ",
      "content": "例：[-!***** [イドバタニシ.icon]]",
    },
    "children": ["例：", {
      "type": "deco",
      "unit": {
        "whole": "[-!***** [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "-!*****",
        "strong": 5,
        "italic": false,
        "strike": true,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    }],
  },
}, {
  "id": "63b7bc331280f0000059b3cc",
  "text": " 入れ子",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985650,
  "updated": 1672986262,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " 入れ子", "tag": " ", "content": "入れ子" },
    "children": "入れ子",
  },
}, {
  "id": "63b7bc9a1280f0000059b3cf",
  "text": "  [[ [- マーカー記法が適用されない]よう]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985754,
  "updated": 1672985780,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [[ [- マーカー記法が適用されない]よう]]",
      "tag": "  ",
      "content": "[[ [- マーカー記法が適用されない]よう]]",
    },
    "children": ["[[ ", {
      "type": "deco",
      "unit": {
        "whole": "[- マーカー記法が適用されない]",
        "content": "マーカー記法が適用されない",
        "deco": "-",
        "strong": 0,
        "italic": false,
        "strike": true,
        "underline": false,
      },
      "children": "マーカー記法が適用されない",
    }, "よう]]"],
  },
}, {
  "id": "63b7bcb71280f0000059b3d1",
  "text":
    "  [* [- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる]。[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985782,
  "updated": 1672986241,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [* [- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる]。[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
      "tag": "  ",
      "content":
        "[* [- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる]。[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole":
          "[* [- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる]。[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
        "content":
          "[- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる]。[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "deco": "*",
        "strong": 1,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": [
        {
          "type": "link",
          "unit": {
            "page":
              "- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる",
            "content":
              "- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる",
            "whole":
              "[- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる]",
          },
          "children":
            "- 文字装飾記法内部のブラケットは、問答無用でリンクか埋め込み記法とみなさされる",
        },
        "。",
        {
          "type": "gyazo",
          "unit": {
            "whole":
              "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
            "content":
              "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
          },
          "children":
            "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
        },
      ],
    },
  },
}, {
  "id": "63b7be821280f0000059b3d7",
  "text": "  [- [$ \\text{数式}]は入れ子にできる]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672986241,
  "updated": 1672986365,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [- [$ \\text{数式}]は入れ子にできる]",
      "tag": "  ",
      "content": "[- [$ \\text{数式}]は入れ子にできる]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[- [$ \\text{数式}]は入れ子にできる]",
        "content": "[$ \\text{数式}]は入れ子にできる",
        "deco": "-",
        "strong": 0,
        "italic": false,
        "strike": true,
        "underline": false,
      },
      "children": [{
        "type": "deco-formula",
        "unit": {
          "whole": "[$ \\text{数式}]",
          "content": "$ \\text{数式}",
          "formula": "\\text{数式}",
        },
        "children": "$ \\text{数式}",
      }, "は入れ子にできる"],
    },
  },
}, {
  "id": "63b7bf001280f0000059b3d8",
  "text": "  [_ 空白記法は入れられない[  ]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672986367,
  "updated": 1672986377,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [_ 空白記法は入れられない[  ]]",
      "tag": "  ",
      "content": "[_ 空白記法は入れられない[  ]]",
    },
    "children": ["[_ 空白記法は入れられない", {
      "type": "blank",
      "unit": { "content": "  ", "whole": "[  ]" },
      "children": "  ",
    }, "]"],
  },
}, {
  "id": "63b7bf191280f0000059b3d9",
  "text": "  [- #hashtag 、icon[イドバタニシ.icon]は入れられる]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672986393,
  "updated": 1672986445,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [- #hashtag 、icon[イドバタニシ.icon]は入れられる]",
      "tag": "  ",
      "content": "[- #hashtag 、icon[イドバタニシ.icon]は入れられる]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[- #hashtag 、icon[イドバタニシ.icon]は入れられる]",
        "content": "#hashtag 、icon[イドバタニシ.icon]は入れられる",
        "deco": "-",
        "strong": 0,
        "italic": false,
        "strike": true,
        "underline": false,
      },
      "children": [
        {
          "type": "hashTag",
          "unit": {
            "page": "hashtag",
            "tag": "#",
            "content": "hashtag",
            "whole": "#hashtag",
          },
          "children": "#hashtag",
        },
        " 、icon",
        {
          "type": "icon",
          "unit": {
            "page": "イドバタニシ",
            "size": 1,
            "content": "イドバタニシ.icon",
            "whole": "[イドバタニシ.icon]",
          },
          "children": "イドバタニシ.icon",
        },
        "は入れられる",
      ],
    },
  },
}, {
  "id": "63b7be3c1280f0000059b3d6",
  "text":
    "  [* [タイトルつきリンク https://scrapbox.io/help-jp/ブラケティング]も認識可]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672986171,
  "updated": 1672986173,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [* [タイトルつきリンク https://scrapbox.io/help-jp/ブラケティング]も認識可]",
      "tag": "  ",
      "content":
        "[* [タイトルつきリンク https://scrapbox.io/help-jp/ブラケティング]も認識可]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole":
          "[* [タイトルつきリンク https://scrapbox.io/help-jp/ブラケティング]も認識可]",
        "content":
          "[タイトルつきリンク https://scrapbox.io/help-jp/ブラケティング]も認識可",
        "deco": "*",
        "strong": 1,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": [{
        "type": "urlLink",
        "unit": {
          "link": "https://scrapbox.io/help-jp/ブラケティング",
          "space": " ",
          "title": "タイトルつきリンク",
          "content":
            "タイトルつきリンク https://scrapbox.io/help-jp/ブラケティング",
          "whole":
            "[タイトルつきリンク https://scrapbox.io/help-jp/ブラケティング]",
        },
        "children":
          "タイトルつきリンク https://scrapbox.io/help-jp/ブラケティング",
      }, "も認識可"],
    },
  },
}, {
  "id": "63b7bd711280f0000059b3d2",
  "text":
    "  [* 二重ブラケティングする記法は埋め込められない[[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985969,
  "updated": 1672986466,
  "section": { "number": 8, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [* 二重ブラケティングする記法は埋め込められない[[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]]",
      "tag": "  ",
      "content":
        "[* 二重ブラケティングする記法は埋め込められない[[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]]",
    },
    "children": [{
      "type": "deco",
      "unit": {
        "whole":
          "[* 二重ブラケティングする記法は埋め込められない[[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
        "content":
          "二重ブラケティングする記法は埋め込められない[[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "deco": "*",
        "strong": 1,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": ["二重ブラケティングする記法は埋め込められない[", {
        "type": "gyazo",
        "unit": {
          "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
          "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
        },
        "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      }],
    }, "]"],
  },
}, {
  "id": "63b7bc921280f0000059b3ce",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672985746,
  "updated": 1672985746,
  "section": { "number": 8, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61dd2c167838e30000dc9cce",
  "text": "[** 箇条書き]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884695,
  "updated": 1641884700,
  "section": { "number": 9, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** 箇条書き]",
      "content": "箇条書き",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "箇条書き",
  },
}, {
  "id": "61dd2c1d7838e30000dc9cd0",
  "text": " 1",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884701,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " 1", "tag": " ", "content": "1" },
    "children": "1",
  },
}, {
  "id": "61dd2c277838e30000dc9cd1",
  "text": "  2",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "  2", "tag": "  ", "content": "2" },
    "children": "2",
  },
}, {
  "id": "61dd2c277838e30000dc9cd2",
  "text": "   3",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "   3", "tag": "   ", "content": "3" },
    "children": "3",
  },
}, {
  "id": "61dd2c277838e30000dc9cd3",
  "text": "    4",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "    4", "tag": "    ", "content": "4" },
    "children": "4",
  },
}, {
  "id": "61dd2c277838e30000dc9cd4",
  "text": "     5 ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "     5 ", "tag": "     ", "content": "5 " },
    "children": "5 ",
  },
}, {
  "id": "61dd2c277838e30000dc9cd5",
  "text": "      6",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "      6", "tag": "      ", "content": "6" },
    "children": "6",
  },
}, {
  "id": "61dd2c277838e30000dc9cd6",
  "text": "       7",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "       7", "tag": "       ", "content": "7" },
    "children": "7",
  },
}, {
  "id": "61dd2c277838e30000dc9cd7",
  "text": " 1. ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "numberList": { "digit": 1 },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " 1. ", "tag": " ", "content": "1. " },
    "children": "1. ",
  },
}, {
  "id": "61dd2c277838e30000dc9cd8",
  "text": "  2. ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "numberList": { "digit": 1 },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "  2. ", "tag": "  ", "content": "2. " },
    "children": "2. ",
  },
}, {
  "id": "61dd2c277838e30000dc9cd9",
  "text": "   3. ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "numberList": { "digit": 1 },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "   3. ", "tag": "   ", "content": "3. " },
    "children": "3. ",
  },
}, {
  "id": "61dd2c277838e30000dc9cda",
  "text": "    4. ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "numberList": { "digit": 1 },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "    4. ", "tag": "    ", "content": "4. " },
    "children": "4. ",
  },
}, {
  "id": "61dd2c277838e30000dc9cdb",
  "text": "     5. ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "numberList": { "digit": 1 },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "     5. ", "tag": "     ", "content": "5. " },
    "children": "5. ",
  },
}, {
  "id": "61dd2c277838e30000dc9cdc",
  "text": "      6. ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "numberList": { "digit": 1 },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "      6. ", "tag": "      ", "content": "6. " },
    "children": "6. ",
  },
}, {
  "id": "61dd2c277838e30000dc9cdd",
  "text": "       7. ",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884711,
  "updated": 1641884711,
  "section": { "number": 9, "start": false, "end": false },
  "numberList": { "digit": 1 },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "       7. ", "tag": "       ", "content": "7. " },
    "children": "7. ",
  },
}, {
  "id": "61fe343f7838e3000072858f",
  "text": " [箇条書きのバレットをFontAwesomeにするUserCSS]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1644049470,
  "updated": 1644049477,
  "section": { "number": 9, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [箇条書きのバレットをFontAwesomeにするUserCSS]",
      "tag": " ",
      "content": "[箇条書きのバレットをFontAwesomeにするUserCSS]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "箇条書きのバレットをFontAwesomeにするUserCSS",
        "content": "箇条書きのバレットをFontAwesomeにするUserCSS",
        "whole": "[箇条書きのバレットをFontAwesomeにするUserCSS]",
      },
      "children": "箇条書きのバレットをFontAwesomeにするUserCSS",
    },
  },
}, {
  "id": "61dd2c887838e30000dc9ce0",
  "text": "",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641884808,
  "updated": 1641884808,
  "section": { "number": 9, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61df89997838e300001de3a0",
  "text": "[** アイコン]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039706,
  "updated": 1642039710,
  "section": { "number": 10, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** アイコン]",
      "content": "アイコン",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "アイコン",
  },
}, {
  "id": "61df899e7838e300001de3a2",
  "text": "`[イドバタニシ.icon]`[イドバタニシ.icon] アイコン",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642039710,
  "updated": 1734767912,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": [{
    "type": "code",
    "unit": {
      "whole": "`[イドバタニシ.icon]`",
      "content": "[イドバタニシ.icon]",
    },
    "children": "[イドバタニシ.icon]",
  }, {
    "type": "icon",
    "unit": {
      "page": "イドバタニシ",
      "size": 1,
      "content": "イドバタニシ.icon",
      "whole": "[イドバタニシ.icon]",
    },
    "children": "イドバタニシ.icon",
  }, " アイコン"],
}, {
  "id": "676659471280f000000d134d",
  "text": "`[イドバタニシ.icon*3]`[イドバタニシ.icon*3]繰り返しアイコン",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767912,
  "updated": 1734767912,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": [{
    "type": "code",
    "unit": {
      "whole": "`[イドバタニシ.icon*3]`",
      "content": "[イドバタニシ.icon*3]",
    },
    "children": "[イドバタニシ.icon*3]",
  }, {
    "type": "icon",
    "unit": {
      "page": "イドバタニシ",
      "size": 3,
      "content": "イドバタニシ.icon*3",
      "whole": "[イドバタニシ.icon*3]",
    },
    "children": "イドバタニシ.icon*3",
  }, "繰り返しアイコン"],
}, {
  "id": "6766594f1280f000000d134e",
  "text":
    "`[イドバタニシ.iconx3]`[イドバタニシ.iconx3]繰り返しアイコン(`x`も可)",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767912,
  "updated": 1734767912,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": [
    {
      "type": "code",
      "unit": {
        "whole": "`[イドバタニシ.iconx3]`",
        "content": "[イドバタニシ.iconx3]",
      },
      "children": "[イドバタニシ.iconx3]",
    },
    {
      "type": "icon",
      "unit": {
        "page": "イドバタニシ",
        "size": 3,
        "content": "イドバタニシ.iconx3",
        "whole": "[イドバタニシ.iconx3]",
      },
      "children": "イドバタニシ.iconx3",
    },
    "繰り返しアイコン(",
    {
      "type": "code",
      "unit": { "whole": "`x`", "content": "x" },
      "children": "x",
    },
    "も可)",
  ],
}, {
  "id": "61df899e7838e300001de3a3",
  "text": "[イドバタニシ.icon*1000]繰り返しアイコン (最大1000個)",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": [{
    "type": "icon",
    "unit": {
      "page": "イドバタニシ",
      "size": 1000,
      "content": "イドバタニシ.icon*1000",
      "whole": "[イドバタニシ.icon*1000]",
    },
    "children": "イドバタニシ.icon*1000",
  }, "繰り返しアイコン (最大1000個)"],
}, {
  "id": "61df899e7838e300001de3a4",
  "text": "[[イドバタニシ.icon]]大きなアイコン",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": [{
    "type": "strong-icon",
    "unit": {
      "page": "イドバタニシ",
      "size": 1,
      "content": "イドバタニシ.icon",
      "whole": "[[イドバタニシ.icon]]",
    },
    "children": "イドバタニシ.icon",
  }, "大きなアイコン"],
}, {
  "id": "61df899e7838e300001de3a5",
  "text": " [* [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [* [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[* [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[* [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "*",
        "strong": 1,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3a6",
  "text": " [** [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [** [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[** [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[** [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "**",
        "strong": 2,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3a7",
  "text": " [*** [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [*** [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[*** [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[*** [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "***",
        "strong": 3,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3a8",
  "text": " [**** [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [**** [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[**** [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[**** [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "****",
        "strong": 4,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3a9",
  "text": " [***** [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [***** [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[***** [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[***** [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "*****",
        "strong": 5,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3aa",
  "text": " [****** [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [****** [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[****** [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[****** [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "******",
        "strong": 6,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3ab",
  "text": " [******* [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [******* [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[******* [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[******* [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "*******",
        "strong": 7,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3ac",
  "text": " [******** [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [******** [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[******** [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[******** [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "********",
        "strong": 8,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3ad",
  "text": " [********* [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [********* [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[********* [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[********* [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "*********",
        "strong": 9,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899e7838e300001de3ae",
  "text": " [********** [イドバタニシ.icon]]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039710,
  "updated": 1642039710,
  "section": { "number": 10, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [********** [イドバタニシ.icon]]",
      "tag": " ",
      "content": "[********** [イドバタニシ.icon]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole": "[********** [イドバタニシ.icon]]",
        "content": "[イドバタニシ.icon]",
        "deco": "**********",
        "strong": 10,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": {
        "type": "icon",
        "unit": {
          "page": "イドバタニシ",
          "size": 1,
          "content": "イドバタニシ.icon",
          "whole": "[イドバタニシ.icon]",
        },
        "children": "イドバタニシ.icon",
      },
    },
  },
}, {
  "id": "61df899a7838e300001de3a1",
  "text": "",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039706,
  "updated": 1642039706,
  "section": { "number": 10, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61dd28d97838e30000dc9cbd",
  "text": "[** 埋め込み]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883866,
  "updated": 1641883873,
  "section": { "number": 11, "start": true, "end": false },
  "nodes": {
    "type": "deco",
    "unit": {
      "whole": "[** 埋め込み]",
      "content": "埋め込み",
      "deco": "**",
      "strong": 2,
      "italic": false,
      "strike": false,
      "underline": false,
    },
    "children": "埋め込み",
  },
}, {
  "id": "624de3cb1280f0000050bf0e",
  "text": "画像",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271755,
  "updated": 1649271756,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": "画像",
}, {
  "id": "61dd290a7838e30000dc9cc3",
  "text": "\t単体画像",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883914,
  "updated": 1641883930,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "\t単体画像", "tag": "\t", "content": "単体画像" },
    "children": "単体画像",
  },
}, {
  "id": "61dd28e17838e30000dc9cc0",
  "text": "  [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641883874,
  "updated": 1649271758,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
      "tag": "  ",
      "content": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
    },
    "children": {
      "type": "gyazo",
      "unit": {
        "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      },
      "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
    },
  },
}, {
  "id": "63b7bd9d1280f0000059b3d4",
  "text": " 高さ制限をなくす",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672986012,
  "updated": 1672986081,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " 高さ制限をなくす",
      "tag": " ",
      "content": "高さ制限をなくす",
    },
    "children": "高さ制限をなくす",
  },
}, {
  "id": "63b7bd981280f0000059b3d3",
  "text": "  [[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1672986007,
  "updated": 1672986010,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
      "tag": "  ",
      "content": "[[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
    },
    "children": {
      "type": "strongGyazo",
      "unit": {
        "whole": "[[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
        "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      },
      "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
    },
  },
}, {
  "id": "6205471fe5172d00002d0db0",
  "text": "　リンク付き画像",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1644513056,
  "updated": 1649271763,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "　リンク付き画像",
      "tag": "　",
      "content": "リンク付き画像",
    },
    "children": "リンク付き画像",
  },
}, {
  "id": "62054724e5172d00002d0db1",
  "text":
    "  [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png https://google.com]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1644513061,
  "updated": 1649271760,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png https://google.com]",
      "tag": "  ",
      "content":
        "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png https://google.com]",
    },
    "children": {
      "type": "gyazoLink",
      "unit": {
        "whole":
          "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png https://google.com]",
        "content":
          "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png https://google.com",
        "link": "https://google.com",
        "gyazo": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      },
      "children":
        "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png https://google.com",
    },
  },
}, {
  "id": "624de3f01280f0000050bf0f",
  "text": " Gyazo",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271791,
  "updated": 1649271798,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " Gyazo", "tag": " ", "content": "Gyazo" },
    "children": "Gyazo",
  },
}, {
  "id": "624de3f71280f0000050bf11",
  "text": "  [https://gyazo.com/da78df293f9e83a74b5402411e2f2e01]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271798,
  "updated": 1649271808,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [https://gyazo.com/da78df293f9e83a74b5402411e2f2e01]",
      "tag": "  ",
      "content": "[https://gyazo.com/da78df293f9e83a74b5402411e2f2e01]",
    },
    "children": {
      "type": "gyazo",
      "unit": {
        "whole": "[https://gyazo.com/da78df293f9e83a74b5402411e2f2e01]",
        "content": "https://gyazo.com/da78df293f9e83a74b5402411e2f2e01",
      },
      "children": "https://gyazo.com/da78df293f9e83a74b5402411e2f2e01",
    },
  },
}, {
  "id": "624de4001280f0000050bf12",
  "text": " リンク付きGyazo",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271808,
  "updated": 1649271818,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " リンク付きGyazo",
      "tag": " ",
      "content": "リンク付きGyazo",
    },
    "children": "リンク付きGyazo",
  },
}, {
  "id": "624de40b1280f0000050bf13",
  "text":
    "  [https://gyazo.com/da78df293f9e83a74b5402411e2f2e01  https://google.com]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649271818,
  "updated": 1649271829,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [https://gyazo.com/da78df293f9e83a74b5402411e2f2e01  https://google.com]",
      "tag": "  ",
      "content":
        "[https://gyazo.com/da78df293f9e83a74b5402411e2f2e01  https://google.com]",
    },
    "children": {
      "type": "gyazoLink",
      "unit": {
        "whole":
          "[https://gyazo.com/da78df293f9e83a74b5402411e2f2e01  https://google.com]",
        "content":
          "https://gyazo.com/da78df293f9e83a74b5402411e2f2e01  https://google.com",
        "link": "https://google.com",
        "gyazo": "https://gyazo.com/da78df293f9e83a74b5402411e2f2e01",
      },
      "children":
        "https://gyazo.com/da78df293f9e83a74b5402411e2f2e01  https://google.com",
    },
  },
}, {
  "id": "61dd29107838e30000dc9cc4",
  "text": "\t5連続画像",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883921,
  "updated": 1641883933,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "\t5連続画像", "tag": "\t", "content": "5連続画像" },
    "children": "5連続画像",
  },
}, {
  "id": "61dd29057838e30000dc9cc2",
  "text":
    "  [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641883909,
  "updated": 1649271767,
  "section": { "number": 11, "start": false, "end": false },
  "numberOfImages": 5,
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
      "tag": "  ",
      "content":
        "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
    },
    "children": [{
      "type": "gyazo",
      "unit": {
        "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      },
      "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
    }, {
      "type": "gyazo",
      "unit": {
        "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      },
      "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
    }, {
      "type": "gyazo",
      "unit": {
        "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      },
      "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
    }, {
      "type": "gyazo",
      "unit": {
        "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      },
      "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
    }, {
      "type": "gyazo",
      "unit": {
        "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      },
      "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
    }],
  },
}, {
  "id": "61fe79477838e30000a0ba9c",
  "text": "\t[画像を並べて表示する記法]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1644067143,
  "updated": 1649271774,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t[画像を並べて表示する記法]",
      "tag": "\t",
      "content": "[画像を並べて表示する記法]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "画像を並べて表示する記法",
        "content": "画像を並べて表示する記法",
        "whole": "[画像を並べて表示する記法]",
      },
      "children": "画像を並べて表示する記法",
    },
  },
}, {
  "id": "61fe794b7838e30000a0ba9d",
  "text":
    "\t\t[*****| [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1644067147,
  "updated": 1649271774,
  "section": { "number": 11, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "\t\t[*****| [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
      "tag": "\t\t",
      "content":
        "[*****| [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
    },
    "children": {
      "type": "deco",
      "unit": {
        "whole":
          "[*****| [https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]]",
        "content":
          "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png][https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
        "deco": "*****|",
        "strong": 5,
        "italic": false,
        "strike": false,
        "underline": false,
      },
      "children": [{
        "type": "gyazo",
        "unit": {
          "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
          "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
        },
        "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      }, {
        "type": "gyazo",
        "unit": {
          "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
          "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
        },
        "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      }, {
        "type": "gyazo",
        "unit": {
          "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
          "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
        },
        "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      }, {
        "type": "gyazo",
        "unit": {
          "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
          "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
        },
        "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      }, {
        "type": "gyazo",
        "unit": {
          "whole": "[https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png]",
          "content": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
        },
        "children": "https://i.gyazo.com/da78df293f9e83a74b5402411e2f2e01.png",
      }],
    },
  },
}, {
  "id": "61dd28d97838e30000dc9cbe",
  "text": "",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883866,
  "updated": 1641883866,
  "section": { "number": 11, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61dd72851280f00000ab09e2",
  "text": "[location記法]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902725,
  "updated": 1642117454,
  "section": { "number": 12, "start": true, "end": false },
  "nodes": {
    "type": "link",
    "unit": {
      "page": "location記法",
      "content": "location記法",
      "whole": "[location記法]",
    },
    "children": "location記法",
  },
}, {
  "id": "624deaf71280f0000050bf16",
  "text": " ピンなし",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649273591,
  "updated": 1649273594,
  "section": { "number": 12, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " ピンなし", "tag": " ", "content": "ピンなし" },
    "children": "ピンなし",
  },
}, {
  "id": "624deafd1280f0000050bf17",
  "text": "  [N35.6576943,E139.7452035,Z16]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649273596,
  "updated": 1649273596,
  "section": { "number": 12, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [N35.6576943,E139.7452035,Z16]",
      "tag": "  ",
      "content": "[N35.6576943,E139.7452035,Z16]",
    },
    "children": {
      "type": "location",
      "unit": {
        "whole": "[N35.6576943,E139.7452035,Z16]",
        "content": "N35.6576943,E139.7452035,Z16",
        "latitude": 35.6576943,
        "longitude": 139.7452035,
        "zoom": 16,
      },
      "children": "N35.6576943,E139.7452035,Z16",
    },
  },
}, {
  "id": "624deafe1280f0000050bf18",
  "text": " ピンあり",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649273598,
  "updated": 1649273600,
  "section": { "number": 12, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " ピンあり", "tag": " ", "content": "ピンあり" },
    "children": "ピンあり",
  },
}, {
  "id": "61dd72871280f00000ab09e4",
  "text": "  [N35.6576943,E139.7452035,Z16 東京タワー]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902727,
  "updated": 1649273602,
  "section": { "number": 12, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [N35.6576943,E139.7452035,Z16 東京タワー]",
      "tag": "  ",
      "content": "[N35.6576943,E139.7452035,Z16 東京タワー]",
    },
    "children": {
      "type": "location",
      "unit": {
        "whole": "[N35.6576943,E139.7452035,Z16 東京タワー]",
        "content": "N35.6576943,E139.7452035,Z16 東京タワー",
        "latitude": 35.6576943,
        "longitude": 139.7452035,
        "zoom": 16,
        "title": "東京タワー",
      },
      "children": "N35.6576943,E139.7452035,Z16 東京タワー",
    },
  },
}, {
  "id": "61dd72891280f00000ab09e5",
  "text": " 複数ピン",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902728,
  "updated": 1641902746,
  "section": { "number": 12, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " 複数ピン", "tag": " ", "content": "複数ピン" },
    "children": "複数ピン",
  },
}, {
  "id": "61dfaaee1280f00000faf8d0",
  "text":
    "  [N35.6576943,E139.7452035,Z16 東京タワー|東京プリンスホテル|増上寺|宝珠院|セブン-イレブン+港区飯倉店|ABC-TOKYO+バレエ団|35.657291, 139.744780|ザ・プリンス+パークタワー東京|日本経緯度原点]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642048237,
  "updated": 1642048627,
  "section": { "number": 12, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [N35.6576943,E139.7452035,Z16 東京タワー|東京プリンスホテル|増上寺|宝珠院|セブン-イレブン+港区飯倉店|ABC-TOKYO+バレエ団|35.657291, 139.744780|ザ・プリンス+パークタワー東京|日本経緯度原点]",
      "tag": "  ",
      "content":
        "[N35.6576943,E139.7452035,Z16 東京タワー|東京プリンスホテル|増上寺|宝珠院|セブン-イレブン+港区飯倉店|ABC-TOKYO+バレエ団|35.657291, 139.744780|ザ・プリンス+パークタワー東京|日本経緯度原点]",
    },
    "children": {
      "type": "location",
      "unit": {
        "whole":
          "[N35.6576943,E139.7452035,Z16 東京タワー|東京プリンスホテル|増上寺|宝珠院|セブン-イレブン+港区飯倉店|ABC-TOKYO+バレエ団|35.657291, 139.744780|ザ・プリンス+パークタワー東京|日本経緯度原点]",
        "content":
          "N35.6576943,E139.7452035,Z16 東京タワー|東京プリンスホテル|増上寺|宝珠院|セブン-イレブン+港区飯倉店|ABC-TOKYO+バレエ団|35.657291, 139.744780|ザ・プリンス+パークタワー東京|日本経緯度原点",
        "latitude": 35.6576943,
        "longitude": 139.7452035,
        "zoom": 16,
        "title":
          "東京タワー|東京プリンスホテル|増上寺|宝珠院|セブン-イレブン+港区飯倉店|ABC-TOKYO+バレエ団|35.657291, 139.744780|ザ・プリンス+パークタワー東京|日本経緯度原点",
      },
      "children":
        "N35.6576943,E139.7452035,Z16 東京タワー|東京プリンスホテル|増上寺|宝珠院|セブン-イレブン+港区飯倉店|ABC-TOKYO+バレエ団|35.657291, 139.744780|ザ・プリンス+パークタワー東京|日本経緯度原点",
    },
  },
}, {
  "id": "61dd72851280f00000ab09e3",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902725,
  "updated": 1641902725,
  "section": { "number": 12, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61dfac801280f00000faf8d5",
  "text": "動画",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642048639,
  "updated": 1642048640,
  "section": { "number": 13, "start": true, "end": false },
  "nodes": "動画",
}, {
  "id": "61dd29307838e30000dc9cc6",
  "text": "\tYoutube",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883953,
  "updated": 1641883955,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": "\tYoutube", "tag": "\t", "content": "Youtube" },
    "children": "Youtube",
  },
}, {
  "id": "61dd29337838e30000dc9cc7",
  "text": "\t\t[https://www.youtube.com/watch?v=LSvaOcaUQ3Y]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1641883956,
  "updated": 1641883960,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "\t\t[https://www.youtube.com/watch?v=LSvaOcaUQ3Y]",
      "tag": "\t\t",
      "content": "[https://www.youtube.com/watch?v=LSvaOcaUQ3Y]",
    },
    "children": {
      "type": "youtube",
      "unit": {
        "whole": "[https://www.youtube.com/watch?v=LSvaOcaUQ3Y]",
        "content": "https://www.youtube.com/watch?v=LSvaOcaUQ3Y",
        "videoId": "LSvaOcaUQ3Y",
        "params": {},
      },
      "children": "https://www.youtube.com/watch?v=LSvaOcaUQ3Y",
    },
  },
}, {
  "id": "6766634e1280f000000d134f",
  "text": " Youtube再生リスト",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767912,
  "updated": 1734767912,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " Youtube再生リスト",
      "tag": " ",
      "content": "Youtube再生リスト",
    },
    "children": "Youtube再生リスト",
  },
}, {
  "id": "61dfacbe1280f00000faf8d8",
  "text":
    "  [https://www.youtube.com/playlist?list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642048701,
  "updated": 1649274091,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [https://www.youtube.com/playlist?list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs]",
      "tag": "  ",
      "content":
        "[https://www.youtube.com/playlist?list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs]",
    },
    "children": {
      "type": "youtube",
      "unit": {
        "whole":
          "[https://www.youtube.com/playlist?list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs]",
        "content":
          "https://www.youtube.com/playlist?list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs",
        "listId": "PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs",
        "params": { "list": "PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs" },
      },
      "children":
        "https://www.youtube.com/playlist?list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs",
    },
  },
}, {
  "id": "624dece91280f0000050bf1a",
  "text": " Youtube再生リスト(動画付き)",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649274088,
  "updated": 1649274123,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " Youtube再生リスト(動画付き)",
      "tag": " ",
      "content": "Youtube再生リスト(動画付き)",
    },
    "children": "Youtube再生リスト(動画付き)",
  },
}, {
  "id": "624ded021280f0000050bf1c",
  "text":
    "  [https://www.youtube.com/watch?v=57rdbK4vmKE&list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649274114,
  "updated": 1649274114,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [https://www.youtube.com/watch?v=57rdbK4vmKE&list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs]",
      "tag": "  ",
      "content":
        "[https://www.youtube.com/watch?v=57rdbK4vmKE&list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs]",
    },
    "children": {
      "type": "youtube",
      "unit": {
        "whole":
          "[https://www.youtube.com/watch?v=57rdbK4vmKE&list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs]",
        "content":
          "https://www.youtube.com/watch?v=57rdbK4vmKE&list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs",
        "videoId": "57rdbK4vmKE",
        "params": { "list": "PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs" },
      },
      "children":
        "https://www.youtube.com/watch?v=57rdbK4vmKE&list=PLmoRDY8IgE2Okxy4WWdP95RHXOTGzJfQs",
    },
  },
}, {
  "id": "61dd71031280f00000ab09dd",
  "text": " Youtube Music",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902339,
  "updated": 1641902342,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " Youtube Music",
      "tag": " ",
      "content": "Youtube Music",
    },
    "children": "Youtube Music",
  },
}, {
  "id": "61dfad471280f00000faf8da",
  "text": "  [https://music.youtube.com/watch?v=nj1cre2e6t0]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642048838,
  "updated": 1642048839,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [https://music.youtube.com/watch?v=nj1cre2e6t0]",
      "tag": "  ",
      "content": "[https://music.youtube.com/watch?v=nj1cre2e6t0]",
    },
    "children": {
      "type": "youtube",
      "unit": {
        "whole": "[https://music.youtube.com/watch?v=nj1cre2e6t0]",
        "content": "https://music.youtube.com/watch?v=nj1cre2e6t0",
        "videoId": "nj1cre2e6t0",
        "params": {},
      },
      "children": "https://music.youtube.com/watch?v=nj1cre2e6t0",
    },
  },
}, {
  "id": "61dd70f51280f00000ab09dc",
  "text": " Vimeo",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902325,
  "updated": 1641902325,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " Vimeo", "tag": " ", "content": "Vimeo" },
    "children": "Vimeo",
  },
}, {
  "id": "61dd72b81280f00000ab09e6",
  "text": "  [https://vimeo.com/121284607]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902776,
  "updated": 1641902776,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [https://vimeo.com/121284607]",
      "tag": "  ",
      "content": "[https://vimeo.com/121284607]",
    },
    "children": {
      "type": "vimeo",
      "unit": {
        "whole": "[https://vimeo.com/121284607]",
        "content": "https://vimeo.com/121284607",
        "videoId": "121284607",
        "params": {},
      },
      "children": "https://vimeo.com/121284607",
    },
  },
}, {
  "id": "676663811280f000000d1350",
  "text": "  なぜかcase insensitive",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767913,
  "updated": 1734767913,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  なぜかcase insensitive",
      "tag": "  ",
      "content": "なぜかcase insensitive",
    },
    "children": "なぜかcase insensitive",
  },
}, {
  "id": "676663951280f000000d1351",
  "text": "   [HTTPS://vimeo.com/121284607]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1734767913,
  "updated": 1734767913,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "   [HTTPS://vimeo.com/121284607]",
      "tag": "   ",
      "content": "[HTTPS://vimeo.com/121284607]",
    },
    "children": {
      "type": "vimeo",
      "unit": {
        "whole": "[HTTPS://vimeo.com/121284607]",
        "content": "HTTPS://vimeo.com/121284607",
        "videoId": "121284607",
        "params": {},
      },
      "children": "HTTPS://vimeo.com/121284607",
    },
  },
}, {
  "id": "625227da1280f0000075bbf6",
  "text": " MP4",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1649551323,
  "updated": 1649551323,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " MP4", "tag": " ", "content": "MP4" },
    "children": "MP4",
  },
}, {
  "id": "6219d3057838e300005f33c4",
  "text":
    " \t[https://video.twimg.com/ext_tw_video/1497455496688766981/pu/vid/898x626/8GfIKUHGs_FM4g_a.mp4]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1645859590,
  "updated": 1645859595,
  "section": { "number": 13, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        " \t[https://video.twimg.com/ext_tw_video/1497455496688766981/pu/vid/898x626/8GfIKUHGs_FM4g_a.mp4]",
      "tag": " \t",
      "content":
        "[https://video.twimg.com/ext_tw_video/1497455496688766981/pu/vid/898x626/8GfIKUHGs_FM4g_a.mp4]",
    },
    "children": {
      "type": "video",
      "unit": {
        "whole":
          "[https://video.twimg.com/ext_tw_video/1497455496688766981/pu/vid/898x626/8GfIKUHGs_FM4g_a.mp4]",
        "content":
          "https://video.twimg.com/ext_tw_video/1497455496688766981/pu/vid/898x626/8GfIKUHGs_FM4g_a.mp4",
      },
      "children":
        "https://video.twimg.com/ext_tw_video/1497455496688766981/pu/vid/898x626/8GfIKUHGs_FM4g_a.mp4",
    },
  },
}, {
  "id": "61fe672e1280f0000061b09c",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1644062511,
  "updated": 1644062511,
  "section": { "number": 13, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61dfac841280f00000faf8d7",
  "text": "音声",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1642048643,
  "updated": 1642048645,
  "section": { "number": 14, "start": true, "end": false },
  "nodes": "音声",
}, {
  "id": "61dd6f351280f00000ab09cb",
  "text": " 音声",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641901876,
  "updated": 1641901883,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " 音声", "tag": " ", "content": "音声" },
    "children": "音声",
  },
}, {
  "id": "61dd72c51280f00000ab09e7",
  "text": "  [https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902789,
  "updated": 1641902789,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3]",
      "tag": "  ",
      "content": "[https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3]",
    },
    "children": {
      "type": "audio",
      "unit": {
        "whole": "[https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3]",
        "content": "https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3",
      },
      "children": "https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3",
    },
  },
}, {
  "id": "61dd6f3b1280f00000ab09cc",
  "text": " [タイトル付きオーディオ]",
  "userId": "5c30ba88e98efe0017e5172d",
  "created": 1641901883,
  "updated": 1659278911,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": " [タイトル付きオーディオ]",
      "tag": " ",
      "content": "[タイトル付きオーディオ]",
    },
    "children": {
      "type": "link",
      "unit": {
        "page": "タイトル付きオーディオ",
        "content": "タイトル付きオーディオ",
        "whole": "[タイトル付きオーディオ]",
      },
      "children": "タイトル付きオーディオ",
    },
  },
}, {
  "id": "61dd72d01280f00000ab09e8",
  "text":
    "  [https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3 モーツァルト「メヌエット」]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902800,
  "updated": 1649271703,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole":
        "  [https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3 モーツァルト「メヌエット」]",
      "tag": "  ",
      "content":
        "[https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3 モーツァルト「メヌエット」]",
    },
    "children": {
      "type": "audioLink",
      "unit": {
        "whole":
          "[https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3 モーツァルト「メヌエット」]",
        "content":
          "https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3 モーツァルト「メヌエット」",
        "link": "https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3",
        "title": "モーツァルト「メヌエット」",
      },
      "children":
        "https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3 モーツァルト「メヌエット」",
    },
  },
}, {
  "id": "61dd28d97838e30000dc9cbf",
  "text": " [Spotify]",
  "userId": "616ca537c25a92001e5f1e0d",
  "created": 1641883866,
  "updated": 1671266643,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " [Spotify]", "tag": " ", "content": "[Spotify]" },
    "children": {
      "type": "link",
      "unit": { "page": "Spotify", "content": "Spotify", "whole": "[Spotify]" },
      "children": "Spotify",
    },
  },
}, {
  "id": "625a37be1280f000009792f7",
  "text": "  いつの間に対応してた",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1650079679,
  "updated": 1650079679,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  いつの間に対応してた",
      "tag": "  ",
      "content": "いつの間に対応してた",
    },
    "children": "いつの間に対応してた",
  },
}, {
  "id": "625a37be1280f000009792f8",
  "text": "  [/sno2wman/Scrapboxでリンクを張るとiframeになるもの]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1650079679,
  "updated": 1650079679,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [/sno2wman/Scrapboxでリンクを張るとiframeになるもの]",
      "tag": "  ",
      "content": "[/sno2wman/Scrapboxでリンクを張るとiframeになるもの]",
    },
    "children": {
      "type": "link",
      "unit": {
        "project": "sno2wman",
        "page": "Scrapboxでリンクを張るとiframeになるもの",
        "content": "/sno2wman/Scrapboxでリンクを張るとiframeになるもの",
        "whole": "[/sno2wman/Scrapboxでリンクを張るとiframeになるもの]",
      },
      "children": "/sno2wman/Scrapboxでリンクを張るとiframeになるもの",
    },
  },
}, {
  "id": "625a37be1280f000009792f9",
  "text": "  [https://open.spotify.com/album/1bgUOjg3V0a7tvEfF1N6Kk]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1650079679,
  "updated": 1650079679,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [https://open.spotify.com/album/1bgUOjg3V0a7tvEfF1N6Kk]",
      "tag": "  ",
      "content": "[https://open.spotify.com/album/1bgUOjg3V0a7tvEfF1N6Kk]",
    },
    "children": {
      "type": "spotify",
      "unit": {
        "whole": "[https://open.spotify.com/album/1bgUOjg3V0a7tvEfF1N6Kk]",
        "content": "https://open.spotify.com/album/1bgUOjg3V0a7tvEfF1N6Kk",
        "videoId": "1bgUOjg3V0a7tvEfF1N6Kk",
        "params": { "type": "album" },
      },
      "children": "https://open.spotify.com/album/1bgUOjg3V0a7tvEfF1N6Kk",
    },
  },
}, {
  "id": "625a37bf1280f000009792fa",
  "text": " [anchor]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1650079680,
  "updated": 1650079745,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": { "whole": " [anchor]", "tag": " ", "content": "[anchor]" },
    "children": {
      "type": "link",
      "unit": { "page": "anchor", "content": "anchor", "whole": "[anchor]" },
      "children": "anchor",
    },
  },
}, {
  "id": "625a38041280f000009792fb",
  "text": "  [https://anchor.fm/notainc/episodes/1-FM-e1gh6a7/a-a7m2veg]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1650079749,
  "updated": 1650079803,
  "section": { "number": 14, "start": false, "end": false },
  "nodes": {
    "type": "indent",
    "unit": {
      "whole": "  [https://anchor.fm/notainc/episodes/1-FM-e1gh6a7/a-a7m2veg]",
      "tag": "  ",
      "content": "[https://anchor.fm/notainc/episodes/1-FM-e1gh6a7/a-a7m2veg]",
    },
    "children": {
      "type": "anchor-fm",
      "unit": {
        "whole": "[https://anchor.fm/notainc/episodes/1-FM-e1gh6a7/a-a7m2veg]",
        "content": "https://anchor.fm/notainc/episodes/1-FM-e1gh6a7/a-a7m2veg",
        "videoId": "1-FM-e1gh6a7/a-a7m2veg",
        "username": "notainc",
      },
      "children": "https://anchor.fm/notainc/episodes/1-FM-e1gh6a7/a-a7m2veg",
    },
  },
}, {
  "id": "625a37bd1280f000009792f6",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1650079678,
  "updated": 1650079678,
  "section": { "number": 14, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "61df89c97838e300001de3af",
  "text": "[/Mijinko/記法サンプル(Scrapbox)]",
  "userId": "60fb0a79f3364000237838e3",
  "created": 1642039754,
  "updated": 1642039754,
  "section": { "number": 15, "start": true, "end": false },
  "nodes": {
    "type": "link",
    "unit": {
      "project": "Mijinko",
      "page": "記法サンプル(Scrapbox)",
      "content": "/Mijinko/記法サンプル(Scrapbox)",
      "whole": "[/Mijinko/記法サンプル(Scrapbox)]",
    },
    "children": "/Mijinko/記法サンプル(Scrapbox)",
  },
}, {
  "id": "61dd722c1280f00000ab09df",
  "text": "[/yuta0801/Scrapboxの全構文まとめ]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902635,
  "updated": 1641902636,
  "section": { "number": 15, "start": false, "end": false },
  "nodes": {
    "type": "link",
    "unit": {
      "project": "yuta0801",
      "page": "Scrapboxの全構文まとめ",
      "content": "/yuta0801/Scrapboxの全構文まとめ",
      "whole": "[/yuta0801/Scrapboxの全構文まとめ]",
    },
    "children": "/yuta0801/Scrapboxの全構文まとめ",
  },
}, {
  "id": "61dd722e1280f00000ab09e1",
  "text": "[文字装飾記法で遊ぶページ]",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902638,
  "updated": 1641902686,
  "section": { "number": 15, "start": false, "end": false },
  "nodes": {
    "type": "link",
    "unit": {
      "page": "文字装飾記法で遊ぶページ",
      "content": "文字装飾記法で遊ぶページ",
      "whole": "[文字装飾記法で遊ぶページ]",
    },
    "children": "文字装飾記法で遊ぶページ",
  },
}, {
  "id": "61dd722c1280f00000ab09e0",
  "text": "",
  "userId": "5ef2bdebb60650001e1280f0",
  "created": 1641902636,
  "updated": 1641902636,
  "section": { "number": 15, "start": false, "end": true },
  "nodes": "",
}, {
  "id": "6587e35a5b98c20000a729fd",
  "text": "[UserCSS.icon]",
  "userId": "5b5e7121417cf700145b98c2",
  "created": 1703404378,
  "updated": 1703404379,
  "section": { "number": 16, "start": true, "end": false },
  "nodes": {
    "type": "icon",
    "unit": {
      "page": "UserCSS",
      "size": 1,
      "content": "UserCSS.icon",
      "whole": "[UserCSS.icon]",
    },
    "children": "UserCSS.icon",
  },
}, {
  "id": "6587e35a5b98c20000a729fe",
  "text": "",
  "userId": "5b5e7121417cf700145b98c2",
  "created": 1703404379,
  "updated": 1703404379,
  "section": { "number": 16, "start": false, "end": true },
  "nodes": "",
}];

assertType<IsExact<typeof lines, Line[]>>(true);
