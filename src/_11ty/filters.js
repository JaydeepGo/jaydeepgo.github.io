const { DateTime } = require('luxon');
const { execSync } = require('child_process');

module.exports = {
  htmlDateString: (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  },
  postDateString: (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('cccc, dd LLL, yyyy');
  },
  imagePath: (imageName) => {
    return '/images/' + imageName;
  },
  postcss: () => {
    try {
      execSync('npx postcss src/css/main.css --o docs/css/main.css');
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    return 0;
  },
};
