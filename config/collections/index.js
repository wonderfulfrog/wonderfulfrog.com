const path = require("path").posix;
const { dir } = require("../constants.js");
const { slugifyString } = require("../utils.js");

const getAllPosts = (collection) => {
  const posts = collection.getFilteredByGlob(
    path.join(dir.input, "content/posts/**/*.md"),
  );
  return posts.reverse();
};

const getAllPostCategories = (collection) => {
  const posts = getAllPosts(collection);

  const allCategories = posts.flatMap((post) => post.data.categories);

  const categoryCounts = allCategories.reduce((acc, category) => {
    if (acc[category]) {
      acc[category]++;
    } else {
      acc[category] = 1;
    }

    return acc;
  }, {});

  const categories = Object.entries(categoryCounts)
    .map(([category, count]) => ({
      key: slugifyString(category),
      title: category,
      href: `/tags/${slugifyString(category)}`,
      count: count,
    }))
    .sort((a, b) => b.count - a.count);

  return categories;
};

const getPostsByCategory = (collection) => {
  const posts = getAllPosts(collection);
  const categories = Object.keys(getAllPostCategories(collection));

  const postsByCategory = categories
    .map((category) => ({
      category,
      posts: posts.filter((post) => post.data.categories.includes(category)),
    }))
    .sort((a, b) => b.posts.length - a.posts.length);

  return postsByCategory;
};

const getAllCatalogue = (collection) => {
  const items = collection.getFilteredByGlob(
    path.join(dir.input, "content/catalogue/**/*.md"),
  );
  return items.reverse();
};

module.exports = {
  getAllCatalogue,
  getAllPostCategories,
  getAllPosts,
  getPostsByCategory,
};
