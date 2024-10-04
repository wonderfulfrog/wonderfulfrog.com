import "dotenv/config";

import EleventyFetch from "@11ty/eleventy-fetch";
import cheerio from "cheerio";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(utc);
dayjs.extend(relativeTime);

const fetchLetterboxd = async (duration) => {
  try {
    const url = `https://letterboxd.com/wonderfulfrog/rss/`;
    const response = await EleventyFetch(url, { duration, type: "text" });
    return response;
  } catch (e) {
    console.error("Error fetching data from Letterboxd", e);
    return undefined;
  }
};

const fetchRecentMovies = async () => {
  const response = await fetchLetterboxd("1d");

  if (!response) {
    return [];
  }

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

export default fetchRecentMovies;
