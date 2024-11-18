import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import advancedFormat from "dayjs/plugin/advancedFormat.js";

import pluralizeBase from "pluralize";

export const keys = Object.keys;
export const values = Object.values;
export const entries = Object.entries;

dayjs.extend(utc);
dayjs.extend(advancedFormat);

export const formatDate = (date, format) => dayjs.utc(date).format(format);

export const organizeByDate = (collection) => {
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

export const transformByDate = (collection) => {
  const collectionByDate = {};

  collection.forEach((item) => {
    const year = formatDate(item.date, "YYYY");

    if (!collectionByDate[year]) {
      return (collectionByDate[year] = { value: year, data: [item] });
    }

    collectionByDate[year].data.push(item);
  });

  return collectionByDate;
};

export const allTagCounts = (collection, ignore = ["post"]) => {
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

export const filter = (collection, filters = []) => {
  return collection.filter((item) => !filters.includes(item));
};

export const pluralize = (string, count = 0) => {
  return pluralizeBase(string, count);
};

export const filterCatalogueTags = (tags) => {
  // In the case of catalogue items, the 0-index is "catalogue"
  // and the 1-index is the catalogueType. We don't need to
  // show those in the front-end.
  return filter(tags, [tags[0], tags[1]]);
};

export const limit = (collection, limit = 5) => collection.slice(0, limit);

export const filterFavourites = (collection) => {
  return collection.filter((item) => item.data.favourite);
};

export const isOld = (dateArg) => {
  const date = dayjs(dateArg);
  const now = dayjs();

  const diffInYears = now.diff(date, "years");

  return diffInYears >= 2;
};
