const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find catsCount by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of catsCount found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsCount = 0;

  for (let i = 0, len = matrix.length; i < len; i++) {
    // can be many '^^' in the line
    let line = matrix[i];
    for (let j = 0, lenj = line.length; j < lenj; j++)
      if (line[j] === '^^') catsCount++;
  }

  return catsCount;
}

module.exports = {
  countCats
};
