const markdownIt = require("markdown-it");

module.exports = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
});
