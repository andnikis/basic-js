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
  // n must be a string
  let numbers = n.split('-');
  const MAC_LENGTH = 6;

  if (numbers.length === MAC_LENGTH) {
    for (let i = 0; i < MAC_LENGTH; i++) {
      if (isNaN(parseInt(numbers[i], 16)) || numbers[i].toUpperCase() !== numbers[i]) {
        return false;
      }
    }

    // all integers are correct
    return true;
  }

  // must be MAC_LENGTH integers in n
  return false;
}

// console.log(isMAC48Address('00-1B-63-84-45-E6'));

module.exports = {
  isMAC48Address
};
