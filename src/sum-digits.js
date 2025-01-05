const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = n;

  while (sum >= 10) {
    let newSum = 0;
    // получаем цифры числа и суммируем их
    while (sum > 0) {
      newSum += sum % 10; // получаем последнюю цифру числа и добавляем сумму
      sum = Math.floor(sum / 10); // убираем её
    }
    sum = newSum; // обновляем сумму для следующей итерации
  }
  return sum;
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
