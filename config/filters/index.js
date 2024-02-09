const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const advancedFormat = require("dayjs/plugin/advancedFormat");

const postcss = require("postcss");
const cssnano = require("cssnano");

const values = Object.values;
const entries = Object.entries;

dayjs.extend(utc);
dayjs.extend(advancedFormat);

const minifyCss = async (css) => {
  const output = await postcss([cssnano]).process(css, { from: undefined });

  return output.css;
};

const formatDate = (date, format) => dayjs.utc(date).format(format);

const organizeByDate = (collection) => {
  const collectionByDate = {};

  collection.forEach((item) => {
    const year = formatDate(item.date, "YYYY");
    const month = formatDate(item.date, "MMMM");

    if (!collectionByDate[year]) {
      return (collectionByDate[year] = {
        [month]: [item],
      });
    }

    if (!collectionByDate[year][month]) {
      return (collectionByDate[year][month] = [item]);
    }

    collectionByDate[year][month].push(item);
  });

  return collectionByDate;
};

module.exports = {
  entries,
  formatDate,
  minifyCss,
  organizeByDate,
  values,
};
