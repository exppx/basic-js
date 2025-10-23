const { NotImplementedError } = require('../lib');

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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const res = [...arr];
  let pos = 0;

  for (let i = 0; i < res.length; i++) {
    let exit = true;

    for (let j = pos; exit && j < res.length; j++) {
      switch (res[j]) {
        case '--double-next':
          if (res[j + 1]) {
            res[j] = res[j + 1];
          } else {
            res[j] = ' ';
          }
          exit = false;
          pos += 2;
          break;
        case '--double-prev':
          if (res[j - 1]) {
            res[j] = res[j - 1];
          } else {
            res[j] = ' ';
          }
          exit = false;
          pos += 1;
          break;
        case '--discard-next':
          if (res[j + 1]) res.splice(j + 1, 1);
          res[j] = ' ';
          exit = false;
          pos += 1;
          break;
        case '--discard-prev':
          res[j] = ' ';
          if (res[j - 1] && res[j - 1] !== ' ') res.splice(j - 1, 1);
          exit = false;
          pos += 1;
          break;
        default:
          pos++;
      }
    }
  }
  return res.filter((e) => e !== ' ');
}

module.exports = {
  transform
};
