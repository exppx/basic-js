const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
    let maxDepth = 0;
    let currentDepth = 0;

    getDepth(arr);

    function getDepth(a) {
      if (!Array.isArray(a)) {
        return;
      }
  
      currentDepth++;
  
      if (a.every((e) => !Array.isArray(e))) {
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
        currentDepth -= 1;
        return;
      }
  
      a.forEach((e) => getDepth(e));
      currentDepth -= 1;
      return;
    }
    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
