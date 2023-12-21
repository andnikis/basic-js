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
function minesweeper(matrix) {
  // all rows have the same size
  const MIN_ROW = 0;
  const MAX_ROW = matrix.length - 1;
  // all columns have the same size
  const MIN_COLUMN = 0;
  const MAX_COLUMN = matrix[0].length - 1;
  // result
  let map = new Array(MAX_ROW + 1);
  for (let i = 0; i <= MAX_ROW; i++) map[i] = new Array(MAX_COLUMN + 1);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let minesCount = 0;
      // check the upper row
      minesCount += calcRowMines(i - 1, j);
      // check the current row
      minesCount += calcRowMines(i, j);
      // check the lower row
      minesCount += calcRowMines(i + 1, j);
      // don't calc a mine in the same cell
      map[i][j] = matrix[i][j] ? minesCount - 1 : minesCount;
    }
  }

  function calcRowMines(row, column) {
    let minesInRow = 0;

    // indexes must be within the range
    if (row >= MIN_ROW && row <= MAX_ROW) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (j >= MIN_COLUMN && j <= MAX_COLUMN && matrix[row][j])
          minesInRow++;
      }
    }

    return minesInRow;
  }

  return map;
}

module.exports = {
  minesweeper
};
