const excludedTags = ['all', 'nav', 'local-post', 'posts'];

module.exports = function (collection) {
  let tagSet = new Set();
  let life = collection.getFilteredByTag('posts');
  collection.getFilteredByTag('posts').forEach(function (item) {
    if ('tags' in item.data) {
      let tags = item.data.tags.filter((item) => !excludedTags.includes(item));

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  return [...tagSet];
};
