const postsByTag = (collection) => {
  const posts = collection.getFilteredByTag("post");

  const postsByTag = {};

  for (const post of posts) {
    for (const tag of post.data.tags) {
      postsByTag[tag] ??= [];
      postsByTag[tag].push(post);
    }
  }

  return postsByTag;
};

module.exports = {
  postsByTag,
};
