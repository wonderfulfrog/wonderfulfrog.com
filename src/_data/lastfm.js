require("dotenv").config();

const EleventyFetch = require("@11ty/eleventy-fetch");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(utc);
dayjs.extend(relativeTime);

const lastFmApiKey = process.env.LAST_FM_API_KEY;

const baseUrl = "http://ws.audioscrobbler.com";
const username = "wonderfulfrog";

const fetchLastFm = async (method, duration, extraArgs) => {
  try {
    const path = `/2.0/?method=${method}&user=${username}&api_key=${lastFmApiKey}&format=json`;
    let url = `${baseUrl}${path}`;

    if (extraArgs) {
      url = `${url}&${extraArgs}`;
    }

    const response = await EleventyFetch(url, { duration, type: "json" });

    return response;
  } catch (e) {
    console.error(`Error fetching last.fm data for method=${method}`, e);
    return undefined;
  }
};

const fetchRecentAlbums = async (period = "7day") => {
  const response = await fetchLastFm(
    "user.gettopalbums",
    "7d",
    `period=${period}`,
  );

  if (!response) {
    return [];
  }

  const albums = response.topalbums.album.slice(0, 8);

  const recentAlbums = albums.map((album) => {
    const extraLargeImage = album.image.find(
      (img) => img.size === "extralarge",
    );
    const imageUrl = extraLargeImage ? extraLargeImage["#text"] : "";
    return {
      artist: album.artist.name,
      artistMbid: album.artist.mbid,
      album: album.name,
      albumMbid: album.mbid,
      playcount: album.playcount,
      url: album.url,
      imageUrl,
    };
  });

  return recentAlbums;
};

const fetchRecentTracks = async () => {
  const response = await fetchLastFm("user.getrecenttracks", "5m");

  if (!response) {
    return [];
  }

  const tracks = response.recenttracks.track.slice(0, 5);

  const recentTracks = tracks.map((track) => {
    const timestamp = track.date
      ? dayjs(track.date["#text"]).utc(true).fromNow()
      : dayjs().fromNow();
    return {
      artist: track.artist["#text"],
      track: track.name,
      url: track.url,
      timestamp,
    };
  });

  return recentTracks;
};

module.exports = async function () {
  const recentTracks = await fetchRecentTracks();
  const recentAlbums = await fetchRecentAlbums();

  return {
    recentTracks,
    recentAlbums,
  };
};
