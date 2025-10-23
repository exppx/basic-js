const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: '',
  links: [''],

  getLength() {
    return this.links.length - 1;
  },
  addLink (value) {
    this.links.push(value);
    this.buildChain();
    return this;
  },
  removeLink (position) {
    if (!Number.isInteger(position) || position < 1 || position >= this.links.length) {
      this.chain ='';
      this.links = [''];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.links.splice(position, 1);
    this.buildChain();
    return this;
  },
  reverseChain () {
    this.links = this.links.reverse();
    this.links.unshift('');
    this.links.pop();
    this.buildChain();
    return this;
  },
  finishChain () {
    if (this.chain.slice(-2) === '~~') this.chain = this.chain.slice(0, -2);
    const res = this.chain;
    this.chain ='';
    this.links = [''];
    return res;
  },
  buildChain () {
    let ch = '';
    for (let i = 1; i < this.links.length; i++) {
      ch = `${ch}( ${this.links[i]} )~~`;
    }
    this.chain = ch;
    this.chain = this.chain.slice(0, -2);
  }
};

module.exports = {
  chainMaker,
};
