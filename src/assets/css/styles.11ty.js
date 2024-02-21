/*
 * Implementation sourced from eleventyone starter kit
 * https://github.com/philhawksworth/eleventyone
 * ---
 * https://github.com/philhawksworth/eleventyone/blob/master/src/site/css/styles.11ty.js
 */

const fs = require("fs");
const postcss = require("postcss");
const postcssImport = require("postcss-import");
const postcssImportExtGlob = require("postcss-import-ext-glob");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const path = require("path").posix;

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, "./global.css");
    const rawCss = fs.readFileSync(rawFilepath);

    return {
      permalink: `assets/css/styles.css`,
      rawFilepath,
      rawCss,
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
};
