module.exports = {
  tags: "catalogue",
  eleventyComputed: {
    description: (data) => `My thoughts on ${data.title}.`,
  },
};
