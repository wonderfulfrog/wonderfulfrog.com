require("dotenv").config();

const EleventyFetch = require("@11ty/eleventy-fetch");

const accessToken = process.env.DARK_VISITORS_ACCESS_TOKEN;

const fetchRobotsTxt = async () => {
  const url = "https://api.darkvisitors.com/robots-txts";
  const body = JSON.stringify({
    agent_types: ["AI Assistant", "AI Data Scraper", "AI Search Crawler"],
    disallow: "/",
  });
  const response = await EleventyFetch(url, {
    duration: "1d",
    type: "text",
    fetchOptions: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ["Content-Type"]: "application/json",
      },
      body,
    },
  });

  return response.toString();
};

module.exports = async function () {
  const robotsTxt = await fetchRobotsTxt();

  return robotsTxt;
};
