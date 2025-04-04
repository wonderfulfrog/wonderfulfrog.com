import colorSchemes from "../../../design-tokens/colors.js";
import { helperClassesToCss } from "./helper-classes.js";

const lightScheme = colorSchemes.light;
const darkScheme = colorSchemes.dark;

const colorToCss = (key, value) => `--color-${key}: ${value};`;

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

export default `:root{${lightCss}}${helperClassesCss}@media (prefers-color-scheme: dark) {:root{${darkCss}}}`;
