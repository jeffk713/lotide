const assertEqual = function (actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅Assertion passes: ${actual} === ${expected}`);

  return console.log(`💩💩💩Assertion fails: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  let result = true;
  arr1.forEach((num, i) => {
    if (num !== arr2[i]) return (result = false);
  });

  return result;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
    } else if (typeof object1[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        testPass = false;
        break;
      }
    }
  }
  return testPass;
};

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
