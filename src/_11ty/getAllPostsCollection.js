const externalPosts = require('../_data/external-posts.js');

module.exports = function (collection) {
  let local_post = collection.getFilteredByGlob('./src/posts/*.md');
  let overallPosts = [...local_post, ...externalPosts];

  let posts = overallPosts.sort(function (a, b) {
    return b.date - a.date;
  });

  return [...posts];
};
