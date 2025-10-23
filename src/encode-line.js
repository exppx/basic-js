const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (str.length === 0) return '';
  
  let res = '';
  let count = 1;
  let currentChar = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      count > 1 ?
      res = `${res}${count}${currentChar}` :
      res = `${res}${currentChar}` ;
      currentChar = str[i];
      count = 1;
    }
  }

  count > 1 ?
  res = `${res}${count}${currentChar}` :
  res = `${res}${currentChar}` ;

  return res;
}

module.exports = {
  encodeLine
};
