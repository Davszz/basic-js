const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sort = arr.filter((n) => n > 0).sort((a, b) => a - b);
  let index = 0;
  let newArr = arr.map((x) => {
    if (x > -1) {
      index++;
      return sort[index - 1]
    } else {
      return x;
    }
  });
  return newArr
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
