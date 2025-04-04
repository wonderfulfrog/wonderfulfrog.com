import minifyXML from "minify-xml";

export default function (eleventyConfig) {
  eleventyConfig.addTransform("xml-minify", (content, path) => {
    if (path && path.endsWith(".xml")) {
      return minifyXML(content, {
        shortenNamespaces: false,
      });
    }
    return content;
  });
}
