const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));

    return {
      //pathPrefix: "/sitePrefix/",
      dir: {
        input: 'src',
        output: 'docs',
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