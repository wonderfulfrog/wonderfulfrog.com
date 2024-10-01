---
title: "Weekly Notes #8"
date: 2024-09-30T10:00:00-07:00
excerpt: The week of a a long gap between the last one.
tags:
  - work
  - networking
  - cloudflare
  - world of warcraft
youtube: true
---

{% image "https://cdn.wonderfulfrog.com/images/felbear.png", "Screenshot from the game World of Warcraft - the player character is inside a magical city called Dalaran. The player character is a druid in 'Bear Form', where the bear is a bipedal, gorilla-looking creature. The bear has glowing green runes that look like tattoos, with magical green energy spewing out of the tattoos like a green mist.", "It may have taken me a number of tries, but I'm very proud of unlocking this Bear form!" %}

I know it's been a while since my last post. Life has been busy (but everyone says that). I haven't felt like I've had the energy to write lately. I've spent a lot of time adjusting from my old routines and my new job. Speaking of...

I've been at my new job at [We The Collective](wethecollective.com) for almost three months now. When my manager told me that my 3-month check-in was coming up I couldn't believe it.

I've learned a lot about myself in the last few weeks and how I've established my working styles. I've really been able to flex my CSS muscles though, which has been very rewarding for me. I felt like I've learned many new techniques in my short time already!

My last post mentioned some network rack upgrades, which I've finished! I purchased a 6U rack and mounted it on the wall. I've learned the hard way that screws going into studs really benefit from a ratchet. Use the right screws next time. Other than that, everything went smoothly! I decided to go with a patch panel and keystone jacks after I was persuaded by my local sysadmin.

While I was performing all these network upgrades, I also took the time to pull all of our old 5E cable and upgrade it to Cat6. This also allowed me to make all of the cable a bit longer, which gives me some slack to potentially hide the cables within the drywall in the future. For now I used some channeling which hides the cables cleanly.

We also finally dug into our storage room problem. The biggest portion was the basement storage, which was unfortunately half-full of things that weren't ours - old tiles, grout compound that solidifed, gas canisters, and a bunch of other old junk. We managed to give away most of it or donate what was usable. Now we have a storage room that can comfortably fit our future kayaks!

## Moving to Cloudflare

