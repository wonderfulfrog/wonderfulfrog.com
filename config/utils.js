const path = require("path").posix;
const slugify = require("slugify");

const slugifyString = (string) => {
  return slugify(string, {
    lower: true,
  });
};

const getFontUrl = (src) => path.join("/assets/fonts", src);

module.exports = {
  getFontUrl,
  slugifyString,
};
