module.exports = {
  layout: "layouts/catalogue-item",
  tags: "comic",
  permalink: "catalogue/comics/{{ page.fileSlug }}/index.html",
  eleventyComputed: {
    subtitle: (data) => `${data.author} (${data.year})`,
  },
};
