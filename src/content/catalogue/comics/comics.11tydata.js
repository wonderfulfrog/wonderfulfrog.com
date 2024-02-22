module.exports = {
  layout: "layouts/catalogue-item",
  tags: "game",
  permalink: "catalogue/comics/{{ page.fileSlug }}/index.html",
  eleventyComputed: {
    subtitle: (data) => `${data.author} (${data.year})`,
  },
};
