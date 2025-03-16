import { getFontUrl } from "../utils/fonts.js";
import fonts from "../../config/design-tokens/fonts.js";

const preloads = [
  {
    as: "font",
    href: getFontUrl(fonts.display.weights.ExtraBold.path),
    crossorigin: true,
  },
  {
    as: "font",
    href: getFontUrl(fonts.display.weights.Bold.path),
    crossorigin: true,
  },
  {
    as: "font",
    href: getFontUrl(fonts.body.weights.Regular.path),
    crossorigin: true,
  },
];

export default preloads;
