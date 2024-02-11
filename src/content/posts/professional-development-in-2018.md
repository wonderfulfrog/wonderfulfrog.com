---
title: Professional development in 2018
date: 2019-01-07
excerpt: A look back at what happened in 2018 - professionally.  For me.
categories: ["personal", "career", "growth", "react"]
---

In 2018 I received the opportunity to develop my professional skills and further my career development. I’d like to highlight some developments and things I wish to focus on and improve in the next year.

## Web development

### React

This year I was a developer on a project that utilized the latest version (16) of [React](https://reactjs.org/). I had previously used version 14 in another project that acted as a digital asset management portal. This project was also a DAM that used [Cantemo](https://www.cantemo.com/) as the backend.

During this project I learned about the proper architecture for [class/presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). In the beginning I would often mix the two, which lead to class -> presentational -> class -> … hierarchies. This lead to a lot of confusion with the other developers in the team. Eventually we were able to start cleaning this up and simplifying our component architecture.

### RxJS

RxJS is incredibly useful for managing asynchronous events. Until learning about the framework I had been relying on unwieldy promise-chains to ensure my async events were handled properly. Now with something as simple as an `Observable` we can inform the UI when an event has finished. It sounds so simple it makes me wonder why it took me so long to find out about it. RxJS has also been combined with Redux to form one of my favourite libraries [redux-observable](https://redux-observable.js.org/). This makes connecting Redux actions to reducers a snap.

### Angular 5

In the first half of the year I became the lead developer for a small digital asset management project using Angular as the front-end and a [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) API layer. I was responsible for the front-end team. I had support from some of the other intermediate and junior developers as they had more experience with the framework. The last time I used Angular was back in the AngularJS (or 1.0) days. The framework has come a long way since then. Our basic architecture involved using Services for all data communication between the front-end and back-end, and Components for managing presentational layers.

### Functional programming - pipe, compose, etc

After being introduced to the [Ramda](https://ramdajs.com/) framework I quickly became more familiar with the functional programming language side of things. After some initial friction to understand how `compose()` worked (and later `pipe()`) I really started to like functional programming.

This was also a good opportunity to pick up [Reselect](https://github.com/reduxjs/reselect) which offers a clean and reusable way to access state slices from Redux.

### Redux

Redux proved to be a great help for management of the application state in all projects I worked on in 2018. The action/reducer logic took some time to grasp for the junior developers, but I felt confident in my understanding and was able to get them up to speed quickly. There were some hurdles in reducer composition as I quickly learned reducers can grow in scope and size very quickly. I found the `combineReducers` function very handy for breaking up reducers into smaller chunks.

### Styled Components

When I first saw this library my immediate reaction was revulsion. “Inline style - in my project? No way!” This attitude harkened back to older times when it was considered poor form to use inline style in web development. The important difference here is that yes - there is inline style - but that inline style is coming from something closer to a stylesheet. Once I made that critical realization I was right on board with Styled Components.

Another critical realization was that with Styled Components - there is no more need for adding classes to toggle style. Styled Components can read any props passed to it - which allows for [conditional styling](https://www.styled-components.com/docs/basics#adapting-based-on-props). This cleans up the JSX for any components and makes it far easier to read and manage.

### TypeScript

Having strong typing and intelligent autocomplete was invaluable in the Angular 5 project. It lead to far fewer headaches between developers and made code cleaner and easier to understand. `Interface`s allow for simple model definitions for complex objects and fewer mysteries (wait - which properties are on this `Object`?)

## Professional development

### Lead a team of developers

This did eventually lead to an issue with the sheer number of services and components as I quickly learned that _abstraction for the sake of abstraction is a dangerous idea_. I decided early on that I wanted to have as much abstraction as possible with components and services being small. What I believe I failed to realize was that this eventually leads to an enormous number of files and scattered project structure. When it came time to onboard new developers the process was a nightmare. It was difficult to understand our architecture and where relevant code was located.

I was trying to future-proof the code before I was even sure there would _be_ a future for the code. It’s okay to over-engineer when time permits, but sometimes the solution with flaws (code duplication, large components, etc) is okay. If it’s easily understood by other developers and works consistently, then it’s okay. [Duplication is far cheaper than the wrong abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction). I believe in my case I made the wrong abstraction - or more specifically - for the wrong reasons.

As it turned out the project _was_ eventually canned - so my future-proofing provided little benefit and ended up slowing the team down in the beginning days, and especially when we tried to introduce new developers to help ease the load on the front-end team.

Technical debt can always be resolved later _if_ it is recorded and stored somewhere. There are always opportunities to resolve any tech debt later when developers revisit components or functions.

### Initiated a code review practice amongst team

Early on in a React project I noticed that a lot of our tickets came back from QA fairly frequently. Admittedly we had been doing very little internal testing and review of our own, so I decided to kickstart an internal code review for every ticket that was going out to the client. The results were noticeable very quickly as tickets stopped returning so frequently. Some tickets were still coming back though, so we went a step further and had each developer review the code, test the code locally, and review all ticket acceptance criteria against the code branch. This so far has proven to be a huge boon for the team as the client’s QA can take upwards of a week before we hear back. Previously we would have tickets returned on Friday - the day before the sprint ended - and it would be a mad dash to fix things up. Typically tickets are returned now for minor details and can be resolved quickly by the team.

This seems like a such a “well, duh - of course you should be doing that” deal, but until we saw the results it was difficult to implement. Once the project lead was seeing less churn on tickets it was quickly encouraged and actively enforced.

### Hosted a successful hackathon

During an internal staff meeting, we decided to have our own version of an [“airing of grievances”](http://festivusweb.com/festivus-airing-of-grievances.php) - except that was more about grievances with the company and nothing to do with individuals (cause that would be heckin’ rude). One of the biggest gripes was that the office did not tend to work all together on the same project. It’s the nature of a consulting firm - people end up on different projects and can be pretty isolated. We’ve tried to integrate staff together more, but during this very same meeting we also found out that wasn’t inclusive enough. Something that the majority of staff were interested in though was a hackathon.

The idea was to get the office to put their pencils down and work on something fun for a day, and maybe even learn something that can be provide benefits for the company. What the company ended up going with is our own take on [Battlesnake](https://www.battlesnake.io/). We ran our own internal tournament and pitted teams against each other. It turned out to be a lot of fun and spurred a lot of developers working together. I’m hoping we can do another one again soon. There are also plans to send the office to the official competition!

## Lessons I learned

### Abstraction for the sake of abstraction is dangerous and should be avoided

I mentioned this in another section but I learned slowly (and painfully) that abstraction for the sake of it does not help anybody. It lead to an unwieldy codebase and longer development time when it came time to update or revise existing features. Generally speaking it is perfectly acceptable to go with a "flawed solution”. Having a generalized and abstracted solution does not automatically equal a better solution. That said, abstraction for the sake of it on _personal projects_ can be a great learning experience as it allows for a developer to flex their muscles in a low-stakes environment.

### Documentation is extremely valuable

I’m not just referring to comments in code, but more specifically in creating paper trails. I’ve lost count how many times I’ve had to dig up old tickets and code branches for bug fixes we applied weeks, months, or years ago. By documenting myself every step of the way I’m creating a paper trail that I can follow down the road. I’ve also found that leaving more detailed commits makes trawling the codebase easier. `git log —grep=<text> —no-merges` is my new favorite command.

### I need to spend more time reviewing requirements before starting work

This caught me a lot especially in a later project. I think I have a nasty tendency to read the requirements and jump right into work thinking I’ve understood everything and thought of any upcoming problems. I can count the number of times I was actually right here - meaning I was often wrong. My goal in the upcoming year is to stop and spend more time on requirements and spend more time with analysis.

### I need to be aware of how I conduct myself in the office

During my annual review something that was brought to my attention was my general demeanour when speaking about clients. I would often joke with my coworkers - what I would call “office talk” - mostly negatively. What I failed to realize though was that some of those coworkers might look up to me and respect me and take my opinion to heart. People were paying attention to what I was saying and if the only thing coming out of my mouth was negative, then it might lead to derision toward clients. It made total sense to me as I know I would do this often. I’ve since then tried my best to “clean up my act” and try to act and conduct myself more positively. I’m also trying to foster more positive communication between our office and remote teams that we work with on projects.

### Maintaining coding style guides helps enforce certain architectural decisions

One of the biggest challenges I’ve run into working with other teams is maintaining a consistent code style and keeping architecture in line with designs. In a recent project we integrated [ESLint](https://github.com/eslint/eslint) with our own editors. It takes some time to add everything into the config, but once it was done it was a noted improvement for us. There was a consistent style and things like `console.log` s were easily spotted and removed. The downside however was that our team was the only one using it. Another lesson learned.

## Things I want to focus on in 2019

2019 should be an exciting year for web development. [TypeScript is on the rise](https://hackernoon.com/major-programming-trends-to-prepare-for-in-2019-169987cc75f4) , and React has some awesome [new features on the way](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html). Here are a few things I want to focus on in 2019 - web dev or professionally.

### React Suspense

The [demo of Suspense from Dan Abramov](https://www.youtube.com/watch?v=nLF0n9SACd4) was super cool. In React projects I’ve worked on so far - I’ve had to define my own “Loader” components to wrap my UI components. That component also can only typically handle loading until it’s told to go away - whereas Suspense looks to work smartly with lazy loading and eventually asynchronous requests.

I admittedly don’t fully grasp the magic behind Suspense yet, but from what I’ve seen it looks extremely useful - especially combined with [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy).

### GraphQL

My first real experience with GraphQL was actually with [GatsbyJS](https://www.gatsbyjs.org/) - what’s powering this blog. Following some of the early tutorials I’m absolutely loving how everything works. A problem I encounter often in my profession is “data normalization” or “massaging data” between the client’s database and the front-end. GraphQL seems to solve this issue nicely with platform-independent query language for an API. Being able to perform your own “joins” however you like - on the fly! - now that’s really cool.

There’s some [great tutorials available on their site](https://graphql.org/learn/). They all update live which makes it easy to play with.

### More team lead experience

After the first Angular project early in the year I didn’t get a chance to really lead a team. I really enjoyed my short time and I hope in 2019 I will get more opportunities to do that. I’m looking to do more team _leadership_ and not _management_ - at least right now. We’ll see where the year takes me.

### Pursuing more personal projects

When I first started my career back in 2012 I quickly stopped working on web development projects in my spare time. I would find that after getting home from a long day of work - the last thing I want to look at is more lines of code. As my responsibilities have moved further away from development and more leadership, I’ve found myself looking more to personal coding projects. The first big step in that direction was this blog. I started with Jekyll and eventually used it as an excuse to learn [GatsbyJS](https://www.gatsbyjs.org/). It was a lot of fun! It also had a nice side effect of causing me to write a bit more. I’m treating this blog almost like a pseudo-journal. I’ve written down some ideas for small projects I can try to explore in the coming year that use some upcoming React features for example.

### Positivity

On the heels of my office conduct I’m going to try and generally be more positive in my professional - but also personal life. I think the world has enough negativity in it already, so I’m going to try and have a more positive outlook on things. Be more interested in new things. Be excited for the unknown.
