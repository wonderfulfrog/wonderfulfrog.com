import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import advancedFormat from "dayjs/plugin/advancedFormat.js";

import pluralizeBase from "pluralize";

import { JSDOM } from "jsdom";

export const keys = Object.keys;
export const values = Object.values;
export const entries = Object.entries;

dayjs.extend(utc);
dayjs.extend(advancedFormat);

export const formatDate = (date, format) => dayjs.utc(date).format(format);
export const formatAsUTCString = (date) => new Date(date).toUTCString();

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

export const limit = (collection, limit = 5) => collection.slice(0, limit);

export const filterFavourites = (collection) => {
  return collection.filter(
    (item) => item.data.favourite || item.data.isFavourite,
  );
};

export const filterByTags = (collection, tags = []) => {
  return collection.filter(
    (item) =>
      item.data.tags && !item.data.tags.every((tag) => tags.includes(tag)),
  );
};

export const isOld = (dateArg) => {
  const date = dayjs(dateArg);
  const now = dayjs();

  const diffInYears = now.diff(date, "years");

  return diffInYears >= 2;
};

// From coryd.dev
// https://www.coryd.dev/posts/2025/generating-absolute-urls-in-my-rss-feeds/
export const convertRelativeLinks = (htmlContent, url) => {
  if (!htmlContent || !url) return htmlContent;

  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  document.querySelectorAll("a[href]").forEach((link) => {
    let href = link.getAttribute("href");

    if (href.startsWith("#")) {
      link.remove();
      return;
    }

    if (!href.startsWith("http://") && !href.startsWith("https://"))
      link.setAttribute(
        "href",
        `${url.replace(/\/$/, "")}/${href.replace(/^\/+/, "")}`,
      );
  });

  return document.body.innerHTML;
};
