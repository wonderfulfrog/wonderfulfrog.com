---
title: Take The Power Back (Over My Music)
date: 2020-07-26
excerpt: One guy's struggle to regain ownership of some MP3 files.
tags: ["music", "beets", "plex"]
youtube: true
favourite: true
---

{% youtube "qKSNABST4b0", "Rage Against The Machine - Take The Power Back (Audio)" %}

When did Rage Against the Machine [get so political](https://www.nme.com/news/music/tom-morello-twitter-respond-to-people-only-just-realising-rage-against-the-machine-are-political-2685353), anyway?

I want to take control of my music library and be responsible for organizing and tagging all of my music files. This probably sounds like making work for the sake of work, but it’s something that I’m passionate about. Like a well-curated and organized collection of records, clothes, make-up, or books, it feels good knowing everything is there for a reason and where it should be.

## tl;dr

If you are currently using Apple Music and want your files back, here's how:

- Use Music.app’s Smart Playlists to filter your library into just the tracks you want (i.e. don’t “own”). Export that playlist for a master list of music to find elsewhere.
- Forget managing your library manually and find a tool that suits your needs. My recommendation is beets. Allow that tool to reorganize your folders and redo all the tags. The more control you give the tool, the easier it is. If it doesn’t work for you, reconfigure it, or find another tool.
- Maintain your new library by using that same tool to add new music in the future.

For the full story, continue reading…

## Why?

The long story short is because I want to, but here's a more nuanced answer.

### I wanted to be in control of my files

My music is important to me. While the music itself is not difficult to recover, I have painstakingly managed and tweaked the organizational structure to my preferences. I don’t want to have to do that again for any reason.

### I wasn’t using the features of Apple Music anymore

I tried using Apple Music as a discovery service, but just stopped using it. I found it wrong more often than right when it came to music it thinks I’d like. There are plenty of ways to “demo” music now, too.

### Apple Music was becoming too expensive for what I used it for

Since I wasn’t using any other features of Apple Music, it was a redundant backup (a-la iTunes Match), and for the cost it isn’t worth it.

### I enjoy curating and managing my music files

Some people out there hate having to manage files, tags, and everything in between, but I get joy out of painstakingly managing my collection. It’s fun to me.

### I wanted to update all my tags, album art, etc

My music collection spans back to the early aughts, and I know back then I was not all that concerned with organizing my collection. This is an opportunity to correct any mistakes.

### I wanted it to be all backed up and under my control

I’m serious when it comes to backing up my data. After too many serious data losses, I’ve taken a more concerned approach to backing up my data. I like to have redundant backups (on-site and off-site), and while Apple Music would suit as an off-site backup, it’s again way too expensive to justify that. If I leave Apple Music, I instantly lose access (and any record) of music I added to my library too.

### What if Apple lost my music?

I can’t prove it, but I’m certain that over the years during the transition from iTunes Match to Apple Music, somewhere down the line Apple lost some of my music. When I set out on this journey, I found random missing tracks in my library. They were not hard to replace, but to have them just disappear into the ether really sucks. [And I’m not the only one](https://tyler.io/itunes-match-failed-me/).

### What if Apple Music were to disappear tomorrow?

Apple being a trillion-dollar company makes this seem extremely unlikely, but it’s extra justification. I’m not dependent on any service or company to manage my music. I get to do it myself.

### I listen to music in a particular way

I’m pretty old-school (or at least, I think this is old-school) in that I listen to whole albums front-to-back. I’m not really a playlist guy, which seems like the trend these days. I pick my album and then leave it alone. I rarely use shuffle and skip. I want my experience to be tailored to this style of music listening.

## What I did

I separated my library into two major categories: **my music**, and **Apple Music music**.

**My music**: Music I acquired through CD rips, torrents, iTunes Store purchases, or something else. I acquired the files for this music. It’s either stored in my local backup or uploaded through iTunes Match years ago. I have or can get the files for this music.

**Apple Music music**: Music I added to my library through Apple Music. This means I have no files associated with the music and it exists purely in the cloud. When these files are downloaded they are in a DRM-protected format.

Unsure of how to find my Apple Music music, I started by googling when the service started, which was [June 30th, 2015](https://en.wikipedia.org/wiki/Apple_Music). Then I sorted my entire library by date and looked at everything before and after that date.

<aside>
My first piece of Apple Music music was Foal’s “What Went Down”. I added that on July 2nd, 2015. I guess I took a few days to figure out what to add to my library?
</aside>

Before we get much further, I should mention that I have over 130GB of music (somewhere around 19,000 songs). Sorting by the Date Added field showed me that I had about 6,098 songs to comb over. I knew that mixed into those 6,000+ songs were music I had the files to. I needed a way to filter those tracks out. Now what?

Well, turns out iTunes — sorry — Music(.app) — has a handy feature called Smart Playlists. Thanks to a tip from [Tyler Hall](https://tyler.io), you can use Smart Playlists to find any music in your library that is not:

- Purchased (came from iTunes Store)
- Matched (uploaded and updated using iTunes Match)
- Uploaded (uploaded tracks saved using iTunes Match)

{% image "https://cdn.wonderfulfrog.com/amm.png" , "Smart Playlist filters", "The various settings to get my 'Apple Music music'" %}

I also added a filter to show music only from May 18th 2018. This date is important because it was the day I re-subscribed to Apple Music after not using it past the free trial. That cut down my list to 2,221 songs. Thus, I had my Apple Music music.

{% image "https://cdn.wonderfulfrog.com/stats.png" , "2,221 total songs", "2,221 total songs - wow!" %}

I also made another Smart Playlist to find all of my Purchased music (1,107 songs), and downloaded those. A grand total of about 3,300 songs from Apple.

Any music that was marked as Matched or Uploaded I had files to, so that cut down my work significantly.

At this point I started toying around with automation ideas — maybe I could use something like [youtube-dl](https://ytdl-org.github.io/youtube-dl/index.html) to automatically find the list of songs I’m missing and add them to my library. I decided the time I’d have to invest though would be on par with how long it would take me to manually generate a nice `.csv` or list of albums to find, so opted not to go that route. Instead, I used the Export Playlist feature (File > Library > Export Playlist…) to dump the playlist and then convert it to a `.csv` file using tabs as the separator.

From there I grouped everything up by album using a pivot table in Excel, which gave me my master list of Apple Music music. This would be music I’d have to find elsewhere and get my own version of. I hope to use [Bandcamp](https://bandcamp.com) as much as possible. I’m planning on writing a post someday about purchasing music fairly — as in giving the most of your hard-earned dollars to the musicians that make the music. Bandcamp is one of the best in that camp, and deserve your money. Getting back on track…

Downloading all of my Purchased tracks turned out to be more difficult than I thought. Music(.app) for whatever reason likes to fail when it comes to downloading files, and usually silently. There were a few errors reported, but many more files failed to download. It took some trial and error (probably an hour or so), but after some manual fiddling I got what I needed.

One caveat is that any tracks that were Matched (using iTunes Match) were likely swapped from MP3 to AAC (`.m4a`). I personally don’t care enough about fidelity to force one over the other, but this will turn out to be an issue later. If that is a concern, make sure to note any `.m4a` files.

## Music Tagging, or How I Learned to Stop Worrying and Love The MusicBrainz

This step I knew I wanted to use as many automated tools as possible. There are likely a ton of databases out there for music, but I ended up liking [MusicBrainz](https://musicbrainz.org) the most. Especially because they have an app — [Picard](https://picard.musicbrainz.org) — that makes re-tagging very seamless. This is especially useful for YouTube rips as they don’t have any IDv3 tags, but Picard can scan by audio signature and match that way instead! Really cool. It wasn’t always right, but it was generally very close most of the time.

{% image "https://cdn.wonderfulfrog.com/60percent.gif" , "60% of the time, it works every time", "" %}

This worked pretty well at the start, but it was a fairly manual process. I’d have to:

- Drag-n-drop everything into Picard
- Click Scan
- Wait for results, then manually verify them
- Correct any issues
- Click Save
- Drag-n-drop the correctly tagged files into my library, making sure it was organized properly

I also didn’t love the way Picard would tag some fields, like genre. Admittedly the genre tag is so subjective there is no standard way to accomplish it, but I had my preferences. By default it would ignore certain genre tags like “shoegaze” because it wasn’t on their whitelist, and replace it with “rock” or “alternative”. I wanted something more granular.

What I really needed was an opinionated tool that followed the same structure I wanted, or at least let me tell it what I wanted. I found it, and it’s called [beets](https://beets.io). Getting a Python app set up on macOS Catalina turned out to be a bit of a process (and not something I’ll document here) but I got it running eventually.

I won’t bore you with all the features of beets, but I used it because it did everything above but automatically (where possible). Beets still requires some manual intervention when it’s not sure how to proceed. For example:

- The existing tags are so wonky it has no idea what the music is
- The existing tags match multiple albums
- There are missing tracks

Beets will prompt you with the issue and you can decide how to proceed. It has smart defaults and worked quite well. I don’t think it was designed to import an entire library at once, and did crash on me a couple of times. No big deal though, because beets supports [resuming an interrupted import](https://beets.readthedocs.io/en/stable/reference/config.html#resume).

It also had a more sensible genre tagging system, and a [plethora of plugins](https://beets.readthedocs.io/en/stable/plugins/index.html#using-plugins). I ended up using:

- LastGenre — gets the genre tag from [last.fm](https://last.fm) (and has a larger whitelist than Picard’s)
- FetchArt — downloads a copy of the album art based on the matched album release
- EmbedArt — similar to FetchArt but embeds the art as part of the IDv3 tags

In hindsight I would’ve mapped my new library to a non-NAS drive first (then copied it all over wholesale later), as transfer speeds were sometimes slow when mass importing such a large volume of files.

What I quickly discovered though was that _a lot_ of my music was missing tracks from albums. I ended up having to keep a separate spreadsheet of what I called my “Music Errata”. Turns out in some cases I was genuinely missing files, but the culprit most of the time seemed to be because of a mixture of filetypes. Remember when I mentioned noting any `.m4a` files? Here's where it becomes important.

Beets seems to handle albums of either `.mp3` or `.m4a` files just fine, but when they were mixed together, it would pick `.mp3`s and ignore `.m4a`s (or vice-versa). I found a bash script online that uses `ffmpeg` to convert any `.m4a` files in a folder to `.mp3`, and off I went.

```bash
for foo in *.m4a; do ffmpeg -i "$foo" -acodec libmp3lame -aq 0 "${foo%.m4a}.mp3"; done
```

This script will convert any `.m4a` files in the current directory to `.mp3` using VBR in the highest quality.

Other missing tracks were due to failed Music(.app) downloads, or in rare cases I was genuinely missing some songs. Off I went to acquire the odd missing track.

With how long it took to import my whole library, plus my running list of errata (which was about 50-70 different albums), the process took me well over a week to finish. After the initial import went through, I ran through my errata list and corrected any errors — this step took about 2-3 days since it involved a lot of manual work and very little automation.

## Final Result

After probably two weeks of work — I have it. An organized, properly tagged music library. Not a big deal to everyone, but to me it means everything.

What am I doing with it now? My NAS supports running Plex, so I can serve my entire library though my NAS which pipes into Plex. I can access it outside of the network. I can search by whatever tag I can imagine, and everything Just Makes Sense™ now.

I still have my huge list of music to re-acquire, and have since been slowly chipping away at it. Adding new music is super easy with beets: `beet import <directory of music>`. Beets does the rest.

A nice side-effect of poring over my music library has been re-discovering music I had long forgotten about. It’s been a lot of fun to revisit artists that haven’t had a listen in over 10 years.

A lot of time invested, but so worth it to me. I hope this can serve as a rough guide for someone in a similar situation as myself in the future. For anyone stuck and wanting their music collection reclaimed, please get in touch. I want to help! Good luck.
