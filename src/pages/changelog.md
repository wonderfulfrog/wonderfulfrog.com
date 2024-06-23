---
title: Changelog
eleventyComputed:
  description: All of the latest changes on {{ meta.siteName }}.
---

# Changelog

All the changes that are fit to read!

If preferred, the [commit log is available here][commits].

## June 22nd 2024

- Added style for `<table>` elements.

| Here is         | A preview! |
| --------------- | ---------- |
| Super cool whoa | very rad   |
| Super cool whoa | very bad   |

## June 11th 2024

- Added a [webrings][webrings] page!

## May 24th 2024

- Improve error handling when env vars are missing, or fetch requests fail.

## April 7th 2024

- Updated `robots.txt` to use [Dark Visitors][darkvisitors]' API.

## March 23rd 2024

- Fixed "Posts" page showing up under new posts
- Add missing meta description tags to pages
- Update footer to include `/changelog` link

## March 22nd 2024

- Add `/changelog`
- Update the site favicon to use a white outline
- Fix the `theme-color` meta tag being out of date for dark mode

## March 19th 2024

- Add a Netlify function to periodically rebuild the site to keep generated data recent

## March 13th 2024

- Revise my implementations of `robots.txt` and `sitemap.xml`
- Add a frontmatter key to ignore from collections

## March 9th 2024

- Add a "skip to content" link when using a keyboard
- Ensure that cached images are persisted between builds
- Further dark mode tweaks

## March 8th 2024

- Adjusted the dark mode backgrounds to be lighter

## March 5th 2024

- Fixed a bunch of broken links
- Fixed a few post typos/issues
- Responsive tweaks for Decap CMS
- Added redirects for old domain names
- Post pages will use the `excerpt` as a meta description

## March 4th 2024

- Fixed my page title (wonderulfrog -> wonderfulfrog)
- Added a [blogroll] item

## March 3rd 2024

- New site is launched!
- Built with [Eleventy][11ty]
- [Read all of the changes][v3]

[commits]: https://github.com/wonderfulfrog/wonderfulfrog.com/commits/main/
[11ty]: https://www.11ty.dev/
[v3]: /posts/version-3/
[blogroll]: /blogroll/
[darkvisitors]: https://darkvisitors.com
[webrings]: /webrings/
