require("dotenv").config();

const EleventyFetch = require("@11ty/eleventy-fetch");
const cheerio = require("cheerio");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(utc);
dayjs.extend(relativeTime);

const fetchRecentMovies = async () => {
  const url = `https://letterboxd.com/wonderfulfrog/rss/`;

  const response = await EleventyFetch(url, { duration: "1d", type: "text" });

  const $ = cheerio.load(response, { xml: true });

  const recentMovies = [];

  $("channel")
    .children("item")
    .slice(0, 6)
    .each((_, element) => {
      const title = $(element).children("letterboxd\\:filmTitle").text();

      if (!title) {
        return false;
      }

      const watchedDate = $(element)
        .children("letterboxd\\:watchedDate")
        .text();
      const year = $(element).children("letterboxd\\:filmYear").text();
      const img = $(element).children("description").text();
      const imgSrc = $(img).children("img").attr("src");
      const url = $(element).children("link").text();
      const rewatch = $(element).children("letterboxd\\:rewatch").text();
      const rating = $(element).children("letterboxd\\:memberRating").text();

      recentMovies.push({
        imgSrc,
        isRewatch: rewatch === "Yes",
        rating,
        title,
        url,
        watchedDate,
        year,
      });
    });

  return recentMovies;
};

module.exports = fetchRecentMovies;
