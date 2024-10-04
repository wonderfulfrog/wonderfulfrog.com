export default {
  layout: "layouts/catalogue-item",
  tags: "comic",
  permalink: "catalogue/comics/{{ page.fileSlug }}/index.html",
  eleventyComputed: {
    tertiary: (data) =>
      `<p class="[ flow-space-0.5 ]"><span class="[ text-fadeText ]">by</span> ${data.author}</p>`,
  },
};
