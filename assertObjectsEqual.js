const eqArrays = (arr1, arr2) => {
  let result = true;
  arr1.forEach((num, i) => {
    if (num !== arr2[i]) return (result = false);
  });

  return result;
};

const eqObjects = function (object1, object2) {
  let testPass = true;

  const obj1Length = Object.keys(object1).length;
  const obj2Length = Object.keys(object2).length;
  if (obj1Length !== obj2Length) return false;

  for (const key in object1) {
    // when values are array
    if (Array.isArray(object1[key])) {
      const obj1KeyLength = object1[key].length;
      const obj2KeyLength = object2[key].length;

      if (obj1KeyLength !== obj2KeyLength) {
        testPass = false;
        break;
      }

      if (!eqArrays(object1[key], object2[key])) {
        testPass = false;
        break;
      }

      //when values are primitive
    } else {
      if (object1[key] !== object2[key]) {
        testPass = false;
        break;
      }
    }
  }
  return testPass;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  const assertion = eqObjects(actual, expected);

  if (assertion)
    return console.log(
      `✅✅✅Assertion passes: ${inspect(actual)} === ${inspect(expected)}`
    );

  console.log(
    `💩💩💩Assertion fails: ${inspect(actual)} !== ${inspect(expected)}`
  );
};

assertObjectsEqual({ a: 2, b: 4 }, { a: 2, b: 4, c: 5 });
assertObjectsEqual({ a: 2, b: 4 }, { a: 2, b: 4 });
assertObjectsEqual({ a: 2, b: 5 }, { a: 2, b: [2, 5] });
assertObjectsEqual({ a: 2, b: [1, 2] }, { a: 2, b: 5 });
