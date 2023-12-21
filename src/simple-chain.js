const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    // undefined isn't checked in tests
    this.chain.push(value === undefined ? "" : value);

    return this;
  },

  removeLink(position) {
    // position is from 1 to getLength(), not zero based
    if (typeof position !== "number" || !Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.clearChain();
      throw Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  clearChain() {
    this.chain.length = 0;
  },

  finishChain() {
    let text = this.chain.map((v) => `( ${v} )`).join('~~');

    this.clearChain();
    return text;
  },
};

module.exports = {
  chainMaker,
};
