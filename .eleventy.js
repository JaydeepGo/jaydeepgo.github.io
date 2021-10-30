const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addCollection("myPosts", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/posts/*.md");
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
            data: './_data',
            includes: './_includes',
            layouts: './_layouts'
          },
          templateFormats: [
            'md',
            'njk',
            'ico'
          ],
          htmlTemplateEngine: 'njk'
    }
}