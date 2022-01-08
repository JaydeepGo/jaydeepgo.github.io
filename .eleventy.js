const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const filters = require('./src/_11ty/filters');

module.exports = function (eleventyConfig) {
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');

  eleventyConfig.addCollection('tagList', require('./src/_11ty/getTagList'));

  return {
    pathPrefix: '/',
    dir: {
      input: 'src',
      output: 'docs',
      data: './_data',
      includes: './_includes',
      layouts: './_layouts',
    },
    templateFormats: ['md', 'njk'],
    htmlTemplateEngine: 'njk',
  };
};
