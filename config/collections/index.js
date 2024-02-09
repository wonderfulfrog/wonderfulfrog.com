const path = require("path").posix;
const { dir } = require("../constants.js");

const getAllPosts = (collection) => {
  const posts = collection.getFilteredByGlob(
    path.join(dir.input, "content/posts/**/*.md"),
  );
  return posts.reverse();
};

const getAllPostCategories = (collection) => {
  const posts = getAllPosts(collection);

  const allCategories = posts.flatMap((post) => post.data.categories);

  const categories = allCategories.reduce((acc, category) => {
    if (acc[category]) {
      acc[category]++;
    } else {
      acc[category] = 1;
    }

    return acc;
  }, {});

  return categories;
};

const getPostsByCategory = (collection) => {
  const posts = getAllPosts(collection);
  const categories = Object.keys(getAllPostCategories(collection));

  const postsByCategory = {};
  categories.forEach((category) => {
    const categoryPosts = posts.filter((post) => {
      return post.data.categories.includes(category);
    });

    postsByCategory[category] = categoryPosts;
  });

  return postsByCategory;
};

module.exports = {
  getAllPosts,
  getAllPostCategories,
  getPostsByCategory,
};
