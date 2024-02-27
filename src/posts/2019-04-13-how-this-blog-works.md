---
title: How this blog works
excerpt: Everything powering this blog explained.
tags: ["gatsbyjs", "ssg", "react"]
---

---

**Update October 6th, 2020**: I have switched from GatsbyJS to Next. Everything else is more-or-less the same. I will be adding a colophon page eventually.

---

I was recently reading [Jumbo's Privacy Policy][] (and also gave their product a shot - it works well) and felt inspired to explain how everything powering this blog is set up, and why I decided to use the technology I chose. I hope this provides the visitor more transparency into how my site works, and also an educational resource for anyone looking to start a blog of their own.

[jumbo's privacy policy]: https://blog.jumboprivacy.com/privacy-policy.html "Jumbo's Privacy Policy"

## Static site generation

Something like a blog is generally fairly static unless new a post is added, so it seemed overkill to involve a CMS like Wordpress or Drupal. Not to mention all the security updates I'd be responsible for, or paying another company to manage them for me. With that in mind a static site generator seemed like the best choice.

## Why GatsbyJS?

As many projects I work with currently involve using [React][], I thought appropriate to use something like [GatsbyJS][] to make a static site. This would also give me potential skills at work for future projects.

[react]: https://reactjs.org/ "React - A JavaScript library for building user interfaces"
[gatsbyjs]: https://www.gatsbyjs.org/ "GatsbyJS"

I've previously used [Jekyll][] to generate static sites, but with it being Ruby I felt out of my element, and I'm not really interested in learning it right now. It also felt like a lot of overhead to get a site up and running. I opted to try something else this time.

[jekyll]: https://jekyllrb.com/ "Jekyll"

I wasn't interested in coding up something from scratch, and it just so happens that GatsbyJS provides a wealth of [starter-kits][] to work with. I didn't want to code from scratch as I felt I wouldn't learn a lot from creating my own application - I have a general idea of how things should work in React, so I'd rather take a look at something already done and tweak it to my needs. I wouldn't be providing any value to the open-source community either as there are probably plenty of "React blogs" out there already.

[starter-kits]: https://www.gatsbyjs.org/starters/?v=2 "A list of GatsbyJS starter kits"

After seeing Dan Abramov's [Overreacted blog][] was powered by the [`gatsby-starter-blog` starter][] I decided to take a look myself. It had everything I needed - static site generation, lightning fast performance, out-of-the-box RSS, and a pretty good looking theme. After poking around in the repo a bit I figured this was just what I needed.

[overreacted blog]: https://overreacted.io/ "Dan Abramov's Overreacted blog"
[`gatsby-starter-blog` starter]: https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/ "gatsby-starter-blog starter"

### What I ended up tweaking

Besides a few theme bits here and there (read: splash of teal everywhere), I didn't change much. I originally omitted the `<Bio />` component from all pages as I didn't have much to write there, but later added it back in with a link to a Contact page.

Speaking of which, I also added a custom [Contact page][]. This by itself doesn't do anything, but thanks to my webhost it acts as a contact form and accepts submissions (more on that later). GatsbyJS itself doesn't do anything besides provide a static page.

[contact page]: https://devinlumley.me/contact "Link to my contact page"

## Code management - Git & GitHub

I used [Git][] primarily because I am familiar and comfortable with it. That's the long and the short of it. Version control is essential, even for personal projects. If you're not already I'd recommend you get familiar with Git, or at least another alternative. Know how to make branches, revert commits, stash code, and don't be afraid of `git rebase`! Git has some of the best [documentation][] around.

[git]: https://git-scm.com/ "Git homepage"
[documentation]: https://git-scm.com/docs "Git documentation"

I used [GitHub][] as a code repository again because I was most comfortable with it and familiar. I have found it reliable for my use cases, and is generally working when I need it ([GitHub does go down sometimes...][]). There is also a large open-source community there, so it seemed prudent to have my open-source code hosted there.

[github]: https://github.com/ "GitHub"
[github does go down sometimes...]: https://github.blog/2018-10-30-oct21-post-incident-analysis/ "Blog post about GitHub's downtime on October 21st 2018"

## Site hosting - Netlify

This was the piece I struggled with the most. I originally wanted to self-host my site, but that proved to be too tedious for me. I'd rather have everything "just work" rather than be in charge of deployments or security patches. That would also mean I'd have to be in charge of a server and keep on top of it. No thanks.

A friend of mine offered me some space on his server which was very kind of him, and it would've worked fine since this was a static site. This didn't work for me though since it'd require manual deployments. It's a small thing but I don't want to be responsible for managing them. Next!

[GitHub Pages][] seemed like the choice for me. It deployed automatically based on the repo contents, and doesn't require any maintenance. This would be on GitHub's servers, so no security patches. They support custom domains (and with HTTPS). Win win! This worked fine in the beginning, but I noticed something I didn't care for - if I wanted to update my site it required access to my own development machine. Since I chose GatsbyJS which uses React, the static version of the site needs to be transpiled and built - which requires the code repo cloned and set up. Yuck! That's too much work.

[github pages]: https://pages.github.com/ "GitHub Pages"

What I wanted was something that could handle automatic deployments by building the site on their servers, and provide hosting. Enter Netlify!

It offered all of the same features as GitH
ub Pages, but also allowed for building the site on their servers. It monitors the `master` branch (by default), and re-builds the site when it detects changes. This was perfect! Now I could make updates from anywhere and commit them to my repo. Netlify would then deploy the site for me and that's it! Perfect.

Prior to choosing Netlify I reviewed their Terms of Service and Privacy Policy. I felt I could trust them, even as a free service. Since I am on the free plan, they can terminate my account at any time for any reason. I don't think Netlify is in the business of doing that without warning, but it's still something for me to remember. Given that everything has been working perfectly with no issues, I'm looking at becoming a paying customer if that'll guarantee my site won't be suddenly removed (so long as I don't break any rules).

As an additional bonus (I was not aware of it when I chose Netlify) - they offer [form handling][]! This means I can accept form submissions from visitors should I so choose. I decided to throw together a quick form for contacting me if anyone desires. It can even forward submissions to your inbox. Very handy!

[form handling]: https://www.netlify.com/docs/form-handling/ "Details on Netlify's form handling"

## How traffic is managed - Cloudflare

Something like [Cloudflare][] probably seems overkill for a blog (let alone a static site), but I thought why not and give it a shot. They've recently impressed me with their [1.1.1.1 DNS][], and they regularly post about goings-on and act very transparently. I personally value that a lot, and as such I'd like to use their services. Out-of-the-box Cloudflare's DNS services provide lightning-fast resolution time - so my already snappy blog should feel even snappier (Safari users especially - just kidding). Cloudflare also caches my site, so should Netlify go down - Cloudflare can serve a cached version of my site. Since my site is generally pretty static, this is ideal! There's also things like DDoS protection, load balancing, and other fancy tech that my blog (probably) won't need.

[cloudflare]: https://www.cloudflare.com/ "Cloudflare"
[1.1.1.1 dns]: https://one.one.one.one "1.1.1.1 DNS"

## Miscellaneous

For my domain names I use [Namecheap][]. No real reason beyond good prices. They offer lots of configuration options for your domain, although this is likely standard across any domain name provider.

[namecheap]: https://www.namecheap.com "Namecheap"
