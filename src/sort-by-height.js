const { NotImplementedError } = require('../lib');

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
  const onesPositions = [];
  const filteredSortedArr = arr.filter((e) => e !== -1).sort((a, b) => a - b);

  arr.forEach((e, i) => {
    if (e === -1) onesPositions.push(i)
  });

  for (let i = 0; i < onesPositions.length; i++) {
    filteredSortedArr.splice(onesPositions[i], 0, -1);
  }

  return filteredSortedArr;
}

module.exports = {
  sortByHeight
};
