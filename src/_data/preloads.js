const { getFontUrl } = require("../utils/fonts");
const fonts = require("../../config/design-tokens/fonts.json");

const preloads = [
  {
    as: "font",
    href: getFontUrl(fonts.display.weights.ExtraBold.path),
    crossorigin: true,
  },
  {
    as: "font",
    href: getFontUrl(fonts.display.weights.Bold.path),
    crossorigin: true,
  },
  {
    as: "font",
    href: getFontUrl(fonts.body.weights.Regular.path),
    crossorigin: true,
  },
];

module.exports = preloads;
