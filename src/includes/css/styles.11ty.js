/*
 * Implementation sourced from eleventyone starter kit
 * https://github.com/philhawksworth/eleventyone
 * ---
 * https://github.com/philhawksworth/eleventyone/blob/master/src/site/css/styles.11ty.js
 */

import fs from "fs";
import postcss from "postcss";
import postcssImport from "postcss-import";
import postcssImportExtGlob from "postcss-import-ext-glob";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { posix as path } from "path";
import { fileURLToPath } from "url";

import colors from "../../css-utils/colors.js";
import fontFamily from "../../css-utils/font-family.js";
import fontVariables from "../../css-utils/font-variables.js";
import spacing from "../../css-utils/spacing.js";

export default class {
  async data() {
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const rawFilepath = path.join(dirname, "./global.css");
    const rawCss = fs.readFileSync(rawFilepath);

    const css = `${rawCss}${fontFamily}${fontVariables}${colors}${spacing}`;

    return {
      permalink: `css/styles.css`,
      excludeFromSitemap: true,
      eleventyExcludeFromCollections: true,
      rawFilepath,
      rawCss: css,
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      postcssImportExtGlob,
      postcssImport,
      autoprefixer,
      cssnano,
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
}
