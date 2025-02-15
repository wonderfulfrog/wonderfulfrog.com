import htmlmin from "html-minifier-terser";

export default function (eleventyConfig) {
  eleventyConfig.addTransform("html-minify", (content, path) => {
    if (path && path.endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        includeAutoGeneratedTags: false,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        useShortDoctype: true,
      });
    }
    return content;
  });
}
