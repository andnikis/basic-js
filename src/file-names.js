const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let table = new Map();
  let countedNames = [];

  for (let name of names) {
    if (table.has(name)) {
      let count = table.get(name);
      let currentName = name + `(${count})`;
      countedNames.push(currentName);
      // a found name
      table.set(name, count + 1);
      // new name
      table.set(currentName, 1);
    }
    else {
      countedNames.push(name);
      table.set(name, 1);
    }
  }

  return countedNames;
}

module.exports = {
  renameFiles
};
