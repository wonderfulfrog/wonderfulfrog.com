import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import { collectionByTag } from "./config/collections/index.js";
import filters from "./config/filters/index.js";
import markdown from "./config/plugins/markdown.js";
import shortcodes from "./config/shortcodes/index.js";
import transforms from "./config/transforms/index.js";

export default function (eleventyConfig) {
  // 	--------------------- Watch Targets -----------------------
  eleventyConfig.addWatchTarget("./src/includes/css");

  // 	--------------------- Passthrough File Copy -----------------------
  ["src/assets/fonts/", "src/assets/images"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path),
  );

  // 	--------------------- Markdown -----------------------
  eleventyConfig.setLibrary("md", markdown);

  // 	--------------------- Collections -----------------------
  eleventyConfig.addCollection("postsByTag", (collection) =>
    collectionByTag(collection, "post"),
  );
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

  // 	--------------------- Filters -----------------------
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // 	--------------------- Shortcodes -----------------------
  Object.keys(shortcodes).forEach((shortcode) => {
    eleventyConfig.addShortcode(shortcode, shortcodes[shortcode]);
  });

  // 	--------------------- Transforms -----------------------
  Object.keys(transforms).forEach((transform) => {
    eleventyConfig.addPlugin(transforms[transform]);
  });

  // 	--------------------- Image Transform --------------------
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

    cacheOptions: {
      directory: ".cache",
      duration: "30d",
      removeUrlQueryParams: false,
    },
  });

  return {
    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      assets: "assets",
      data: "data",
      includes: "includes",
      input: "src",
      output: "dist",
    },
  };
}
