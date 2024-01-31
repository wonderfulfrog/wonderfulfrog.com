const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItPrism = require("markdown-it-prism");
const markdownItAbbr = require("markdown-it-abbr");
const markdownItAnchor = require("markdown-it-anchor");

const markdown = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})
  .use(markdownItFootnote)
  .use(markdownItAbbr)
  .use(markdownItAnchor)
  .use(markdownItPrism, {
    defaultLanguage: "plaintext",
  });

module.exports = markdown;
