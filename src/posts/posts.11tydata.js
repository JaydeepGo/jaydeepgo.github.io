const site = require('../_data/site.js');

module.exports = {
  title: '',
  shortDescription: '',
  summary: '',
  author: site.author,
  layout: 'post',
  tags: 'general',
  permalink: 'blog/{{ title | slugify }}/',
  preview: true,
  isExternal: false,
  featuredImage: '',
  isPost: true,
};
