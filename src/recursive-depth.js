const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let depth = 1;
    // by default 0 for Math.max()
    let subarrays = [0];

    arr.forEach(e => {
      // calc the depth of every subarray
      if (Array.isArray(e)) subarrays.push(this.calculateDepth(e));
    });

    return depth + Math.max(...subarrays);
  }
}

module.exports = {
  DepthCalculator
};
