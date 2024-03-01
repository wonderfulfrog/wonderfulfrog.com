# wonderfulfrog.com

https://wonderfulfrog.com

Here is the source code for my website. With the exception of my content, feel free to take, remix, do whatever you want!

Content is kept under `posts` and `catalogue`.

## Setup

This project relies on Node.js 20.11.1 (LTS at time of writing), but probably works fine with older (or newer) versions too.

Clone the repo wherever, then:

1. `npm i`
2. `npm run dev`

That's it. You'll have a dev server on http://localhost:8080. Have fun!

### Notes

Last.fm won't work without a valid API key. It looks for it inside a `.env` file in the project root, and it's called `LAST_FM_API_KEY`. Any requests will fail otherwise.
