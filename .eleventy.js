module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/assets");

  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(
    require("./config/template-languages/css-config.js"),
  );

  // 	--------------------- Passthrough File Copy -----------------------
  ["src/assets/fonts/"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path),
  );

  return {
    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      output: "dist",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
