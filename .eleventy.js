const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const emojiReadTime = require('@11tyrocks/eleventy-plugin-emoji-readtime');
const filters = require('./src/_11ty/filters');
const shortcodes = require('./src/_11ty/shortcodes');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const site = require('./src/_data/site.js');
require('dotenv').config();

module.exports = function (eleventyConfig) {
  // Access environment variable
  // process.env.API_KEY;

  // add filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // add Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
  });

  eleventyConfig.addWatchTarget('tailwind.config.js');
  eleventyConfig.addWatchTarget('postcss.config.js');
  eleventyConfig.addWatchTarget('src/css/tailwind.css');

  eleventyConfig.setDataDeepMerge(false);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(emojiReadTime, {
    showEmoji: true,
    emoji: '📕',
    label: 'mins read',
    wpm: 200,
    bucketSize: 3,
  });
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/jscripts');

  eleventyConfig.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('./src/posts/*.md');
  });

  eleventyConfig.addCollection('tagList', require('./src/_11ty/getTagList'));

  /* Markdown Plugins */
  let markdownIt = require('markdown-it');
  let markdownItAnchor = require('markdown-it-anchor');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary('md', markdownIt(options).use(markdownItAnchor));

  return {
    pathPrefix: site.pathPrefix,
    dir: {
      input: 'src',
      output: 'docs',
      data: './_data',
      includes: './_includes',
      layouts: './_layouts',
    },
    templateFormats: ['md', 'njk', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
