const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // wrong argument
  if (!(members instanceof Array)) return false;

  let abbr = [];
  // handle only strings
  members.forEach(cur => {
    if (typeof cur === 'string') abbr.push(cur.trimStart()[0].toUpperCase())
  });
  // localeCompare() is also possible
  abbr = abbr.sort((a, b) => a < b ? -1 : 1);

  return abbr.join('');
}

// console.log(
//   createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])
// );

module.exports = {
  createDreamTeam
};
