const {
  getAllPosts,
  getAllPostCategories,
  getPostsByCategory,
  getAllCatalogue,
} = require("./config/collections/index.js");
const { dir } = require("./config/constants.js");
const {
  entries,
  formatDate,
  minifyCss,
  values,
  organizeByDate,
  keys,
  filterByCategory,
} = require("./config/filters/index.js");
const markdown = require("./config/plugins/markdown.js");
const imageShortcode = require("./config/shortcodes/image.js");

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/assets");

  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(
    require("./config/template-languages/css-config.js"),
  );

  eleventyConfig.addCollection("posts", getAllPosts);
  eleventyConfig.addCollection("categories", getAllPostCategories);
  eleventyConfig.addCollection("postsByCategory", getPostsByCategory);
  eleventyConfig.addCollection("catalogue", getAllCatalogue);

  // 	--------------------- Custom Filters -----------------------
  eleventyConfig.addFilter("entries", entries);
  eleventyConfig.addFilter("filterByCategory", filterByCategory);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("keys", keys);
  eleventyConfig.addFilter("minifyCss", minifyCss);
  eleventyConfig.addFilter("organizeByDate", organizeByDate);
  eleventyConfig.addFilter("values", values);

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
