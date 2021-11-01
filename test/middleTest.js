const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return one element from an array with odd numbers of element ', () => {
    assert(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it('should return two element from an array with even numbers of element ', () => {
    assert(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);
  });
});
