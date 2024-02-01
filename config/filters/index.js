const postcss = require("postcss");
const cssnano = require("cssnano");

const values = Object.values;
const entries = Object.entries;

const minifyCss = async (css) => {
  const output = await postcss([cssnano]).process(css, undefined);

  return output.css;
};

module.exports = {
  entries,
  values,
  minifyCss,
};
