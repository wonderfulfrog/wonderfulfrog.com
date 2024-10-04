export default {
  layout: "layouts/catalogue-item",
  tags: "game",
  permalink: "catalogue/games/{{ page.fileSlug }}/index.html",
  eleventyComputed: {
    subtitle: (data) => `${data.platform}`,
  },
};
