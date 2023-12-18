const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let subdomains = domains.map((v) => v.split('.').reverse());
  let mapOfDNS = new Map();

  for (subdomain of subdomains) {
    let reversedAddr = '';

    for (dns of subdomain) {
      reversedAddr = reversedAddr + '.' + dns;
      let dnsCount = mapOfDNS.has(reversedAddr) ? mapOfDNS.get(reversedAddr) + 1 : 1;
      mapOfDNS.set(reversedAddr, dnsCount);
    }
  }

  // sort by ascending
  let entries = Array.from(mapOfDNS.entries());
  entries.sort((a, b) => a[0] < b[0] ? -1 : 1);

  return Object.fromEntries(entries);
}

// console.log(
//   getDNSStats([
//     'music.yandex.ru',
//     'code.yandex.ru',
//     'yandex.ru'
//   ]));

module.exports = {
  getDNSStats
};
