---
title: Switching from Gmail to ProtonMail
date: 2018-11-24
excerpt: The beginning of a quest to take back my data.
tags: [email, protonmail]
---

I've been an avid Gmail user since its inception sometime in 2004. I remember hunting for a beta invite back when they were highly coveted. I have received 25,467 emails and sent 1,738. The first email I sent was to a local shop to buy my old G3 iMac.

{% image "https://cdn.wonderfulfrog.com/Pasted%20image%2020231125192342.png", "A screenshot of the 'Welcome to Gmail' email everyone received when they first opened their account", "Gmail was different, alright." %}

In the years since I got my Gmail account I've realized that I've become the product for Google. My information - who I am, my interests, everything - is their endgame. Plain and simple I don't like that they have this information. I doubt there is any way for me to reliably erase myself from their databases, so I've opted to do the next best thing - try to reduce the amount of new information acquired.

It should go without saying that this approach requires a certain amount of trust in whatever business I decide to go with for managing my email. There's nothing preventing Company X from taking my information (even as a paying customer) and selling it to third parties.

My first thought was since I am a heavy iOS/macOS user I should use Apple's iCloud email. There was one crucial reason I ended up not going down that route though which was their silent [filtering](https://www.reddit.com/r/apple/comments/6p0z1a/is_apples_icloud_silent_filtering_still_an_issue/) of [certain](https://www.macworld.com/article/2029570/silent-email-filtering-makes-icloud-an-unreliable-option.html) [emails](https://discussions.apple.com/thread/7506554). It was reported first back in 2013, but apparently has been going on since the days of @mac email addresses. The only way to retrieve these filtered email addresses is contacting Apple Support - and that means you knew the email was coming. If you had no idea an email was silently filtered - it's gone forever. Based on my research it was still an issue in 2017 with no signs of going away.

At this point I was pretty sure to get what I needed I was going to need to pay for my mail. After doing some research I felt there was one company out there trustworthy enough to manage my email: ProtonMail.

## Why ProtonMail

ProtonMail is a company based on Switzerland with a focus on Internet privacy and security. I think their about page captures the "why" pretty accurately for me:

> We're building an internet that protects privacy, starting with email.
>
> We are scientists, engineers, and developers drawn together by a shared vision of protecting civil liberties online. This is why we created ProtonMail, an easy to use secure email service with built-in end-to-end encryption and state of the art security features. Our goal is to build an internet that respects privacy and is secure against cyberattacks.
>
> We are committed to developing and widely distributing the tools necessary to protect your data online. Our team combines deep mathematical and technical knowledge from the world's top research institutions with expertise in building easy to use user interfaces. Together, we are building the encrypted communication technologies of the future.

As I've gotten older I started to value privacy and security over convenience and ease-of-use. It usually means introducing a bit of friction into my life, but it's a sacrifice I'm willing to make. The notion of being concerned with privacy often implies that I have something to hide, or some secret I don't want to get out. On the contrary, I'm just about as ordinary as anyone else. It's my belief that my information is mine and no-one else's - simple as that. An example I like to cite is banking information. Would you want Google (or any other company) to know your banking information? How much money you have saved away, your account numbers - things like that? What about your medical history? I'd argue for most the answer is no - you'd prefer to keep those private.

## Making the switch

After registering for a new address with ProtonMail I was left with some options. ProtonMail provides a [transition guide](https://protonmail.com/support/knowledge-base/transitioning-from-gmail-to-protonmail/) for moving from Gmail to ProtonMail. I could set up Gmail to forward all mail to my new ProtonMail address but that would defeat the purpose of reducing new information acquisition. I opted to instead slowly change the email addresses over on my accounts as emails came in. This is a slow process, but I felt like this was the simplest way to make the switch. It was easy enough for the accounts I was aware of, but those infrequent emails or subscriptions are a gradual process. Having a password manager for all my accounts helps.

## It's not all sunny

My biggest gripe has to be the iOS app. Coming from the stock Mail app, it's a lot more barebones. Push notifications work well at least. Some gripes:

- I can't mark unread from the list view (_UPDATE 12/07/18_: [This is now possible!](https://wonderfulfrog.com/posts/switching-to-protonmail#updates))
- It doesn't feel nice to use - very stiff. Like a web app
- Loading indicators shift the list items around, making it a gamble to tap items

Coming from using the Mail app for years - it's a marked downgrade. I understand why there has to be a separate app, but I wish there was more time spent on it.

Since registering my new address there has been one brief period of downtime I have noticed - about 5-10 minutes. The web app didn't work at all. The iOS client seemed to work fine though. I'm hoping that emails were being sent through.

Email threading is not perfect. Gmail has this figured out completely, but ProtonMail needs some work. Old emails with a similar subject are treated as the same thread despite being completely different. For example, purchases from Bandcamp are grouped in the same thread, even though they were for different albums and made at completely different times. I ended up disabling the "Enable Conversation Grouping" option, which disabled threading. I'm hoping this will be improved in the future, but it's not a big deal-breaker.

Gmail is pretty ubiquitous and easy to spell (and everybody already does) when you need to give out your email address verbally - comparatively "protonmail" usually means I have to spell it out - on top of my username. Thankfully ProtonMail recently added "@pm.me" addresses which will make this process a little easier. I also configured a custom domain after upgrading to their Plus plan.

Although it's not an issue for me since I use iOS's calendar - ProtonMail has no built-in calendar. I felt it was important to note it here for anyone considering switching and currently relies on Google Calendar or their email provider's calendar.

## Months Later

I made the switch to ProtonMail about three months ago. Besides the switching process (which would happen no matter what I ended up switching to) and my minor gripes it has been a pleasant experience. I've recently upgraded to their Plus plan to allow for more storage and custom domains. I feel like they've earned my business. I don't think I'd recommend everyone switch immediately, but if you have similar concerns with privacy and security I'd invite you to consider ProtonMail (or at least an alternative to a free email service).

## Additional Reading

### [ProtonMail - About](https://protonmail.com/about)

Provides information on the company's goal and what they're all about.

### [ProtonMail - Security Details](https://protonmail.com/security-details)

Detailed information on the various security measures ProtonMail imeplemnts in their mail service.

### [Why I Am Switching To Secure ProtonMail From Insecure Google Gmail](https://www.forbes.com/sites/tjmccue/2018/10/31/why-i-am-switching-to-secure-protonmail-from-insecure-google-gmail/)

Someone going through a similar experience as me. Of interesting note I found that there seems to be a growing distrust with "Big Brand Tech".

### [Google tries to calm controversy over app developers having access to your Gmail](https://www.theverge.com/2018/7/3/17533108/google-gmail-privacy-read-email-messages-response)

All about a recent controversy surrounding 3rd-party developers having access to email content in Gmail.

## Updates

### December 7th, 2018

It's now possible to mark emails as unread from the list view. In ProtonMail's settings, there is a new Message Swipe Action to mark as Unread.
