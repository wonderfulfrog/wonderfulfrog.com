const allTagCounts = (collection, ignore = ["post"]) => {
  if (!collection.length) {
    throw new Error("Invalid collection, no items");
  }

  const tagCounts = new Map();

  for (const item of collection) {
    const tags = item.data.tags;

    tags?.forEach((tag) => tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1));
  }

  ignore.forEach((tag) => tagCounts.delete(tag));

  const tagArray = Array.from(tagCounts.entries())
    .map(([tag, count]) => ({
      tag,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  return tagArray;
};

const filterByTags = (collection, tags = []) => {
  return collection.filter(
    (item) =>
      item.data.tags && !item.data.tags.every((tag) => tags.includes(tag)),
  );
};

export default {
  allTagCounts,
  filterByTags,
};
