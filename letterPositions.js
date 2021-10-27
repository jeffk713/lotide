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

const letterPositions = function (sentence) {
  const results = {};

  const sentenceArr = Array.from(sentence);

  sentenceArr.forEach((letter, index) => {
    if (letter === ' ') return;

    if (!results[letter]) {
      results[letter] = [index];
    } else {
      results[letter].push(index);
    }
  });

  return results;
};

// console.log(letterPositions('lighthouse in the house'));

assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions('hello')['e'], [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);
