const excludedTags = ['all', 'nav', 'post', 'posts'];
const externalPosts = require('../_data/external-posts.js');

module.exports = function (collection) {
  let tagSet = new Set();
  collection.getAll().forEach(function (item) {
    if ('tags' in item.data) {
      let tags = item.data.tags.filter((item) => !excludedTags.includes(item));

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });
  externalPosts.forEach((item) => {
    for (const tag of item.tags) {
      tagSet.add(tag);
    }
  });

  return [...tagSet];
};
