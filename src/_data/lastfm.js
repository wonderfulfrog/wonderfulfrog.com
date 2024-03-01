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

const fetchRecentAlbums = async (period = "7day") => {
  const path = `/2.0/?method=user.gettopalbums&user=${username}&api_key=${lastFmApiKey}&format=json`;
  const url = `${baseUrl}${path}&period=${period}`;

  const response = await EleventyFetch(url, { duration: "7d", type: "json" });
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
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=wonderfulfrog&api_key=${lastFmApiKey}&format=json`;

  const response = await EleventyFetch(url, { duration: "5m", type: "json" });
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
