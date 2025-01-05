const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let sum = 1;
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum = sum + 1;
    } else {
      newStr += sum === 1 ? str[i] : sum + str[i];
      sum = 1;
    }
  }
  return newStr
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
