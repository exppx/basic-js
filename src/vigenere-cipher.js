const { NotImplementedError } = require('../lib');

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
class VigenereCipheringMachine {
  constructor (type) {
    if (arguments.length === 0) {
      this.straight = true;
    } else {
      this.straight = type;
    }
  }

  encrypt(message, key) {
    if (!(message) || !(key)) throw new Error('Incorrect arguments!');

    let msg = message.toUpperCase().split('');
    if (!this.straight) msg.reverse();

    let keyWord = key.toUpperCase();
    let keyToCode = 0;

    return msg.map((e) => {
      if (/[A-Z]/g.test(e)) {
        let moveTo = keyWord[keyToCode].charCodeAt(0) - 65;
        keyToCode++;
        keyToCode = keyToCode % keyWord.length;
        return String.fromCharCode((e.charCodeAt(0) - 65 + moveTo) % 26 + 65);
      } else {
        return e;
      }
    }).join('');
  }

  decrypt(cipher, key) {
    if (!(cipher) || !(key)) throw new Error('Incorrect arguments!');

    let msg = cipher.toUpperCase().split('');
    if (!this.straight) msg.reverse();

    let keyWord = key.toUpperCase();
    let keyToCode = 0;

    return msg.map((e) => {
      if (/[A-Z]/g.test(e)) {
        let moveTo = keyWord[keyToCode].charCodeAt(0) - 65;
        keyToCode++;
        keyToCode = keyToCode % keyWord.length;
        return String.fromCharCode((e.charCodeAt(0) - 65 - moveTo + 26) % 26 + 65);
      } else {
        return e;
      }
    }).join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
