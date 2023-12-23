const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined)
    return 'Unable to determine the time of year!'

  // is date real
  if (!(date instanceof Date) || date[Symbol.toStringTag] === 'Date')
    throw Error('Invalid date!')

  // it's possible to use 4 values and if else too
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  let month = date.getUTCMonth();

  return seasons[month];
}

module.exports = {
  getSeason
};
