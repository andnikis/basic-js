const { NotImplementedError } = require('../extensions/index.js');

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
  let item = options.hasOwnProperty('addition') ? String(str) + options.addition : String(str);
  let { additionSeparator = '|' } = options;
  let { separator = "+" } = options;

  // create substring using additionSeparator
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    item += additionSeparator + options.addition;
  }

  //repeat substring using repeat() for convenience, options.repeatTimes must be > 1
  if (options.repeatTimes > 1)
    item += (separator + item).repeat(options.repeatTimes - 1);

  return item;
}

// console.log(repeater(
//   true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })
// );


module.exports = {
  repeater
};
