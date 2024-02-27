---
title: "GMTK Game Jam Post-Mortem"
excerpt: My first game jam ever.
tags: ["gamejam", "gamedev"]
favourite: true
---

This year I participated in the [GMTK Game Jam](https://gmtk.itch.io) with two friends. It lasted 48 hours from June 11th to 13th. My main responsibility was the art department.

The theme was “joined together”, which meant you could take things literally and join stuff together, or maybe take things in a more narrative sense, like the way hands join together to form a handshake.

That's how we decided to take things anyway. We came up with [“Put ‘er There: Tactical Hands-On Action”](https://wcyu.itch.io/put-er-there)

> In the cut-throat world of business, deals are won with strong interpersonal skills. Expressed primarily through the joining together of hands. Will you build the strength to rule industries? Or flop like a fish into the role of fry cook.

## Results

There were 5,800 entries for this game jam. For my first, I'm pleased with our ranking. Here's how we stacked up:

**Originality**:  #587 (3.742 avg)

**Presentation**: 	#1125 (3.452 avg)

**Fun**: 	#3181 (2.355 avg)

**Overall**: #1501	(3.183 avg)

From 31 total ratings. [Full results available here](https://itch.io/jam/gmtk-2021/results).

We got killed on the Fun category, which makes sense. We decided to build a narrative-based game which doesn't have much interaction or gameplay. Our control scheme was not chosen well (we didn't playtest a lot), which hurt our score I imagine. If you can't play the game, then it's not fun is it?

I was happy to scoring well in the Presentation and Originality categories. Pixel-art handshake-based games are an under-tapped market!

## Planning & Creation

The game idea we eventually landed on was originally a joke we proposed to each other. We started to lean into it, and then sure enough, we believed we had a game here that fit the theme and would be funny too.

My job was art and in the first few hours I got to my drawing board. Okay, so it isn't a board but a sketchbook.

{% image "https://cdn.wonderfulfrog.com/FirstGameplayConcept.jpg", "In this concept art a untrustworthy manager is asking the player about 'those quarterly numbers', meanwhile the player has a thought bubble that says 'I'm losing him... tighten up!' referring to their handshake grip.", "Sketch of a gameplay concept" %}

I originally drew this image after started taking our joke concept seriously. I added some nonsensical business speak and we all seemed to enjoy the humour.

{% image "https://cdn.wonderfulfrog.com/MinigameConcept.jpg", "Another concept art featuring the untrustworthy manager. This time, they have a noodle-like neck with the manager's head appearing dislodged from their body, to the left. The manager asks 'are you even paying attention?' while the player has a thought bubble that says 'maintain eye contact!'", "Sketch of a character with a very stretchy neck" %}

At one point we had toyed with requiring constant eye-contact by using the mouse (something I think that would be fun), and then having ridiculously cartoon-y stretchy necks as they rapidly moved around the screen.

{% image "https://cdn.wonderfulfrog.com/UIConcept.jpg", "A sketch of the game UI. There are 'grip gauges' on the left side of the screen, representing the player's grip strength. In the center of a gauge is a target, where the player was intended to guide their gauge to. On the bottom is a text box, with generic business-like responses which the player could choose.", "Sketch of UI prototype" %}

We wanted to implement dialogue responses into the game as a way to engage with the characters — another added element to the game beyond holding a few buttons. We wanted to bind them to the keys you'd use to maintain your handshake grip, so answering them would require letting up your grip for a moment.

After I got busy with gameplay concepts and had decided on how we wanted to play the game, I got busy with coming up with our cast of characters.

{% image "https://cdn.wonderfulfrog.com/CharacterDesigns.jpg", "A sketch of various characters. They have exaggerated features like elongated faces or big mouths. One character is intricately detailed and has a sense of false confidence. He is saying 'bro, closers close, bro.'", "A rogue's gallery of various characters" %}

We came up with the stereotypical origin story of the struggling child who has never met their birth father. A natural progression for the main character we thought was the humble origins of a lowly fry cook turned Regional Franchise Manager. With all that in mind, we came up with some “business people” to interact with. In our original plans we had even greater heights for our character to reach: shaking hands with the President, the Pope, negotiating peace treaties with alien races… there was no bar too high.

The dude in the middle ended up closely resembling our McBurger CEO (“Chief McBurger”), but the rest didn't really end up in the game. I really like the sleazy guy in the top-left. I tried to capture his essence later for “Francis McBurger”, who is supposed to be your grease ball middle manager.

Afterward we decided we needed the Mom and Dad characters to play a part. The Mom I went super stereotypical, but didn't end up using it at all in the end (you'll see how it diverges later).

