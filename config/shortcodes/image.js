const Image = require("@11ty/eleventy-img");

const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === "undefined") return "";
      return `${attribute}="${value}"`;
    })
    .join(" ");
};

const imageShortcode = async (
  src,
  alt = "",
  caption = "",
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
    sharpOptions: {
      animated: true,
    },
  });

  const lowsrc = metadata.jpeg[metadata.jpeg.length - 1];

  const imageSources = Object.values(metadata)
    .map((imageFormat) => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
        .map((entry) => entry.srcset)
        .join(", ")}" sizes="${sizes}">`;
    })
    .join("\n");

  const imageAttributes = stringifyAttributes({
    src: lowsrc.url,
    width: lowsrc.width,
    height: lowsrc.height,
    alt,
    loading: "lazy",
    decoding: "async",
  });

  const imageElement = caption
    ? `<figure class="[ flow flex-col items-center justify-center ]${className ? ` ${className}` : ""}">
				<picture>
					${imageSources}
					<img
					${imageAttributes}>
				</picture>
				<figcaption>${caption}</figcaption>
			</figure>`
    : `<picture class="[ flex-col items-center justify-center ]${className ? `${className}` : ""}">
				${imageSources}
				<img
				${imageAttributes}>
			</picture>`;

  return imageElement;
};

module.exports = imageShortcode;
