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
  if (!(typeof str === 'string')) return undefined;
  if (str === '') return '';

  let encoded = [];
  let c = str[0];
  let count = 1;

  function writeCurrentSequence() {
    let substr = count > 1 ? count + c : c;
    encoded.push(substr);
  }

  for (let i = 1, len = str.length; i < len; i++) {
    // write current sequence and start a new one
    if (c !== str[i]) {
      writeCurrentSequence();
      c = str[i];
      count = 1;
    }
    else
      count++;
  }
  // write last sequence which always exists
  writeCurrentSequence();

  return encoded.join('');
}

// console.log(encodeLine('aabbbc'))

module.exports = {
  encodeLine
};
