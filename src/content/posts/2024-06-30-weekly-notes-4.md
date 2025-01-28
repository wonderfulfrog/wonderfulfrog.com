---
title: "Weekly Notes #4"
excerpt: The week of the last week of June.
tags:
  - ai
  - homelab
  - music
---

I can't believe we're already at the end of June. Tomorrow is Canada Day. Where does the time go?

[Config](https://config.figma.com/) happened! Don't forget to [turn off your "Content training" setting](https://help.figma.com/hc/en-us/articles/17725942479127-Control-AI-features-and-content-training-settings) in Figma.

If you hadn't seen, I wrote a quick post on [finding new music](/posts/music-today-is-great/).

## Links

### [Oreo Kintsugi](https://kottke.org/24/06/oreo-kintsugi)

Honestly a great idea. Something that feels almost pointless but at the same time I'm so glad exists. Now will we ever see something like this outside of Japan?

Which reminds we were given our own kintsugi kit that we never got around to starting. It comes with a bowl that you have a break first, and then you repair it! We should do that.

### [Researchers Prove Rabbit AI Breach By Sending Email to Us as Admin](https://www.404media.co/researchers-prove-rabbit-ai-breach-by-sending-email-to-us-as-admin/)

This is table stakes stuff. You never leave secrets in your codebase, let alone _privileged_ ones like for admin access. This is the kind of mistake a junior developer makes when they launch their first web project, and certainly not from a company that is handling your _personal information_. I already had a low enough opinion of Rabbit, and this confirms I was right.

Even worse is that after this, Rabbit shrugged it off as [NBD](https://www.youtube.com/watch?v=YcprBCaU34U). Fortunately they have since rotated their secret tokens to new ones, and the leaked secrets are now useless.

Protecting secret tokens is the basics of _the basics_, the stuff that is expected for any reasonable company. At this point it feels practically negligent.

### The Free Web

There are two stories coming from [404 Media](https://www.404media.co/perplexitys-origin-story-scraping-twitter-with-fake-academic-accounts/) and [The Verge](https://www.theverge.com/2024/6/27/24187405/perplexity-ai-twitter-lie-plagiarism) talking about Perplexity's blatant plagiarism engine and the _blasé_ attitude the CEO has about their practices. "Well, Johnny did it too" is the kind of excuse you expect out of a toddler, not a grown-ass man running a company.

Then [Microsoft's "AI boss" comes along](https://www.theverge.com/2024/6/28/24188391/microsoft-ai-suleyman-social-contract-freeware) claiming that everything on the web is free for the taking.

I'm tired of tech these days. Tired of it all.

### [You Are Not the Things You Like](https://mikegrindle.com/posts/music-discussions)

This post got me thinking about how much (or rather how little) I've discussed music lately. There was a time that I was an active RateYourMusic user and made a plethora of lists and thoughts and occasionally reviews. I think what did me in were the haters. There's no shortage of complainers and whiners when it comes to music criticism, and I got tired of that. I went back to a world where I listened to music and that was that. There was no need to try and think of what I liked and didn't like. I could just enjoy it.

Another thing (as the author of the post also states) is that there are other things I'd rather write about than music. I'll always love music, but my passion for writing about has faded - and _that's okay_.

## Listening

Here's the top 5 of this week.

| Artist      | Play Count |
| ----------- | ---------- |
| jiai        | 53         |
| Radiohead   | 33         |
| Ultrawave   | 19         |
| Charli XCX  | 14         |
| Beach House | 11         |

Still loving _jiai_'s Persona mixes. They are great for when I don't know what to put on. _Radiohead_ shows up because I only realized recently that I was missing both _Pablo Honey_ and _The Bends_ from my library. Had to fix that small error. [_Ultrawave_](https://theultrawave.bandcamp.com/) is a nice synthwave artist who has a ton of singles. I hope they release a full album soon. _Charli XCX_ proving she has real staying power in my top 5. And _Beach House_ pulls up the rear with a full album play through the other day.

## Reading

Still working on Neil Gaiman's _Neverwhere_. I'm invested now and excited to see where this story takes me.

## Playing

Working on my _Fire Emblem: Three Houses_ Edelgard route. I'm still in the introductory section which is the same for every house. Eventually things will get interesting.

## Watching

Went to a recently re-opened theatre and saw _Thelma_. It's a fun revenge movie when the titular Thelma Post is robbed of $10,000 by a phone scammer pretending to be her grandson. In real life she thankfully did not lose her money, but this movie represents a "what if" scenario that feels believable.

It was refreshing to see a movie that did not glorify old age and was quite honest about it. It shows a side of growing old that I'm certain millennials are reckoning with right now (if they haven't already). At the same time, however, not old character was feeble and useless. They were still sprightly and independent.

I couldn't help but see a little of my own grandma in June Squibb's portrayal of Thelma, and that warmed my heart. What a fun and touching movie.

## Thinking

To keep myself occupied while continuing the job hunt, I've been spending a lot of time with my Plex server (which has now been referred to as my homelab). I'm trying to resist the temptation to tinker with it _too much_, but I'm giving in just this time.

<aside>

**What's a homelab?**

A homelab commonly refers to a server that resides in someone's home that is responsible for running a variety of applications from network security to playing media.

</aside>

I've since converted everything to run via Docker which was an interesting challenge. I didn't have a compelling reason to do so other than the fact that I could, so why not?

I've been fiendishly scouring YouTube for various setups on homelabs, and how to set up my own custom NAS using TrueNAS. It's been a lot of fun to dig into this universe.

I've been enjoying videos from [Hardware Haven](https://www.youtube.com/@HardwareHaven) and [Jeff Geerling](https://www.youtube.com/@JeffGeerling).

With all of this homelab experimentation I had to spend a fair amount of time learning about how to do networking properly. I'm glad I've had resources like [Lawrence Systems](https://www.youtube.com/@LAWRENCESYSTEMS) for this.
