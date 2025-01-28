import util from "util";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginNoRobots from "eleventy-plugin-no-robots";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import { collectionByTag, postsByTag } from "./config/collections/index.js";

import { dir } from "./config/constants.js";
import {
  allTagCounts,
  entries,
  filter,
  filterByTags,
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
import liteYoutube from "./config/shortcodes/youtube.js";

import htmlConfigTransform from "./config/transforms/html-config.js";

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css");

  // 	--------------------- Plugins ---------------------
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginNoRobots);

  // 	--------------------- Custom Collections -----------------------
  eleventyConfig.addCollection("postsByTag", postsByTag);
  eleventyConfig.addCollection("booksByTag", (collection) =>
    collectionByTag(collection, "book"),
  );
  eleventyConfig.addCollection("gamesByTag", (collection) =>
    collectionByTag(collection, "game"),
  );
  eleventyConfig.addCollection("showsByTag", (collection) =>
    collectionByTag(collection, "tv"),
  );
  eleventyConfig.addCollection("moviesByTag", (collection) =>
    collectionByTag(collection, "movie"),
  );

  // 	--------------------- Custom Filters -----------------------
  eleventyConfig.addFilter("allTagCounts", allTagCounts);
  eleventyConfig.addFilter("entries", entries);
  eleventyConfig.addFilter("filter", filter);
  eleventyConfig.addFilter("filterFavourites", filterFavourites);
  eleventyConfig.addFilter("filterByTags", filterByTags);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("isOld", isOld);
  eleventyConfig.addFilter("keys", keys);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("organizeByDate", organizeByDate);
  eleventyConfig.addFilter("values", values);
  eleventyConfig.addFilter("pluralize", pluralize);

  // 	--------------------- Custom Transforms -----------------------
  eleventyConfig.addPlugin(htmlConfigTransform);

  // Image Transforms
  // Works with any <img> tag in output files.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",

    formats: ["webp", "jpeg"],

    sharpOptions: {
      animated: true,
    },

    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },

    failOnError: false,
  });

  // 	--------------------- Passthrough File Copy -----------------------
  ["src/assets/fonts/", "src/assets/images"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path),
  );
  eleventyConfig.addPassthroughCopy("_redirects");

  // 	--------------------- Markdown -----------------------
  eleventyConfig.setLibrary("md", markdown);

  // 	--------------------- Shortcodes -----------------------
  eleventyConfig.addShortcode("youtube", liteYoutube);

  eleventyConfig.addFilter("console", function (value) {
    return util.inspect(value);
  });

  return {
    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir,
  };
}
