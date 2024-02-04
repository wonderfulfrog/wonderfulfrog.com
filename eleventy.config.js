const {
  entries,
  formatDate,
  minifyCss,
  values,
} = require("./config/filters/index.js");
const markdown = require("./config/plugins/markdown.js");
const imageShortcode = require("./config/shortcodes/image.js");

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/assets");
  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(
    require("./config/template-languages/css-config.js"),
  );

  // 	--------------------- Custom Filters -----------------------
  eleventyConfig.addFilter("entries", entries);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("minifyCss", minifyCss);
  eleventyConfig.addFilter("values", values);

  // 	--------------------- Passthrough File Copy -----------------------
  ["src/assets/fonts/"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path),
  );

  // 	--------------------- Markdown -----------------------
  eleventyConfig.setLibrary("md", markdown);
  eleventyConfig.addShortcode("image", imageShortcode);

  return {
    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      assets: "assets",
      data: "_data",
      includes: "_includes",
      input: "src",
      layouts: "_layouts",
      output: "dist",
    },
  };
};
