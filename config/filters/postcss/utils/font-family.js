import path from "path";

import fonts from "../../../design-tokens/fonts.js";

const getFontUrl = (src) => path.join("/assets/fonts", src);

const fontsToCss = (fonts) => {
  return Object.entries(fonts).reduce((css, [, fontProperties]) => {
    const family = fontProperties.family;
    const format = fontProperties.format;
    const styles = fontProperties.styles;

    return (
      css +
      Object.entries(styles).reduce((css, [variant, fontFamily]) => {
        const url = getFontUrl(fontFamily.path);
        const style = fontFamily.fontStyle;
        const weight = fontFamily.fontWeight;
        const stretch = fontFamily.fontStretch;
        const postScriptName = [family, variant].join("-").replaceAll(" ", "");

        return (
          css +
          fontFamilyToCss(
            family,
            style,
            weight,
            stretch,
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
  stretch,
  url,
  localName,
  postScriptName,
  format,
) => `@font-face {
    font-family: ${family};
    font-style: ${style};
    font-weight: ${weight};
    font-stretch: ${stretch};
    font-display: swap;
    src: local("${localName}"), local("${postScriptName}"), url("${url}") format("${format}")
}\n`;

export default fontsToCss(fonts);
