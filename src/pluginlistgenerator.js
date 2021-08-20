/**
 *
 *
 * Easy Guide:
 *
 * 1. Go to https://ckeditor.com/ckeditor-5/online-builder/
 * and make the plugin selections
 *
 * 2. Copy and Paste the output of:
 *
 * console.log(JSON.stringify([...document.querySelectorAll('span[data-plugin]')].map(s => s.dataset.plugin)))
 *
 * into the "LIST" variable
 *
 */

const list = [
  "Alignment",
  "Autoformat",
  "AutoImage",
  "Image",
  "AutoLink",
  "Link",
  "Autosave",
  "BlockQuote",
  "Bold",
  "Code",
  "CodeBlock",
  "Comments",
  "DataFilter",
  "DataSchema",
  "FindAndReplace",
  "FontBackgroundColor",
  "FontColor",
  "FontFamily",
  "FontSize",
  "GeneralHtmlSupport",
  "Highlight",
  "HorizontalLine",
  "HtmlEmbed",
  "ImageCaption",
  "ImageInsert",
  "ImageUpload",
  "ImageResize",
  "ImageStyle",
  "ImageToolbar",
  "Indent",
  "IndentBlock",
  "Italic",
  "LinkImage",
  "List",
  "ListStyle",
  "MediaEmbed",
  "MediaEmbedToolbar",
  "Mention",
  "PageBreak",
  "Pagination",
  "PasteFromOffice",
  "RemoveFormat",
  "SimpleUploadAdapter",
  "SpecialCharacters",
  "SpecialCharactersArrows",
  "SpecialCharactersCurrency",
  "SpecialCharactersEssentials",
  "SpecialCharactersLatin",
  "SpecialCharactersMathematical",
  "SpecialCharactersText",
  "StandardEditingMode",
  "Strikethrough",
  "Subscript",
  "Superscript",
  "TableCaption",
  "Table",
  "TableCellProperties",
  "TableToolbar",
  "TableProperties",
  "TextPartLanguage",
  "TextTransformation",
  "TodoList",
  "Underline",
];

const cc = require("change-case");

console.log(
  `ClassicEditor.builtinPlugins = [\n${list
    .map((plugin) => {
      const packagedName = cc.snakeCase(plugin).replace(/_/g, "-");
      const nmName = `@ckeditor/ckeditor5-${packagedName}`;
      return `require('/src/${packagedName}')`;
    })
    .join(",\n")}
    ]`
);
