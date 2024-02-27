const pluginRss = require("@11ty/eleventy-plugin-rss");

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
  filterCatalogueTags,
  limit,
  filterFavourites,
} = require("./config/filters/index.js");
const markdown = require("./config/plugins/markdown.js");
const imageShortcode = require("./config/shortcodes/image.js");
const liteYoutube = require("./config/shortcodes/youtube.js");

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/css");

  // 	--------------------- Plugins ---------------------
  eleventyConfig.addPlugin(pluginRss);

  // 	--------------------- Custom Collections -----------------------
  eleventyConfig.addCollection("postsByTag", postsByTag);
  eleventyConfig.addCollection("catalogueByType", catalogueByType);

  // 	--------------------- Custom Filters -----------------------
  eleventyConfig.addFilter("allTagCounts", allTagCounts);
  eleventyConfig.addFilter("entries", entries);
  eleventyConfig.addFilter("filter", filter);
  eleventyConfig.addFilter("filterCatalogueTags", filterCatalogueTags);
  eleventyConfig.addFilter("filterFavourites", filterFavourites);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("keys", keys);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("minifyCss", minifyCss);
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
