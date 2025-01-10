---
title: Default App Changes in 2024
date: 2025-01-10T10:23
excerpt: I changed up some of my default apps during 2024, let's talk about that.
tags:
  - default-apps
  - 1password
  - bitwarden
  - plex
  - plexamp
  - last-fm
  - iterm2
  - wezterm
---

I ended up changing up preferred or default apps up in 2024, and thought it would be interesting to highlight the changes here. I'll do this at the end of 2025 and see if anything else changes!

I also updated my [/uses](/uses) page to match these new changes.

## iTerm2 to WezTerm

Around May of 2024, [iTerm2's 3.5.0 patch notes](https://iterm2.com/downloads/stable/iTerm2-3_5_0.changelog) mentioned the inclusion of ChatGPT. The addition was a forced change, albeit not functioning until the user provided an OpenAI API key to enable it. I didn't appreciate how AI was shoehorned into my terminal application, without any notice or warning. Since this transpired, [the AI feature is now a completely separate plugin](https://iterm2.com/ai-plugin.html).

I don't believe that AI should be anywhere near one of the most privileged parts of an operating system. It could be potentially exposed to sensitive secrets, or suggest a destructive action that affects the entire system.

I ended up switching to [WezTerm](https://wezfurlong.org/wezterm/index.html), and have been happy since. This has an added benefit of being fully cross-platform, so my configuration can carry over to any OS.

## Prism to Plexamp

I do wish that [Prism](https://prism-music.app/) had a dedicated macOS app (it works via Catalyst at least). The developer hinted at an upcoming macOS version a while ago, but I haven't seen any updates since then.

Since subscribing to [Plex Pass](https://www.plex.tv/plex-pass/), I gained access to a bunch of features on [Plexamp](https://www.plex.tv/plexamp/) which lead to me giving it a try. It's been a great experience so far. I particularly enjoy the Station features, which has surfaced some long forgotten music that I loved. Plexamp doesn't need to worry about syncing either, it just works.

## Last.fm to ListenBrainz

After being sneakily charged more for Last.fm Pro (and also learning they are owned by Paramount), I'm done with [Last.fm](https://www.last.fm). It was a good 18 years of listening, but I'm moving on. Enter [ListenBrainz](https://listenbrainz.org), from MusicBrainz (which is run by MetaBrainz, a non-profit). ListenBrainz is a lot like Last.fm, but as an open platform (which also means open source). I've been relying on MusicBrainz as my music database (and I've even contributed a little), so this was a no-_brainz_-er.

It is inconvenient to log my non-Plex music scrobbles to ListenBrainz, but thats a sacrifice I'm okay making.

## 1Password to Bitwarden

Earlier in December of 2024, 1Password announced that [they were joining the Rails Foundation](https://blog.1password.com/1password-joins-rails-foundation/). The Rails Foundation is [chaired by David Heinemeier Hansson](https://rubyonrails.org/2022/11/14/the-rails-foundation), also known as DHH in the wider tech community.

> The founding core members are each represented on the foundation’s board, which is then **chaired by the creator of Ruby on Rails, David Heinemeier Hansson**.
> (emphasis mine)

If you've never heard of DHH before (lucky you), he is the creator of [Ruby on Rails](https://rubyonrails.org/), and co-owner of [37signals](https://37signals.com/). [Basecamp](https://basecamp.com/) (run by 37signals) made the news back in 2021 for [announcing they are banning political discussions at work](https://world.hey.com/jason/changes-at-basecamp-7f32afc5). Suffice it to say, this created a huge controversy. [The Verge has a great article about the fallout](https://www.theverge.com/2021/4/27/22406673/basecamp-political-speech-policy-controversy) if you're curious.

For people part of marginalized groups or minorities, "political discussions" are their life. You can't stop talking about politics when there are politicians threatening to revoke your rights. To be clear, I wholly disagree with Basecamp's decision.

Since then, DHH has taken a hard swing to the right and is cozying up with alt-right ideaology. I hope it would be clear by now that _I do not like that_.

There is no way that in 2024 1Password is unaware of what DHH is doing, which to me suggests that 1Password leadership is complicit or accepting of his views.

I've been eying using [Bitwarden](https://bitwarden.com/) for a while now, and this seemed like the perfect impetus to make the switch. I've been using Bitwarden for about 2 months now and have been satisfied with my experience. The app has its rougher edges and loses the odd niceity. On the other hand, I'm paying almost 80% less for the same features, and it's open source. Their web extensions work great (1Password's Safari extension still sucks).

Overall, very pleased with the switch!

## Feedbin to FreshRSS

2025 might be the year of self-hosting (for me anyway). I don't have any issues with [Feedbin](https://feedbin.com/) and think its a great product, but I'm really getting into self-hosting my own solutions and thought I'd give RSS aggregators a shot. I don't use many features with Feedbin, so I figured the transition would be easy.

[FreshRSS](https://www.freshrss.org/) works like a charm, and integrates with [NetNewsWire](https://netnewswire.com/) for easy reading. The change means I save some money on my annual subscriptions.
