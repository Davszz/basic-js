const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // let adress = n.split("-");
  let error = /^[A-F0-9]/;
  // if (adress.length !== 6) return false
  // for (let i = 0; i < adress.length; i++) {
  //   if (adress[i].length !== 2 && !(error.test(n))) return false
  // }
  // return true
  
  return error.test(n.split("-"));

  // remove line with error and write your code here
}
module.exports = {
  isMAC48Address
};
