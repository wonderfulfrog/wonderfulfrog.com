---
title: What’s Next?
excerpt: From one framework to another.
tags: ["nextjs", "gatsbyjs", "tailwind"]
---

This site is now powered by NextJS. This is the site rebuild I have been talking about for some time, but it didn’t turn out the way I was planning.

## Why NextJS?

Short answer: because I wanted to learn it.

Long answer: I wasn’t completely satisfied with the GatsbyJS ecosystem. It lead me to learn GraphQL and a little bit of Webpack, but it felt largely like a black box to me.

More recently though I read about [some troubling details][gatsby-contractor] a contractor faced while working for GatsbyJS. I was not at all impressed with how GatsbyJS handled this. Their CEO’s [empty apology in an open letter][gatsby-open-letter] reeks of “techbro culture” to me. The whole situation is a real mess. Given that I’ve personally been unsatisfied with the ecosystem, this seemed like a good time to ditch GatsbyJS in favor of something else. But what...?

For a while I toyed with the idea of making it myself, but that seemed like too much work for how little I need. I’m not that interested in tweaking every aspect of my build process. I like to find opinionated tools that align with my goals instead of making my own.

_Aside: An opinionated tool in my case is a framework or library that has opted to make some choices or “sensible defaults” that align with how I would potentially use it. I don’t need to spend time reconfiguring everything to work how I want it to._

I tried to find some lightweight frameworks that read Markdown (or MDX) files and create HTML files from them. After reading [this post][gatsby-vs-next], I was convinced that I should try out NextJS. More importantly the post told me how NextJS worked. It made total sense to me:

- Read the files we want
- Use remark to convert them to HTML
- Build pages from that output

Done. Simple. No need to add GraphQL. Right from the get-go everything made sense to me, which I can’t necessarily say for GatsbyJS.

## What about Tailwind or Theme UI?

I previously stated that I was planning on using [TailwindCSS][tailwind] and then later [Theme UI][theme-ui] to help style my site. I ended up flitting between the two for some time before deciding that they were too heavy-handed and too complex for what I needed. It also felt like I ended up fighting with the default style, trying to remove style I didn’t like. This sounds like an opinionated tool that doesn’t align with my goals. I opted to instead do my styling by hand. I only use a small set of the standard HTML elements, so I needn’t worry about making sure every single element is styled properly. Instead I opted to:

- Set the font to something I like (in this case all system defaults)
- Set some CSS variables with a color scheme I designed
- Gradually style every element using my current content as a test
- Add some font scaling

Called it done there.

Now that I have the basic framework down, I plan to flex my developer muscles and slowly introduce some of my own character and add delight into my site. I want to make it a fun place to visit.

As much fun as a website can be, anyway. 😄

[gatsby-contractor]: https://clacified.com/tech-science/news/nat-alison-testimonial-about-gatsby
[gatsby-open-letter]: https://www.gatsbyjs.com/blog/open-letter-to-gatsby-community
[gatsby-vs-next]: https://jaredpalmer.com/gatsby-vs-nextjs
[tailwind]: https://tailwindcss.com
[theme-ui]: https://theme-ui.com
