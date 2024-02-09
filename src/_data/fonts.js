/**
 * This approach for managing Web Fonts was derived from
 * Aleksandr Hovhannisyan.
 * See more here: https://www.aleksandrhovhannisyan.com/blog/configuring-web-fonts-in-11ty-with-global-data/
 */

const path = require("path").posix;

const FONT_STYLE = {
  NORMAL: "normal",
  ITALIC: "italic",
};

const FONT_DISPLAY = {
  SWAP: "swap",
};

const FONT_VARIANT = {
  BOLD: "Bold",
  EXTRA_BOLD: "ExtraBold",
  ITALIC: "Italic",
  BOLD_ITALIC: "BoldItalic",
  REGULAR: "Regular",
};

const getFontUrl = (src) => path.join("/assets/fonts", src);

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

const fonts = {
  display: {
    family: "Anek Latin",
    fallbacks,
    weights: {
      extraBold: {
        display: FONT_DISPLAY.SWAP,
        format: "truetype",
        style: FONT_STYLE.NORMAL,
        url: getFontUrl("/aneklatin/AnekLatin-ExtraBold.ttf"),
        variant: FONT_VARIANT.EXTRA_BOLD,
        weight: 800,
      },
      bold: {
        display: FONT_DISPLAY.SWAP,
        format: "truetype",
        style: FONT_STYLE.NORMAL,
        url: getFontUrl("/aneklatin/AnekLatin-Bold.ttf"),
        variant: FONT_VARIANT.BOLD,
        weight: 700,
      },
    },
  },
  body: {
    family: "iA Writer Quattro V",
    fallbacks,
    weights: {
      regular: {
        display: FONT_DISPLAY.SWAP,
        format: "woff2",
        style: FONT_STYLE.NORMAL,
        url: getFontUrl("/quattro/iAWriterQuattroS-Regular.woff2"),
        variant: FONT_VARIANT.REGULAR,
        weight: 400,
      },
      italtic: {
        display: FONT_DISPLAY.SWAP,
        format: "woff2",
        style: FONT_STYLE.ITALIC,
        url: getFontUrl("/quattro/iAWriterQuattroS-Italic.woff2"),
        variant: FONT_VARIANT.ITALIC,
        weight: 400,
      },
      bold: {
        display: FONT_DISPLAY.SWAP,
        format: "woff2",
        style: FONT_STYLE.NORMAL,
        url: getFontUrl("/quattro/iAWriterQuattroS-Bold.woff2"),
        variant: FONT_VARIANT.BOLD,
        weight: 650,
      },
      boldItalic: {
        display: FONT_DISPLAY.SWAP,
        format: "woff2",
        style: FONT_STYLE.ITALIC,
        url: getFontUrl("/quattro/iAWriterQuattroS-BoldItalic.woff2"),
        variant: FONT_VARIANT.BOLD_ITALIC,
        weight: 650,
      },
    },
  },
};

module.exports = fonts;
