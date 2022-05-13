const { execSync } = require('child_process');
const site = require('../_data/site.js');
const filters = require('../_11ty/filters.js');

module.exports = {
  version: () => {
    return String(Date.now());
  },
  postcssWatch: () => {
    try {
      execSync('npx postcss src/css/main.css --o docs/css/main.css');
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    return 'CSS BUILD';
  },
  figureInsert: function (image, srcset, imageAlt, imageDescription, artist, artistLink, imageCredit, imageCreditLink) {
    return `<figure class="w-screen max-w-screen-lg ml-[50%] -translate-x-1/2 my-12">
    <img class="w-full" src="${site.pathPrefix}${filters.imagePath(
      image
    )}" srcset="${srcset}" sizes="" alt="${imageAlt}">
    <figcaption class="text-center my-2">${imageDescription}. Photo by <a class="border-b-2 border-black" href="${artistLink}">${artist}</a> on <a class="border-b-2 border-black" href="${imageCreditLink}">${imageCredit}</a>
    </figcaption>
    </figure>`;
  },
};
