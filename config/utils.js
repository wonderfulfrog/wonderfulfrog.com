const slugify = require("slugify");

const slugifyString = (string) => {
  return slugify(string, {
    lower: true,
  });
};

module.exports = {
  slugifyString,
};
