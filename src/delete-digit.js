const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let result = 0;
  const array = [];
  while (num) {
    array.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let j = 0; j < array.length; j++) {
    let n = 0;
    for (let i = array.length - 1; i >= 0; i--) {
      if (i !== j) {
        n = n * 10 + array[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

module.exports = {
  deleteDigit,
};
