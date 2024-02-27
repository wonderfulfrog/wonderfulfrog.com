---
title: How does React's Suspense work?
excerpt: The Suspense is killing me.
tags: ["react"]
---

First and foremost, this post is writing about stuff that is part of the Experimental branch of React, so by the time you read this it could be out of date. I’ll try to keep things up to date as they develop.

React’s recent post on [Concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.html) got me thinking it’s finally time to sit down and experiment with the Suspense API for data fetching. I dug into the blog post but quickly got lost with how Suspense actually works.

What is Suspense exactly? Suspense suspends components until they are ready. How does it know when components are ready? Turns out it’s a lot like [Error Boundaries](https://reactjs.org/docs/error-boundaries.html). When `throw Error` happens, an Error Boundary catches the error so the whole app doesn’t crash. Suspense works similarly, except instead of errors, it’s looking for a `Promise` object. This is a little weird to most web developers I imagine… since when did we start `throw`ing promises? Once I understood that though, I started to get how a `<Suspense />` component can tell when data is loaded. Once the Promise (or Promises) resolves, the component is ready. There is an example on the React blog post:

```jsx
const resource = fetchProfileData();

function ProfilePage() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );

```

In this case, the `resource.user.read()` (or `resource.posts.read()`) `throw`s a Promise until the data is available, then it returns. The `<Suspense />` component returns the `fallback` until the thrown Promise resolves (either success or fail). It seems unintuitive to `throw` a Promise, but then again, so did JSX and now it’s second nature to me. I couldn’t imagine life without it.

Another nifty element of Suspense is the ability to control how the UI loads based on data fetches in progress. It’s possible to wrap a bunch of thrown promises together by a Suspense so the UI waits for all of them to finish first.

Another option is to nest Suspense options. This allows for a gradual reveal of the UI in the event a data fetch returns earlier than other requests. It gives the developer complete control over how the UI renders. Returning to the example above in its current configuration, the `<ProfileDetails />` component will load and unlock the top level `<Suspense />` wrapper. That will render the `<ProfileDetails />` component and render the next `<Suspense>` block’s `fallback` until the components inside load. Alternatively, the `<Suspense>` block that wraps the `<ProfileTimeline />` component could be removed to produce this:

```jsx
function ProfilePage() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <ProfileTimeline />
    </Suspense>
  );
}
```

This would require both components to finish loading until they are then both revealed at the same time. The developer has complete control over the loading behaviour and can modify it with minimal changes.

This only covers a small slice of the upcoming changes with Concurrent Mode, but I had a bit of trouble grokking the foundations. This helped me understand how Suspense works, and now I’m excited to start learning about the rest, like Transitions!
