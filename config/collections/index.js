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

const catalogueByType = (collection) => {
  const allItems = collection.getFilteredByTag("catalogue");

  const catalogueByType = {};

  for (const item of allItems) {
    const type = item.data.tags[1];
    if (!type) continue;

    catalogueByType[type] ??= [];
    catalogueByType[type].push(item);
  }

  return catalogueByType;
};

module.exports = {
  catalogueByType,
  postsByTag,
};
