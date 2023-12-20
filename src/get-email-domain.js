const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // email must be a string
  const charAt = email.lastIndexOf('@');

  return charAt >= 0 ? email.slice(charAt + 1) : email;
}

// console.log(getEmailDomain('prettyandsimple@example.com'));

module.exports = {
  getEmailDomain
};
