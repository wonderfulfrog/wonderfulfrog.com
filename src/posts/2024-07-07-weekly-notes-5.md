---
title: "Weekly Notes #5"
excerpt: The week of the first week of July. How can it already be July?!
tags:
  - ai
  - figma
  - music
  - astrocolor
---

We are gearing up for our summer vacation right now. By that I mean my wife is doing everything and I'm here lazily writing another blog post.

The summer heat is here and it's not been a great time. I don't do well once the temperature approaches the mid 20s (celsius). We're staying inside as much as we can with our air con.

A short one this week as I'm bushed.

## Links

One day that they won't all be AI-focused.

### [Figma pulls the plug on App Design](https://www.404media.co/figma-disables-ai-app-design-tool-after-it-copied-apples-weather-app/)

You'll remember from last week about my mentioning of Figma's introduction of new AI features. In record time they had to disable their "app design" plugin because it was ripping off Apple's weather app.

If I'm not mistaken, I thought the entire point of machine learning was to do expressly that?

### [It's Not AI That I Fear, It's Us.](https://thecorners.substack.com/p/its-not-ai-that-i-fear-its-us)

Nadia Bolz-Weber gets it absolutely correct here, and I'm astonished I hadn't framed it this way sooner. The inherent problem with AI is not the technology itself (it was being used before OpenAI soared to popularity), but rather it's be people (read: techbros) behind it.

She shares this question she asked during a presentation. I'm including it in full because it's a fantastic question (and also references _Star Trek_):

> We all heard Sam Altman on stage last night and he is obviously super smart, but maybe doesn’t have a *great* deal of what we would call *emotional intelligence*. And I assume most of these other freakishly smart dudes on the list are the same…they are great at this computer thing because maybe they think a bit like computers themselves, which is how they got where they are. But if we think about Star Trek, which of course we should, they honestly all feel a bit like a group of Vulcans to me. And collectively they are creating the AI character Data. Which is great. But my question is who are these advisors you mention…are they all just other tech bros? Like, **who is Counselor Troi in this situation**? The advisor with empathy, wisdom and emotional intelligence? Please tell me there are ethicists and theologians at the table

This to me is so important and I'm so glad she called it out. I know from my own experience that my lack of emotional intelligence was not evident until I had a partner who _did_ have a developed emotional intelligence skill.

I'm also so grateful that my partner took the time to help me learn and develop that skill because it has been so important to me. I wish those in power could have this same reckoning, because I see it only as a net positive for society and the world.

It's common to see in the technology fields men (and it _is_ predominately men) that have a lack of emotional intelligence. It _does_ feel like they are a bunch of Vulcans, but they don't have any human advisors to introduce compassion, empathy, or understanding.

To me it comes back to a diverse array of perspectives and voices that are involved. We need the emotionally intelligent voices in the same room.

### [Declare your AIndependence: block AI bots, scrapers and crawlers with a single click](https://blog.cloudflare.com/declaring-your-aindependence-block-ai-bots-scrapers-and-crawlers-with-a-single-click?ref=birchtree.me)

I'm happy to see a provider of this scale introducing a "turn this on to block AI at the access level" feature. That's great.

I thought it was especially interesting to [see the results of a survey](https://blog.cloudflare.com/content/images/2024/07/image9.png) they sent to Cloudflare users. It was overwhelmingly (85%) for blocking AI crawlers. I would consider the average Cloudflare user to be at least tangentially into technology at worst, enthusiastic otherwise. To me this is suggesting that the group of people who _should most likely be into AI_ are in fact not.

## Listening

This week's top artist was _[Astrocolor](https://www.astrocolormusic.com/about)_, who I heard about from a friend of mine while at their BBQ. They're like a mix of jazz and psychedelia. I've only just started exploring their catalogue, but so far every release has felt like its own experience.

They're also from our little sleepy town of Victoria, so look at that home-grown talent!

## Watching

Watched 2021's _Cruella_ which turned out to be a fun watch. This is an alternate version of events that shows Estella (soon-to-be Cruella) growing up during the '70s punk rock movement. The movie is largely carried by Emma Stone and Emma Thompson's acting, and without them I think this movie would've flopped. Their performances though are wonderful and so enjoyable to watch.

The costume design was incredible. It's no wonder it won an award for it!

## Thinking

Spent a fair portion of my weekend redoing the homelab setup again. This time I installed Ubuntu Server instead of Desktop for a leaner install. Everything is still using Docker containers which feels great. It was super simple to load everything - literally copy/paste my configuration files and I was online within a few seconds. That said, arriving at the point where I could fire up Docker took a little while.

I have it set up so I can access applications using a domain name tied to the VLAN they belong to (e.g. `lab.wonderfulfrog.com`) using their hostname. The next step, or my ideal setup, would be to have all of my various applications tied to a subdomain of `lab.wonderfulfrog.com` (except for the public facing ones) to make monitoring and working on the setup easy. It seems the Unifi OS does not support static DNS entries, so I'm currently stuck trying to figure out how to tackle this. One thought I had was using [dnsmasq](https://thekelleys.org.uk/dnsmasq/doc.html) to run a local DNS server...
