const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNoRobots = require("eleventy-plugin-no-robots");

const {
  catalogueByType,
  postsByTag,
} = require("./config/collections/index.js");
const { dir } = require("./config/constants.js");
const {
  allTagCounts,
  entries,
  filter,
  filterCatalogueTags,
  filterFavourites,
  formatDate,
  isOld,
  keys,
  limit,
  organizeByDate,
  pluralize,
  values,
} = require("./config/filters/index.js");
const markdown = require("./config/plugins/markdown.js");
const imageShortcode = require("./config/shortcodes/image.js");
const liteYoutube = require("./config/shortcodes/youtube.js");

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/css");

  // 	--------------------- Plugins ---------------------
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginNoRobots);

  // 	--------------------- Custom Collections -----------------------
  eleventyConfig.addCollection("catalogueByType", catalogueByType);
  eleventyConfig.addCollection("postsByTag", postsByTag);

  // 	--------------------- Custom Filters -----------------------
  eleventyConfig.addFilter("allTagCounts", allTagCounts);
  eleventyConfig.addFilter("entries", entries);
  eleventyConfig.addFilter("filter", filter);
  eleventyConfig.addFilter("filterCatalogueTags", filterCatalogueTags);
  eleventyConfig.addFilter("filterFavourites", filterFavourites);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("isOld", isOld);
  eleventyConfig.addFilter("keys", keys);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("organizeByDate", organizeByDate);
  eleventyConfig.addFilter("values", values);
  eleventyConfig.addFilter("pluralize", pluralize);

  // 	--------------------- Custom Transforms -----------------------
  eleventyConfig.addPlugin(require("./config/transforms/html-config.js"));

  // 	--------------------- Passthrough File Copy -----------------------
  ["src/assets/fonts/", "src/assets/images"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path),
  );
  eleventyConfig.addPassthroughCopy("_redirects");

  // 	--------------------- Markdown -----------------------
  eleventyConfig.setLibrary("md", markdown);

  // 	--------------------- Shortcodes -----------------------
  eleventyConfig.addShortcode("image", imageShortcode);
  eleventyConfig.addShortcode("youtube", liteYoutube);

  return {
    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir,
  };
};