{% image "https://cdn.wonderfulfrog.com/MomDesign.jpg", "A sketch of 'Mom', with a soft, round face. Her hair is poofy and circular. She is wearing a pearl necklace with over-sized pearls.", "It's Mom." %}

The Dad I went vaguely European and kinda hipster vibes. Very strong jaw to highlight his traditional masculinity. A chunky moustache that resembles Ron Swanson's push broom. I knew right away that he should be annoyingly buff and he wants to show it off with tight-fitting shirts.

{% image "https://cdn.wonderfulfrog.com/DadsonDesign.jpg", "A sketch of 'Dad', with featuring hard lines and dark colors. Dad has sharp eyes and a large nose. His eyebrows are large rectangular shapes. His mustache looks like a large push-broom.", "It's Dad." %}

I wanted to have a plaid shirt for Dad, but couldn't figure out how to make it work in pixel art. This is the only artifact I have left: it's a blown-up sprite that came from a screenshot of my screen-share over Discord.

{% image "https://cdn.wonderfulfrog.com/DadsonPlaid.png", "An early in-game screenshot of 'Dad'. He looks like the sketch version with red skin. He is wearing a plaid shirt, and his chest muscles are very defined.", "It's Dad -- in plaid." %}

I doodled for most of the first night then went to bed. First thing the following morning was purchasing a copy of [Aseprite](https://www.aseprite.org) and getting into it. I had my work cut out for me: I needed to do a bunch of characters and backgrounds, and fast.

I stuck with the default palette in Aseprite. I thought giving myself constraints would let my creative side flourish, and it did. We originally planned to have an all human cast, but the palette I had was limited in various skin tones. It did have plenty of bright blues, greens, and reds though.

It had been a long time since I've made tiny squares into pictures, but I found my footing after a few hours. The first character I made had green skin and kinda looked like [Piccolo from DBZ](https://dragonball.fandom.com/wiki/Piccolo). Naturally I added antennae and the likeness was _impeccable_.

{% image "https://cdn.wonderfulfrog.com/sheet1.png", "A sprite sheet of various characters early in the design phase. Much like the sketch versions, so far characters feature weird face shapes and alien skin colours. Of note is a character with blue skin and a chubby face, with large jowls.", "It's a bad pixel art drawing of a guy that might or might not be Piccolo." %}

Then I started to play with this concept. What if all the characters are weird aliens? The blue character turned into the CEO (“Chief”), and as a joke I transformed him into [Dodoria](https://dragonball.fandom.com/wiki/Dodoria) (inevitably DBZ makes it into anything I'm involved with). Dadson is slowly taking shape (although looks kinda like a fish). The character on the left was supposed to be our middle manager, but I ended up scrapping this for something else later.

A few more hours later I had a new version of Mom created. I thought the original design was kinda boring, and thought it would be funny if Mom was a punk-y rebel (a mix of the side-cut and spike hair). She never ended up “feeling” like a Mom, but it was a fun character to create.

{% image "https://cdn.wonderfulfrog.com/sheet4.png", "Another early sprite sheet featuring the previously sketched cast of characters. On the sheet each character has a different facial expression. The blue character has a scared, bored, smiling, and determined expression. 'Mom' has been added as well. She has blue hair, with one half being spiked and the other in a side-part fashion. She has the same array of expressions (scared, bored, smiling), except instead of determined she has a beaming/happy expression, no doubt showing her love of their child (the player)", "Mom is back -- in punk form." %}

Then the middle manager (“Francis”) took shape with a new form. I thought a long-faced ([Squidward](https://en.wikipedia.org/wiki/Squidward_Tentacles)-esque) would be funny, and leaned into it. I wanted to have the slick-back hair from the start because it captures the feeling of a typical grease ball.

{% image "https://cdn.wonderfulfrog.com/sheet5.png", "The sprite sheet has a new character - Francis - added with green skin and gelled, slick back brown hair. They have a long face and a long nose that goes straight down. They are wearing a basic white dress shirt. There are different expressions like before - scared, bored, neutral, and determined.", "You just know Francis would never give you weekends off." %}

At this point we had our cast of characters and various facial expressions! Here's a mini time-lapse of the entire spritesheet taking form:

{% image "https://cdn.wonderfulfrog.com/SpritesheetEvolution.gif", "An animation showing the evolution of the in-game character design. As the animation progresses, more characters are added, and various UI elements like gauges and buttons are added. A rough version of the logo is revealed, which is a cropped version of a handshake, showing just the hands.", "A time-lapse of the game's spritesheet." %}

I didn't end up having time for backgrounds and relied on my teammates for that. Photoshop wizardry got us there in the end!

By the time I finished the artwork, it was about 3 or 4am on the 12th, so I opted to sleep for 6-ish hours and come back for the last haul on the 13th. By this point we had the game in a playable state and started testing.

Once we eliminated the majority of the bugs it was submission time. That ended up being a whole ordeal in itself but we got there with 18 minutes to spare. If it wasn't for the 20 minute extension due to itch.io having issues, I'm not sure we would've made it!

## My experience

We struggled to find a concept that we felt was compelling and fun. I think we came up with a lot of good ideas, but we were hyper-focused on finding something that felt compelling and innovative. In hindsight, I think we would've been better off finding something simpler but fun. A concept that can be implemented quickly and then iterated on was a recurring theme I saw in the successful (i.e. top 20) games. We spent far too long on the ideation portion of the project (I estimate somewhere around 7 hours) before we landed on an idea we all liked — the idea which originally started as a joke.

Starting on the wrong foot like that meant we kept to late nights. A sleep-deprived mind is never as sharp as a well-rested one, but here we were. If I could do it again, I'd advocate for a normal sleep schedule, and less staying up until 5am.

Our working prototype I don't think arrived until sometime in Saturday. We were all newbies when it came to game development and didn't know what we should be doing. Next time I would aim to have a working game within the first 24 hours. Programmer art at most, but working game mechanics first.

Since we moved along slowly we didn't have a chance to playtest our game until the 11th hour. We decided on a control scheme that had players holding 5 keyboard buttons down at once. Our aim was to try and recreate the tactile sensation of handshaking using fingers on the keyboard. A novel idea, but we failed to realize that 5 keys simultaneously is not a common feature in average consumer keyboards. What ended up happening was that a significant portion of our players could not play the game. They would get stuck in tutorial hell. The lesson here is upload a working build as soon as you can and get others to try it out as soon as possible.

If I could do the art again I'd limit myself even further by doing like a 4-bit colour palette. There's a lot of potential in that space and works well for a simple but unified art style in a game jam. One of my favourite games that Mark Brown highlighted was [Phasing Puller](https://mvln.itch.io/phasing-puller), which had a limited colour scheme. The challenge of a limited colour palette is appealing to me and something I want to explore in future game jams.

## Post-jam

We liked our game enough to continue working on it. We want to deliver what we think the game should've been when it was time to submit it.

I took the time to redraw our characters using what I learned during the jam. This time all limits were off and I decided to go my own way with the colour palette. I learned about something called [“hue shifting”](https://www.youtube.com/watch?v=PNtMAxYaGyg) to make better colours, and off I went.

### Dadson

My first stop was Dadson. I thought I could come up with better colours that went with the heavy red vibe but with a touch of purple.

{% image "https://cdn.wonderfulfrog.com/Dadson1.png", "A single sprite of 'Dad' (Dadson). His design is the same as before, but the color selection has been made deliberate. His red skin looks warmer and the shadows/darker colors are less purple.", "It's Dad -- in (better) colour." %}

From there I started to embellish the details like his annoying muscles and stern eyes. I spent a fair amount of time doing anatomy studies to capture those rippling biceps. In between revising Dadson and other characters, I came back and re-applied what I had learned (again). You'll notice the jump is pretty substantial — look at the shading on his face. I wanted to highlight his jaw and defined facial features.

{% image "https://cdn.wonderfulfrog.com/DadsonFullEvolution.gif", "A time-lapse animation of the various tweaks applied to Dadson's design. His eyes are slightly softened, and the contours of his muscles become more defined in his shirt. The eyebrows and mustache are rounded to look a bit more cartoon-like. A small tuft of chest hair is visible underneath his tight-fitting shirt.", "It's Dad -- in time-lapse." %}

I felt like my shading improve substantially as I went on. I feel way more confident when it comes to getting a good shade gradient going.

I also played with talking and blinking sprites in between revisions.

{% image "https://cdn.wonderfulfrog.com/Dadson-talk-blink.gif", "An animated version of Dadson's sprite. He can be seen opening and closing his mouth representing speech, and he occasionally blinks.", "It's Dad -- talking and blinking." %}

{% image "https://cdn.wonderfulfrog.com/DadsonTalkRage4.gif", "Another animated version of Dadson's sprite. Again he is talking, but his facial expression is different. He is clearly angry. His eyes are narrowed and his mouth is open wide - apparently as he is yelling.", "It's Dad -- talking and blinking. He's also quite pissed." %}

### Francis

At some point when I was revising Dadson I decided to take a stab at Francis. I wasn't happy with the shading or green colours. I started with a new colour palette for him. I came up with this:

{% image "https://cdn.wonderfulfrog.com/FrancisNew.png", "A revised version of Francis' head sprite. The colours have been updated - the brown hair looks warmer and shinier (to highlight a combination of hair gel and grease), and his green skin has a tinge of yellow now. His irises are purple.", "Still not giving weekends off." %}

The shading isn't quite right. I needed to highlight his gaunt features. I thought it would be funny if he had more sassy body language, so I went with an arms folded pose. This was hard to get right and I spent a fair bit of time searching for various references.

{% image "https://cdn.wonderfulfrog.com/FrancisBodySassy.png", "A sprite of just Francis' body. His arms are crossed and he is slightly leaning to his left. It gives off an air of disinterest.", "Sassafrass bod." %}

Once I plugged them together I got into it and finally landed on the right shading.

{% image "https://cdn.wonderfulfrog.com/FrancisNew3.png", "A fully assembled version of Francis' new sprite featuring his new head and body together. The shading on his face has been changed to highlight his gaunt cheeks.", "You want time off? You're lucky to even have this job." %}

I had a lot of fun with his facial expressions. I even did talking/blinking animations which I think came out excellent.

{% image "https://cdn.wonderfulfrog.com/FrancisFaces.png", "Francis with a few facial expressions - snide/confident, bored and looking to his right, and sheer terror. The terror face has exaggerated eyes with shrunken pupils.", "The many faces of Francis." %}

{% image "https://cdn.wonderfulfrog.com/FrancisTalk.gif", "An animation of Francis talking. His mouth is fairly closed and small, which lends to a sycophant or lackey vibe.", "The way he talks is even sniveling." %}

### Chief

I had an idea of where I wanted to go here. I was looking for a [pre-world domination Jeff Bezos](https://media.npr.org/assets/img/2020/07/27/bezos2_wide-d887a33c25f471b95d41e058ef764ac95d72a56b-s1600-c85.webp), something that suggests a kinda disarming, but looks pretty affable kinda guy.

{% image "https://cdn.wonderfulfrog.com/ChiefNewFace.png", "A revised face for 'Chief', the boss. The blue shade is deeper and more saturated compared to the old sprite. He has horns on both sides of his face, which curl backwards at an angle. He lacks eyebrows but his eyebrow muscles are large and round. His face is pudgy with large jowls.", "A new face won't fool me. This guy wants to take over the world." %}

The shading on the sides of his chin look kinda like tiger stripes, which might've been fun to explore. I later claned up the shading which removed the tiger stripe look. Then I came up with fun facial expressions. I thought it would be interesting to not have Chief react in fear with an extreme grip, but more of a curious interest, something that suggests a  “I may have underestimated this guy…” feeling.

{% image "https://cdn.wonderfulfrog.com/ChiefNewFaces2.png", "Different facial expressions for Chief. A neutral/small smile, an evil/confident smile, a bored/disappointed look, and a look of genuine surprise. The latter would be used when the player overwhelmed Chief's grip, as if they never expected the player to be so strong-willed and determined.", "The many moods of Chief. This is morning mist." %}

Can't forget his new body (which I think sells the whole package).

{% image "https://cdn.wonderfulfrog.com/ChiefNewFull.png", "A full body sprite for the Chief wearing a dark grey business suit with a red tie. The grey has a coolness to it, which matches the cool of his blue colour. The suit is obviously ill-fitted with stretching and creases - to suggest someone who has grown fat from his increasing power. His build is fat and stocky.", "That ain't no Dad bod." %}

### Mom

This was the character I was dreading the most. It was hard to come up with the character in the first place, but where do I take things from here?

Better yet, how the hell do I make pixel art hair?

I took on the challenge, and started with the face.

{% image "https://cdn.wonderfulfrog.com/MomFaceEvolution.gif", "An animation showing the different revisions of the new 'Mom' sprite. Her eyes go from green to red and back to green. Her hair colour becomes a saturated blue (fun fact: the same blue as Chief). The detail in her hair increases to where individual strands and groups of hair are visible. Her skin colour becomes redder and warmer, and less pale. Her lipstick transforms from a nude brown to a reddish-pink.", "From punk to party girl. Wait. That's not Mom!" %}

I wanted — for lack of a better word — a more “motherly” face, which eventually meant age her up. It was important to me to keep her fun spirit, but stay within “Mom territory”. I struggled to get the skin colour palette right for a long time. At one point I gave up and made her skin yellow, which was super fun (even though it looked like she had permanent jaundice). That did allow me to see where I was going wrong with my colours though, and I eventually landed on the right look.

I scrapped the spiked hair because I couldn't get it to look right, and I thought it was out of place. In the future though I'd like to have a Mom with spiked hair. Very rad.

Mom's body sprite challenged me. I had to learn how to shade better to capture the look I wanted (I'll say it — I had no idea how to draw breasts). I initially started with a shoulder-less dress for flair and fun, but I think it looked a little _too fun_, so I brought it back with a nice coral cardigan.

{% image "https://cdn.wonderfulfrog.com/MomFullEvolution.gif", "An animation showing the evolution of Mom's body sprite and clothing. It starts with a red, shoulder-less dress and becomes a grey shirt and an orange cardigan. The cardigan itself goes through several revisions with small details like the trim shading changing. Shading details on her neck and upper chest are changed slightly. The final cardigan is a bright orange with a checkered/woven hem.", "Now, that's the Mom I know." %}

I'm proud of how this one came out. It challenged me in many different aspects but came out almost exactly how I wanted it to. I feel like I improved my skills a lot with this one.

Finally, here are some before and after versions of the character sprites.

{% image "https://cdn.wonderfulfrog.com/DadsonBeforeAfter.gif", "An animation showing the changes between the old and final designs of Dadson.", "Dadson, before and after." %}
{% image "https://cdn.wonderfulfrog.com/ChiefBeforeAfter.gif", "An animation showing the changes between the old and final designs of Chief.", "Chief, before and after." %}
{% image "https://cdn.wonderfulfrog.com/FrancisBeforeAfter.gif", "An animation showing the changes between the old and final designs of Francis.", "Francis, before and after." %}
{% image "https://cdn.wonderfulfrog.com/MomBeforeAfter.gif", "An animation showing the changes between the old and final designs of Mom.", "Mom, before and after." %}

### The rest

I don't have much else to share (yet) with other visuals. I'm currently working on drawing new backgrounds for each of our characters. I want to make sure that all our UI elements match the pixel art aesthetic.

I'm excited to continue.

## Afterword

I hope that my friends will want to do this again next year. It was a ton of fun to put down the keyboard and take up the mouse (and tablet) to draw and engage my creative muscles.

I want to participate in more of these game jams, especially in an artistic fashion.

With all the work I've been putting into redrawing all our character art and assets, I feel like I've learned more about drawing (anatomy, shading, proportions) in these last few weeks than I have my entire life.

If I took one thing away from this experience, it's that I have the urge to draw, and I need to let it out.
