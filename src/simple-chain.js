const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links : [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === null) this.links.push(`( null )`)
    else this.links.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.links[position - 1] === undefined) {
      this.links = []; 
      throw 'error'
    } else 
      {
        this.links.splice(position - 1, 1) 
      };
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let result = this.links.join('~~')
    this.links = [];
    return result;
  }
};

module.exports = chainMaker;
