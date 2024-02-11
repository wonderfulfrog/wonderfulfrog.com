const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const advancedFormat = require("dayjs/plugin/advancedFormat");

const postcss = require("postcss");
const cssnano = require("cssnano");

const keys = Object.keys;
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

    if (!collectionByDate[year]) {
      return (collectionByDate[year] = [item]);
    }

    collectionByDate[year].push(item);
  });

  return collectionByDate;
};

const filterByCategory = (collection, category) => {
  return collection.filter((item) => item.data.categories.includes(category));
};

module.exports = {
  entries,
  filterByCategory,
  formatDate,
  keys,
  minifyCss,
  organizeByDate,
  values,
};
