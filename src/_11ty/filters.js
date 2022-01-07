const { DateTime } = require("luxon");

module.exports = {
    htmlDateString: (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    }
};