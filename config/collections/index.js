export const collectionByTag = (collection, collectionName) => {
  const items = collection.getFilteredByTag(collectionName);

  const itemsByTag = {};

  for (const item of items) {
    for (const tag of item.data.tags) {
      itemsByTag[tag] ??= [];
      itemsByTag[tag].push(item);
    }
  }

  return itemsByTag;
};
