import collection from "./collection.js";
import date from "./date.js";
import feed from "./feed.js";
import general from "./general.js";
import postcss from "./postcss/index.js";
import tag from "./tag.js";

export default {
  ...collection,
  ...date,
  ...feed,
  ...general,
  ...postcss,
  ...tag,
};
