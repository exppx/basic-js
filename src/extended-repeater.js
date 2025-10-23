const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let res = '';
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || (options.addition ? 1 : 0);
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';

  const mainStr = String(str);
  const addition = String(options.addition);

  for (let i = 0; i < repeatTimes; i++) {
    res += mainStr;
    for (let j = 0; j < additionRepeatTimes; j++) {
      res += addition;
      if (j !== additionRepeatTimes - 1) res += `${additionSeparator}`;
    }
    if (i !== repeatTimes - 1) res += `${separator}`;
  }

  return res;
}

module.exports = {
  repeater
};
