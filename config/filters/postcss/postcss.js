/*
 * Implementation sourced from eleventyone starter kit
 * https://github.com/philhawksworth/eleventyone
 * ---
 * https://github.com/philhawksworth/eleventyone/blob/master/src/site/css/styles.11ty.js
 */
import { default as postcssBase } from "postcss";
import postcssImport from "postcss-import";
import postcssImportExtGlob from "postcss-import-ext-glob";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

import colors from "./utils/colors.js";
import fontFamily from "./utils/font-family.js";
import fontVariables from "./utils/font-variables.js";
import spacing from "./utils/spacing.js";

const postcss = async (rawCss) => {
  const css = `${rawCss}${fontFamily}${fontVariables}${colors}${spacing}`;
  return await postcssBase([
    postcssImportExtGlob,
    postcssImport,
    autoprefixer,
    cssnano,
  ])
    .process(css, { from: "src/includes/css/styles.css" })
    .then((result) => result.css);
};

export default {
  postcss,
};
