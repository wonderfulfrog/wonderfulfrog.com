const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");

const postcss = require("postcss");
const cssnano = require("cssnano");

const values = Object.values;
const entries = Object.entries;

dayjs.extend(utc);

const minifyCss = async (css) => {
  const output = await postcss([cssnano]).process(css, { from: undefined });

  return output.css;
};

const formatDate = (date, format) => {
  console.log(date);
  return dayjs.utc(date).format(format);
};

module.exports = {
  entries,
  formatDate,
  minifyCss,
  values,
};
