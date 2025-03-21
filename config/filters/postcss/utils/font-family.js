import path from "path";

import { ASSETS_FONTS_PATH } from "../../../constants/paths.js";
import fonts from "../../../design-tokens/fonts.js";

const getFontUrl = (src) => path.join(ASSETS_FONTS_PATH, src);

const fontsToCss = (fonts) => {
  return Object.entries(fonts).reduce((css, [, fontProperties]) => {
    const family = fontProperties.family;
    const format = fontProperties.format;
    const weights = fontProperties.weights;

    return (
      css +
      Object.entries(weights).reduce((css, [variant, fontFamily]) => {
        const url = getFontUrl(fontFamily.path);
        const style = fontFamily["font-style"];
        const weight = fontFamily.weight;
        const postScriptName = [family, variant].join("-").replaceAll(" ", "");

        return (
          css +
          fontFamilyToCss(
            family,
            style,
            weight,
            url,
            family,
            postScriptName,
            format,
          )
        );
      }, ``)
    );
  }, ``);
};

const fontFamilyToCss = (
  family,
  style,
  weight,
  url,
  localName,
  postScriptName,
  format,
) => `@font-face {
    font-family: ${family};
    font-style: ${style};
    font-weight: ${weight};
    font-display: swap;
    src: local("${localName}"), local("${postScriptName}"), url("${url}") format("${format}")
}\n`;

export default fontsToCss(fonts);
