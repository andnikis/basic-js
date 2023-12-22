const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // extract and sort all values !== -1
  let sorted = arr.filter(v => v !== -1).sort((a, b) => a - b);

  // change values in arr only if they !== -1 using sorted array
  for (let i = 0, iSorted = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sorted[iSorted++];
    }
  }

  // array is modified
  return arr;
}

module.exports = {
  sortByHeight
};
