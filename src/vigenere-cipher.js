const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const CHARCODE_A = 'A'.charCodeAt();
const COUNT_LETTERS = 26; // alphabet

function isUpperLetter(c) {
  return c >= 'A' && c <= 'Z';
}

// test isn't used lower case
function isLowerLetter(c) {
  return c >= 'a' && c <= 'z';
}

class VigenereCipheringMachine {
  reversedOption = false;

  constructor(reversed) {
    this.reversedOption = reversed === false;
  }

  checkCryptArguments(text, key) {
    if (typeof text !== 'string' || typeof key !== 'string')
      throw Error("Incorrect arguments!");
  }

  encrypt(text, key) {
    this.checkCryptArguments(text, key);

    // convert array to string on return
    let cryptText = new Array(text.length);
    text = text.toUpperCase();
    key = key.toUpperCase();

    for (var i = 0, k = 0, t = 0, len = text.length; i < len; i++) {
      let c = text[i];

      if (isUpperLetter(c)) {
        const keywordChar = key[k++ % key.length];
        let code = ((c.charCodeAt() - CHARCODE_A) + (keywordChar.charCodeAt() - CHARCODE_A)) % COUNT_LETTERS;
        cryptText[t++] = String.fromCharCode(code + CHARCODE_A);
      }
      else {
        cryptText[t++] = c;
      }

    }

    if (this.reversedOption) cryptText.reverse();

    return cryptText.join('');
  }

  decrypt(text, key) {
    this.checkCryptArguments(text, key);

    // convert array to string on return
    let cryptText = new Array(text.length);
    text = text.toUpperCase();
    key = key.toUpperCase();

    for (var i = 0, k = 0, t = 0, len = text.length; i < len; i++) {
      let c = text[i];

      if (isUpperLetter(c)) {
        const keywordChar = key[k++ % key.length];
        let upperLetter = ((c.charCodeAt() - CHARCODE_A) - (keywordChar.charCodeAt() - CHARCODE_A) + COUNT_LETTERS) % COUNT_LETTERS;
        cryptText[t++] = String.fromCharCode(upperLetter + CHARCODE_A);
      }
      else {
        cryptText[t++] = c;
      }

    }

    if (this.reversedOption) cryptText.reverse();

    return cryptText.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
