const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return true ', () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    tail(words);
    assert(words.length, 3);
  });
});
