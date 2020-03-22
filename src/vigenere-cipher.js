class VigenereCipheringMachine {
    constructor(direction) {
      this.direction = direction;
    }
  
    encrypt(message, key) {
      message = message.toUpperCase();
      key = key.toUpperCase();
      let result = "";
  
      let sumNoLetter = 0;
      for (let i = 0; i < message.length; i++) {
        if (message[i].match(/[\W\d]/)) {
          result += message[i];
          sumNoLetter++;  
          continue;
        }
        let mCode = message.codePointAt(i); 
        let kCode = key.codePointAt(i - sumNoLetter); 
        if (i >= key.length) kCode = key.codePointAt((i - sumNoLetter) % key.length);
        let resCode = (mCode - 65 + kCode - 65) % 26 + 65;
        result += String.fromCodePoint(resCode);
      }
      if (this.direction === false) return result.split('').reverse().join('');
      return result;
    }
  
    decrypt(encryptedMessage, key) {
      key = key.toUpperCase();
      let result = "";
  
      let sumNoLetter = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (encryptedMessage[i].match(/[\W\d]/)) {
          result += encryptedMessage[i];
          sumNoLetter++;
          continue;
        }
        let emCode = encryptedMessage.codePointAt(i);
        let kCode = key.codePointAt(i - sumNoLetter);
        if (i >= key.length) kCode = key.codePointAt((i - sumNoLetter) % key.length);
        let resCode = (emCode+26 - kCode) % 26 + 65;
        result += String.fromCodePoint(resCode);
      }
      if (this.direction === false) return result.split('').reverse().join('');
      return result;
    }
  }
  
  module.exports = VigenereCipheringMachine;
