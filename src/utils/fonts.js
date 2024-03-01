const path = require("path");

const getFontUrl = (src) => path.join("/assets/fonts", src);

module.exports = {
  getFontUrl,
};
