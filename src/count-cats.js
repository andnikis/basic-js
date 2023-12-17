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

  for (let i = 0; i < matrix.length; i++) {
    // can be many '^^' in the line
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === '^^') catsCount++;
  }

  return catsCount;
}

module.exports = {
  countCats
};
