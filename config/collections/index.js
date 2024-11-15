import dayjs from "dayjs";

export const postsByTag = (collection) => {
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

export const gamesByYear = (collection) => {
  const allGames = collection.getFilteredByTag("game");
  const gamesByYear = {};

  allGames.forEach((game) => {
    const date = new dayjs(game.date);
    const year = date.year();

    if (!gamesByYear[year]) {
      gamesByYear[year] = { value: year, data: [game] };
    } else {
      gamesByYear[year].data.push(game);
    }
  });

  return gamesByYear;
};

export const catalogueByType = (collection) => {
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
