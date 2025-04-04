import pluralizeBase from "pluralize";

const filter = (collection, filters = []) => {
  return collection.filter((item) => !filters.includes(item));
};

const keys = Object.keys;

const limit = (collection, limit = 5) => collection.slice(0, limit);

const pluralize = (string, count = 0) => {
  return pluralizeBase(string, count);
};

export default {
  filter,
  keys,
  limit,
  pluralize,
};
