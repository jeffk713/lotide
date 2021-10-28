const eqArrays = (arr1, arr2) => {
  let result = true;
  arr1.forEach((num, i) => {
    if (num !== arr2[i]) return (result = false);
  });

  return result;
};

const assertArraysEqual = (arr1, arr2) => {
  const assertion = eqArrays(arr1, arr2);

  if (assertion) return console.log('✅✅✅Assertion passes');

  if (!assertion) return console.log('💩💩💩Assertion fails');
};

const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(
  map(words, word => word[0]),
  ['g', 'c', 't', 'm', 't']
);
