const fonts = require("../../config/design-tokens/fonts.json");

const fallbacks = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Ubuntu",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

const fontsToCss = (fonts) => {
  return Object.entries(fonts).reduce((css, [fontType, fontProperties]) => {
    const family = fontProperties.family;
    const weights = fontProperties.weights;

    const fontTypeCss = fontFamilyToCss(fontType, family);
    const fontWeightsCss = fontWeightsToCss(fontType, weights);

    return css + fontTypeCss + fontWeightsCss;
  }, ``);
};

const validVariants = ["regular", "bold", "extrabold"];

const fontWeightsToCss = (type, weights) =>
  Object.entries(weights)
    .filter(([variant]) => validVariants.includes(variant.toLowerCase()))
    .reduce((css, [variant, fontFamily]) => {
      const weight = fontFamily.weight;

      return css + fontWeightToCss(type, variant.toLowerCase(), weight);
    }, ``);

const fontWeightToCss = (type, variant, value) =>
  `--font-weight-${type}-${variant}: ${value};`;

const fontFamilyToCss = (type, value) =>
  `--font-family-${type}: ${value},${fallbacks.join(",")};`;

const css = `:root{${fontsToCss(fonts)}}`;

module.exports = css;
