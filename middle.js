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

const middle = arr => {
  let arrMiddle = [];
  if (arr.length < 3) return arrMiddle;

  if (arr.length % 2 !== 0) {
    const middleIndex = Math.floor(arr.length / 2);
    arrMiddle = arr.slice(middleIndex, middleIndex + 1);
  }

  if (arr.length % 2 === 0) {
    const middleIndex = arr.length / 2;
    arrMiddle = arr.slice(middleIndex - 1, middleIndex);
  }

  return arrMiddle;
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);
