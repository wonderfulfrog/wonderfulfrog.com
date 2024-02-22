const colorSchemes = require("../../config/design-tokens/colors.json");
const { helperClassesToCss } = require("./helperClasses");

const lightScheme = colorSchemes.light;
const darkScheme = colorSchemes.dark;

const colorToCss = (key, value) =>
  `--${key}: ${value}; --color-${key}: hsl(${value});`;

const colorSchemeToCss = (scheme) =>
  Object.entries(scheme).reduce(
    (css, [key, value]) => css + colorToCss(key, value),
    ``,
  );

const lightCss = colorSchemeToCss(lightScheme);
const darkCss = colorSchemeToCss(darkScheme);

const colorSchemeToHelperClassesCss = (scheme, helperClasses) => {
  return Object.entries(scheme).reduce((css, [key]) => {
    return css + helperClassesToCss(helperClasses, key, `var(--color-${key})`);
  }, ``);
};

const helperClasses = [
  ["text", ["color"]],
  ["bg", ["background-color"]],
];

const helperClassesCss = colorSchemeToHelperClassesCss(
  lightScheme,
  helperClasses,
);

module.exports = `:root{${lightCss}}${helperClassesCss}@media (prefers-color-scheme: dark) {:root{${darkCss}}}`;
