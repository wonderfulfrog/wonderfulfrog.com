const fonts = require("./fonts");

const preloads = [
  {
    as: "font",
    href: fonts.display.weights.extraBold.url,
    crossorigin: true,
  },
  {
    as: "font",
    href: fonts.display.weights.bold.url,
    crossorigin: true,
  },
  {
    as: "font",
    href: fonts.body.weights.regular.url,
    crossorigin: true,
  },
];

module.exports = preloads;
