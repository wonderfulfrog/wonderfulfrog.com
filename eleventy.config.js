const {
  postsByTag,
  catalogueByType,
} = require("./config/collections/index.js");
const { dir } = require("./config/constants.js");
const {
  entries,
  formatDate,
  minifyCss,
  values,
  organizeByDate,
  keys,
  allTagCounts,
  filter,
  pluralize,
} = require("./config/filters/index.js");
const markdown = require("./config/plugins/markdown.js");
const imageShortcode = require("./config/shortcodes/image.js");

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/assets");

  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(
    require("./config/template-languages/css-config.js"),
  );

  // 	--------------------- Custom Collections -----------------------
  eleventyConfig.addCollection("postsByTag", postsByTag);
  eleventyConfig.addCollection("catalogueByType", catalogueByType);

  // 	--------------------- Custom Filters -----------------------
  eleventyConfig.addFilter("allTagCounts", allTagCounts);
  eleventyConfig.addFilter("entries", entries);
  eleventyConfig.addFilter("filter", filter);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("keys", keys);
  eleventyConfig.addFilter("minifyCss", minifyCss);
  eleventyConfig.addFilter("organizeByDate", organizeByDate);
  eleventyConfig.addFilter("values", values);
  eleventyConfig.addFilter("pluralize", pluralize);

  // 	--------------------- Passthrough File Copy -----------------------
  ["src/assets/fonts/", "src/assets/images"].forEach((path) =>
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

    dir,
  };
};
