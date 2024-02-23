module.exports = {
  layout: "layouts/catalogue-item",
  tags: "game",
  permalink: "catalogue/games/{{ page.fileSlug }}/index.html",
  eleventyComputed: {
    subtitle: (data) => data.year,
  },
};
