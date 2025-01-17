import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import markdownItPrism from "markdown-it-prism";
import markdownItAbbr from "markdown-it-abbr";
import markdownItAnchor from "markdown-it-anchor";
import markdownItImplicitFigures from "markdown-it-image-figures";
import markdownItAttrs from "markdown-it-attrs";

const markdown = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})
  .use(markdownItFootnote)
  .use(markdownItAbbr)
  .use(markdownItAnchor)
  .use(markdownItImplicitFigures, {
    figcaption: true,
  })
  .use(markdownItPrism, {
    defaultLanguage: "plaintext",
  })
  .use(markdownItAttrs);

markdown.renderer.rules.footnote_block_open = (_tokens, _idx, options) => {
  return (
    (options.xhtmlOut
      ? '<hr class="footnotes-sep" />\n'
      : '<hr class="footnotes-sep">\n') +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list flow">\n'
  );
};

export default markdown;
