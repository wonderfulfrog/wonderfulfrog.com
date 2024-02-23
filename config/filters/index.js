const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const advancedFormat = require("dayjs/plugin/advancedFormat");

const postcss = require("postcss");
const cssnano = require("cssnano");
const pluralizeBase = require("pluralize");

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

const allTags = (collection, ignore = []) => {
  const tagSet = new Set(collection.flatMap((item) => item.data.tags));

  ignore.forEach((tag) => tagSet.delete(tag));

  return [...tagSet];
};

const allTagCounts = (collection, ignore = ["post"]) => {
  if (!collection.length) {
    throw new Error("Invalid collection, no items");
  }

  const tagCounts = new Map();

  for (const item of collection) {
    const tags = item.data.tags;

    tags?.forEach((tag) => tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1));
  }

  ignore.forEach((tag) => tagCounts.delete(tag));

  const tagArray = Array.from(tagCounts.entries())
    .map(([tag, count]) => ({
      tag,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  return tagArray;
};

const filter = (collection, filters = []) => {
  return collection.filter((item) => !filters.includes(item));
};

const pluralize = (string, count = 0) => {
  return pluralizeBase(string, count);
};

const filterCatalogueTags = (tags) => {
  // In the case of catalogue items, the 0-index is "catalogue"
  // and the 1-index is the catalogueType. We don't need to
  // show those in the front-end.
  return filter(tags, [tags[0], tags[1]]);
};

const limit = (collection, limit = 5) => collection.slice(0, limit);

const filterFavourites = (collection) => {
  return collection.filter((item) => item.data.favourite);
};

module.exports = {
  allTagCounts,
  allTags,
  entries,
  filter,
  filterCatalogueTags,
  filterFavourites,
  formatDate,
  keys,
  limit,
  minifyCss,
  organizeByDate,
  pluralize,
  values,
};
