import { JSDOM } from "jsdom";

// From coryd.dev
// https://www.coryd.dev/posts/2025/generating-absolute-urls-in-my-rss-feeds/
const convertRelativeLinks = (htmlContent, url) => {
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

export default {
  convertRelativeLinks,
};
