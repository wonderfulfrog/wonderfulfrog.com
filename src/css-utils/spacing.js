const spacing = require("../../config/design-tokens/spacing.json");
const { helperClassesToCss } = require("./helper-classes");

const spacingToCss = (variant, value) =>
  `--spacing-${variant.replace(".", "\\.")}: ${value}px;`;

const spacingToHelperClassesCss = (spacingValues, helperClasses) => {
  return Object.entries(spacingValues).reduce((css, [spacingVariant]) => {
    const variant = spacingVariant.replace(".", "\\.");
    return (
      css +
      helperClassesToCss(helperClasses, variant, `var(--spacing-${variant})`)
    );
  }, ``);
};

const helperClasses = [
  ["m", ["margin"]],
  ["my", ["margin-block-start", "margin-block-end"]],
  ["mx", ["margin-inline-start", "margin-inline-end"]],
  ["ml", ["margin-inline-start"]],
  ["mr", ["margin-inline-start"]],
  ["mt", ["margin-block-start"]],
  ["mb", ["margin-block-end"]],
  ["p", ["padding"]],
  ["py", ["padding-block-start", "padding-block-end"]],
  ["px", ["padding-inline-start", "padding-inline-end"]],
  ["pl", ["padding-inline-start"]],
  ["pr", ["padding-inline-start"]],
  ["pt", ["padding-block-start"]],
  ["pb", ["padding-block-end"]],
  ["w", ["width"]],
  ["h", ["height"]],
  ["size", ["width", "height"]],
  ["radius", ["border-radius"]],
  ["gap", ["gap"]],
  ["row-gap", ["row-gap"]],
  ["column-gap", ["column-gap"]],
];

const spacingVariablesCss = Object.entries(spacing).reduce(
  (css, [variant, value]) => css + spacingToCss(variant, value),
  ``,
);

const helperCss = spacingToHelperClassesCss(spacing, helperClasses);

const css = `:root{${spacingVariablesCss}}${helperCss}`;

module.exports = css;
