const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  const assertion = eqArrays(arr1, arr2);

  if (assertion) return console.log('✅✅✅Assertion passes');

  if (!assertion) return console.log('💩💩💩Assertion fails');
};

module.exports = assertArraysEqual;
