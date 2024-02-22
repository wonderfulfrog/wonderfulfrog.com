module.exports = {
  layout: "layouts/catalogue-item",
  tags: "book",
  permalink: "catalogue/books/{{ page.fileSlug }}/index.html",
  linkTitle: "View book details",
  eleventyComputed: {
    tertiary: (data) =>
      `<p style="--flow-space: 0.5em"><span class="[ text-fadeText ]">by</span> ${data.author}</p>`,
  },
};
