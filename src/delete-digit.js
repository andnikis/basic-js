const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  let digits = [];

  // find all digits, n must be > 0
  while (n > 0) {
    digits.unshift(n % 10);
    n = Math.floor(n / 10);
  }

  // delete a first minimum digit
  let minDigit = digits[0];
  for (let i = 1; i < digits.length; i++) {
    if (minDigit < digits[i]) {
      delete digits[i - 1];
      return returnNumber();
    }
    else minDigit = digits[i];
  }

  // delete the last digit if there isn't a first minimum digit
  digits.pop();
  return returnNumber();

  function returnNumber() {
    return Number(digits.join(''));
  }
}

module.exports = {
  deleteDigit
};
