import date from "./date.js";

const filterFavourites = (collection) => {
  return collection.filter(
    (item) => item.data.favourite || item.data.isFavourite,
  );
};

const organizeByYear = (collection) => {
  const collectionByYear = {};

  collection.forEach((item) => {
    const year = date.formatDate(item.date, "YYYY");

    if (!collectionByYear[year]) {
      return (collectionByYear[year] = [item]);
    }

    collectionByYear[year].push(item);
  });

  return collectionByYear;
};

export default {
  filterFavourites,
  organizeByYear,
};
