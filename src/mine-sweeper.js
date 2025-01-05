const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {

  let newArr = arr.map((x) => x.slice());

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let acc = 0;

      if (arr[i - 1] !== undefined) {
        if (arr[i - 1][j]) acc++;
        if (arr[i - 1][j - 1]) acc++;
        if (arr[i - 1][j + 1]) acc++;
      }

      if (arr[i][j - 1]) acc++;
      if (arr[i][j + 1]) acc++;

      if (arr[i + 1] !== undefined) {
        if (arr[i + 1][j]) acc++;
        if (arr[i + 1][j - 1]) acc++;
        if (arr[i + 1][j + 1]) acc++;
      }

      newArr[i][j] = acc;
    }
  }
  return newArr;

  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
