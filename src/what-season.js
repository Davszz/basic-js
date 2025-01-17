const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  };

  let month = date.getMonth() + 1;

  if (month === 12 || month <= 2) {
    return "winter";
  } else if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 11) {
    return "autumn";
    // if (month === 0 || month === 1 || month === 11) return 'winter';
    // if (month === 2 || month === 3 || month === 4) return 'spring';
    // if (month === 5 || month === 6 || month === 7) return 'summer';
    // if (month === 8 || month === 9 || month === 10) return 'autumn'; 
  }
}
// remove line with error and write your code here

module.exports = {
  getSeason
};
