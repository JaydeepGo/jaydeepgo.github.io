const { DateTime } = require('luxon');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

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
};
