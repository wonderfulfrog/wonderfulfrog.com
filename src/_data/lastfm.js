require("dotenv").config();

const EleventyFetch = require("@11ty/eleventy-fetch");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(utc);
dayjs.extend(relativeTime);

const lastFmApiKey = process.env.LAST_FM_API_KEY;

const fetchRecentTracks = async () => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=wonderfulfrog&api_key=${lastFmApiKey}&format=json`;

  const response = await EleventyFetch(url, { duration: "1m", type: "json" });
  const tracks = response.recenttracks.track.slice(0, 5);

  const recentTracks = tracks.map((track) => {
    const timestamp = dayjs(track.date["#text"]).utc(true).fromNow();
    return {
      artist: track.artist["#text"],
      track: track.name,
      url: track.url,
      timestamp,
    };
  });

  return recentTracks;
};

module.exports = fetchRecentTracks;
