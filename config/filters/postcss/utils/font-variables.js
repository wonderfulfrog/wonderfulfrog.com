/*
 * Fallbacks from Modern Font Stacks.
 * https://modernfontstacks.com/
 */

import fonts from "../../../design-tokens/fonts.js";

const displayFallbacks = [
  "ui-monospace",
  "Cascadia Code",
  "Source Code Pro",
  "Menlo",
  "Consolas",
  "DejaVu Sans Mono",
  "monospace",
];

const bodyFallbacks = [
  "ui-monospace",
  "Cascadia Code",
  "Source Code Pro",
  "Menlo",
  "Consolas",
  "DejaVu Sans Mono",
  "monospace",
];

const monoFallbacks = [
  "ui-monospace",
  "Cascadia Code",
  "Source Code Pro",
  "Menlo",
  "Consolas",
  "DejaVu Sans Mono",
  "monospace",
];

const fallbacks = {
  display: displayFallbacks,
  body: bodyFallbacks,
  monospace: monoFallbacks,
};

const fontsToCss = (fonts) => {
  return Object.entries(fonts).reduce((css, [fontType, fontProperties]) => {
    const family = fontProperties.family;

    const fontTypeCss = fontFamilyToCss(fontType, family);

    return css + fontTypeCss;
  }, ``);
};

const fontFamilyToCss = (type, value) =>
  `--font-family-${type}: ${value},${fallbacks[type].join(",")};`;

export default `:root{${fontsToCss(fonts)}}`;
