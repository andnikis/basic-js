const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");

  let transformed = [];
  let action = '';
  // the element can't be used for -prev actions
  let isDiscardNext = false;

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (action !== '') {
      if (action === '--double-next') {
        transformed[j++] = arr[i];
        transformed[j++] = arr[i];
        isDiscardNext = false;
      }
      // can be variance kind of ['--discard-next', 1337, '--double-prev']
      else
        isDiscardNext = true;
      action = '';
    }
    else {
      // next iteration
      if (arr[i] === '--double-next' || arr[i] === '--discard-next')
        action = arr[i];
      else if (arr[i] === '--double-prev') {
        // prev element must exist
        if (j > 0 && !isDiscardNext) {
          transformed[j] = transformed[j - 1];
          j++;
        }
      }
      // delete the previous element
      else if (arr[i] === '--discard-prev') {
        if (j > 0 && !isDiscardNext) {
          transformed.splice(j - 1, 1);
          j--;
        }
      }
      else
        transformed[j++] = arr[i];

      // there can be only prev actions
      isDiscardNext = false;
    }
  }

  return transformed;
}

module.exports = {
  transform
};
