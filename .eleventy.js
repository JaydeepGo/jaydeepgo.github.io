const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const emojiReadTime = require('@11tyrocks/eleventy-plugin-emoji-readtime');
const filters = require('./src/_11ty/filters');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  eleventyConfig.setDataDeepMerge(false);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(emojiReadTime, {
    showEmoji: false,
    emoji: '📕',
    label: 'mins read',
    wpm: 200,
    bucketSize: 3,
  });
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('./src/posts/*.md');
  });

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
