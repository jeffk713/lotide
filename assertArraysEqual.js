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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
