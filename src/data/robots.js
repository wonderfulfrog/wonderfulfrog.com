import "dotenv/config";

import EleventyFetch from "@11ty/eleventy-fetch";

const accessToken = process.env.DARK_VISITORS_ACCESS_TOKEN;

const STATIC = `# AI Data Scraper
# https://darkvisitors.com/agents/bytespider

User-agent: Bytespider
Disallow: /

# AI Data Scraper
# https://darkvisitors.com/agents/ccbot

User-agent: CCBot
Disallow: /

# AI Data Scraper
# https://darkvisitors.com/agents/claudebot

User-agent: ClaudeBot
Disallow: /

# AI Data Scraper
# https://darkvisitors.com/agents/diffbot

User-agent: Diffbot
Disallow: /

# AI Data Scraper
# https://darkvisitors.com/agents/facebookbot

User-agent: FacebookBot
Disallow: /

# AI Data Scraper
# https://darkvisitors.com/agents/google-extended

User-agent: Google-Extended
Disallow: /

# AI Data Scraper
# https://darkvisitors.com/agents/gptbot

User-agent: GPTBot
Disallow: /

# AI Data Scraper
# https://darkvisitors.com/agents/omgili

User-agent: omgili
Disallow: /

# Undocumented AI Agent
# https://darkvisitors.com/agents/anthropic-ai

User-agent: anthropic-ai
Disallow: /

# Undocumented AI Agent
# https://darkvisitors.com/agents/claude-web

User-agent: Claude-Web
Disallow: /

# Undocumented AI Agent
# https://darkvisitors.com/agents/cohere-ai

User-agent: cohere-ai
Disallow: /
`;

const fetchRobotsTxt = async () => {
  const url = "https://api.darkvisitors.com/robots-txts";
  const body = JSON.stringify({
    agent_types: ["AI Assistant", "AI Data Scraper", "AI Search Crawler"],
    disallow: "/",
  });
  try {
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
  } catch (e) {
    console.error(
      "Error fetching robots.txt from Dark Visitors API, falling back to static version",
      e,
    );
    return undefined;
  }
};

export default async function () {
  const robotsTxt = await fetchRobotsTxt();

  if (!robotsTxt) {
    return STATIC;
  }

  return robotsTxt;
}
