const Image = require("@11ty/eleventy-img");

const imageShortcode = async (
  src,
  alt,
  className = undefined,
  widths = [400, 800, 1280],
  formats = ["webp", "jpeg"],
  sizes = "100vw",
) => {
  const metadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "dist/assets/images",
    urlPath: "/assets/images",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  if (className) {
    imageAttributes.className = className;
  }

  // You bet we throw an error on a missing alt (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
};

module.exports = imageShortcode;
