const site = require('../_data/site.js');

module.exports = {
  layout: 'post',
  tags: 'general',
  permalink: 'blog/{{ title | slugify }}/',
  preview: true,
  author: site.author,
  isExternal: false,
};
