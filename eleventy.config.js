import UpgradeHelper from "@11ty/eleventy-upgrade-help";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginNoRobots from "eleventy-plugin-no-robots";

import { catalogueByType, postsByTag } from "./config/collections/index.js";

import { dir } from "./config/constants.js";
import {
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
} from "./config/filters/index.js";
import markdown from "./config/plugins/markdown.js";
import imageShortcode from "./config/shortcodes/image.js";
import liteYoutube from "./config/shortcodes/youtube.js";

import htmlConfigTransform from "./config/transforms/html-config.js";

export default function (eleventyConfig) {
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
  eleventyConfig.addPlugin(htmlConfigTransform);

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

  eleventyConfig.addPlugin(UpgradeHelper);

  return {
    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir,
  };
}
