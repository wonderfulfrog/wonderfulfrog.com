import path from "path";

import { ASSETS_FONTS_PATH } from "../../config/constants/paths.js";
import fonts from "../../config/design-tokens/fonts.js";

const getFontUrl = (src) => path.join(ASSETS_FONTS_PATH, src);

const preloads = [
  {
    as: "font",
    href: getFontUrl(fonts.display.styles.Regular.path),
    crossorigin: true,
  },
  {
    as: "font",
    href: getFontUrl(fonts.body.styles.Regular.path),
    crossorigin: true,
  },
  {
    as: "font",
    href: getFontUrl(fonts.monospace.styles.Regular.path),
    crossorigin: true,
  },
];

export default preloads;
