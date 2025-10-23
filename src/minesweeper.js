const { NotImplementedError } = require('../lib');

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
  let res = [];

  for (let n = 0; n < matrix.length; n++) {
    res[n] = [];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const startI = i > 0 ? i - 1 : i;
      const startJ = j > 0 ? j - 1 : j;
      const endI = i < matrix.length - 1 ? i + 1 : i;
      const endJ = j < matrix[i].length - 1 ? j + 1 : j;
      let mines = 0;

      if (matrix[i][j] === true) {
        mines = 1;
      } else {
        for (let k = startI; k <= endI; k++) {
          for (let l = startJ; l <= endJ; l++) {
            if (matrix[k][l] === true) mines++;
          }
        }
      }

      res[i][j] = mines;
    }
  }

  return res;
}

module.exports = {
  minesweeper
};