Over the weekend I converted my site from Netlify to Cloudflare. Earlier this year, another round of layoffs at Netlify have me questioning the company's future. I didn't know what I wanted to do at the time, but eventually settled on using Cloudflare (specifically their [Pages](https://pages.cloudflare.com/) feature, more on that in a bit).

I've previously used Cloudflare years ago when they were newer. At some point I switched away - I don't recall why - and was happy with whatever solution I had at the time. Some time later they were in the news for being the infrastructure keeping the notorious site Kiwifarms online. If you're unaware, Kiwifarms was the home for hateful people to facilitate real-life harassment and doxxing (among more awful things). Clouflare was the target of a pressure campaign to drop Kiwifarms, but Cloudflare dug in their heels and refused to budge, saying they won't drop someone just because they run afoul of their morals or beliefs.

Eventually though, [Cloudflare relented](https://blog.cloudflare.com/kiwifarms-blocked/) and blocked Kiwifarms. According to Cloudflare, it had nothing to do with the pressure campaign but rather their seeing an increasingly aggressive responsive from Kiwifarms users.

I didn't like that it took so long for Clouflare to respond, let alone do anything. I understand their position and not wanting to be arbiters of who is and isn't allowed to effectively have protection on the internet... but on the other hand Kiwifarms had been doing actual, real harm to people. The response felt like a move of desperation to save face rather than claiming it was for safety. I'm happy for the result, but not how they got there. I decided to avoid using Cloudflare for the foreseeable future.

Recently though, Cloudflare has been doing something that interests me very much - [blocking AI crawlers](https://blog.cloudflare.com/declaring-your-aindependence-block-ai-bots-scrapers-and-crawlers-with-a-single-click/). I found the breakdown of their customers who wanted to block AI crawlers interesting - it's a staggering 85%. It seems clear to me that nobody wants this garbage, and yet the industry is continuing to push and push for this to happen.

I've been using tools like [Dark Visitors](https://darkvisitors.com/) to curtail AI crawlers from touching my site, but that assumes that said AI crawlers are respecting `robots.txt`, which I'm fairly certain the majority aren't. If [the news around Perplexity](https://rknight.me/blog/perplexity-ai-is-lying-about-its-user-agent/) is any indication, they _definitely_ aren't.

The other part of this is that no matter how hard Dark Visitors tries, there are so many crawlers out there and the number is assuredly growing by the day.

`robots.txt` is unfortunately based on the honor system. You hope that crawlers are respecting it. It feels like a battle I can't win.

{% image "https://cdn.wonderfulfrog.com/images/cloudflare-meme.jpg", "A meme template - the first panel features a villain saying 'You can't defeat me.' with the text 'AI Crawlers' superimposed on top, the next panel features a superhero saying 'I know, but he can' with a very conspicuous mountain behind him. The last panel features the aforementioned mountain exploding, with the text 'Cloudflare' superimposed on the mountain.", "I am aware of the adage of putting all of one's eggs in one's basket... perhaps 'the enemy of my enemy is my friend' is appropriate here." %}

Cloudflare does what `robots.txt` cannot - it blocks traffic from even getting to your site in the first place. They can't access `robots.txt` - they can't access anything!

With that in mind, I made the switch. It was honestly a completely painless process - they have plenty of automated tools that can query your domains and set up the DNS automatically. They also have a featured called [Cloudflare Pages](https://pages.cloudflare.com/) which effectively replaces my need of Netlify. The final output of my site is a bunch of HTML and CSS files, so my hosting needs are very simple. It has all the CI features I need. I set up a super simple worker to deploy my site every few hours. It works great!

I also took the time to update my CDN to use [Backblaze B2](https://www.backblaze.com/cloud-storage) instead of [Bunny](https://bunny.net/). I have nothing against Bunny, but felt like paying for it was a waste - I don't need much and already pay for Backblaze.

I still feel a little conflicted using Cloudflare, but I can't argue with their stance when it comes to AI. Something something no ethics under capitalism, which feels like a convenient excuse.

## Links

Some of these links are recent and others are older - I've accumulated quite a few since July and wanted to pick the best of the best.

## The Question No One Asks Shigeru Miyamoto

{% youtube "n3dFAK3Owtg", "The Question No One Asks Shigeru Miyamoto" %}

The term "sandbox game" might be familiar to you, or "open world" perhaps. Have you heard of the term "minature garden", or _hakoniwa_? This video dives deep into what Miyamoto really means when he says he's wants to build a "miniature garden" and how it ties into the Zelda (and Mario) franchises.

I've never heard of Good Blood before. The sheer _quality_ of this video is incredible. The video's thesis alone is interesting, but it's accompanied by wonderful visuals and audio that really draw you into to the narrative the creator is telling.

## [How to Monetize a Blog](https://modem.io/blog/blog-monetization/)

Like the pages of _House of Leaves_. This post explores a brief history of how the Internet became monetized, while also _living_ that history as you scroll.

I don't want to give anything more away. Please take some time out of your day to experience this.

## [A Historical Summary of My Music Tastes](https://brainbaking.com/post/2024/09/a-historical-summary-of-my-music-tastes/)

A fun read into Brain Baking's musical history. Incidentally their beginnings were a lot like my own. I loved this post so much I plan to write my own (and now that I've said that I'll have to actually do it - _uh oh_). I discovered a bunch of bands that I can't wait to dive into.

## Playing

I recently got back into _World of Warcraft_ (as I usually do) since there was a new expansion released back in August. _The War Within_ has been a great experience as a solo player, as there is so much available to you now that it feels like you can truly experience everything without having to deal with the playerbase. That being said, I've found a cool group of players to push content with which has been my first experience doing "end game content" with other people.

The Delves feature is a ton of fun. It's like a traditional 5-man dungeon built for one player. It tends to be a straightforward process of A to B, but each delve has a few different scenarios that change your goal. Each location is diverse and interesting. I particularly enjoy the Fungal Folly delve for its rich wildlife, but The Sinkhole is fun for its entirely underwater aesthetic!

{% image "https://cdn.wonderfulfrog.com/images/tww-vista.png", "Screenshot of the game World of Warcraft - the player character and an NPC called 'Olbarig' are seen on a cliffside looking off to mountains in the distance. The cliff features bright green grass and wildflowers. In the distance, birds can be seen flying around the mountains. The sky features painter-like clouds, that look like smooth, flowing brushstrokes.", "The War Within is full of stunning views, despite some locations being underground!" %}

This time around I initially started out as a mage. I hadn't played the class in years (probably not since the original game) and thought it was time to give it a proper try. Arcane is a lot of fun with a simpler rotation. Eventually though my alt-itis[^1] took over and I made a druid. I'd never actually taken a druid past the first few introductory levels so this was almost like a new experience. I particularly enjoy tanking, as its a pivotal role in dungeons (but do not enjoy the reaction from certain players when things go wrong). It's been a bit stressful, but as I mentioned I have a chill group of buds to play with who aren't concerned with 100% perfect play.

Without a doubt I'd say _The War Within_ is the best _World of Warcraft_ has been in years. I hope this represents the direction of the next upcoming expansions in the _Worldsoul_ trilogy, because I like what I see!

## Reading

{% image "https://cdn.wonderfulfrog.com/images/drizzt-books.png", "A horizontal grid of book covers - the books are titled Homeland, Exile, and Sojourn.", "I know you shouldn't judge a book by its cover, but I love the artwork on these!" %}

I've been in a bit of a (continuing) reading slump lately. I was craving some pulpy fantasy books - something that I can read easily and enjoy. Somehow I ended up in the series of Drizzt books (which there are now close to 40) by R.A. Salvatore, and started with The Dark Elf Trilogy (_Homeland_, _Exile_, and _Sojourn_). I was enthralled! They are easy to read, and quite engrossing. I'm enjoying my time in the Forgotten Realms. I typically read before bed to help myself fall asleep, but these books have been so interesting and fun that I find myself more awake than when I started reading!

I've already finished _Homeland_ and _Exile_, and have started _Sojourn_. I'm going through them quickly!

## Listening

{% image "https://cdn.wonderfulfrog.com/images/the-rise-and-fall-of-a-midwest-princess.jpg", "Album art from the album 'The Rise and Fall of a Midwest Princess' by Chappell Roan. On the cover is Chappell Roan with bright red hair and a small tiara. Her expression suggests impatience or uninterested in having her photo taken, with a slight glower. Her turquoise dress has a sash draped over it that reads 'Chappell'.", "" %}

I don't know about you, but _Chappell Roan_ has music has been stuck in my head. I've had ["HOT TO GO!"](https://www.youtube.com/watch?v=xaPNR-_Cfn0&pp=ygUXY2hhcHBlbGwgcm9hbiBob3QgdG8gZ28%3D) earworm'd for days. The whole album is chock full of bangers and catchy tunes. I can't stop humming and singing them! I also recently learned her name is pronounced like a (church) chapel and not like Chappelle in Dave.

For the most recently Bandcamp Friday, I bought up the entire _[Softcult](https://softcult.bandcamp.com/)_ discography. They're like a grungy shoegaze and I'm _here for it_. I haven't found another band like their sound (so if you know of any, please tell me!).

_Lady Gaga_ released a new album as a companion piece to her upcoming performance in _Joker: Folie à Deux_ called _Harlequin_. What's inside is a fun re-imagining of some classic songs and jazz staples. I don't know, something about it just clicked immediately and I loved it. I want to listen again and again!

My absolute top (according to last.fm anyway) would have to be Dream Thing's _Satisfactory_, which if you couldn't guess is the soundtrack to one of my favourite games ever [_Satisfactory_](https://store.steampowered.com/app/526870/Satisfactory/) (recently had their 1.0 release!). I don't know how they did it, but something about this music makes it the perfect sort of thing to keep on task with. The ambient synths weave in and out seamlessly and deliver a vibe that just makes me concentrate. Or lose track of time.

## Watching

Not much to report on this one. Lately we've been watching reruns of _Fraiser_, which is fun. Fraiser really is a jackass though, and the episodes where he isn't in them tend to be my favourites. Like when Niles took over for him running his show for a week.

I saw _Megalopolis_ in theaters this weekend. It was certainly an experience, that's for sure. [I summarized my thoughts on Letterboxd](https://letterboxd.com/wonderfulfrog/film/megalopolis-2024/):

> I wholeheartedly did not enjoy this movie, and yet afterward we could not stop talking about it. There were so many moments to remember - and some even got overwritten in my mind and had to be teased out later.
>
> I don't know if I'm experiencing a trainwreck or another cultural touchstone...

I honestly hope I never see it again, if only so that my memory of the movie becomes twisted and changed and I start recalling moments that never actually happened...

---

That's all that in a nutshell! I want to return to a weekly schedule again, so here's me being optimistic saying "I'll see you next week!"

[^1]: For the non-MMO gamers, an "alt" is a character other than your "main" (the character you tend to play the most). I love making alts and leveling.
