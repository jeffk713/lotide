const assertEqual = function (actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅Assertion passes: ${actual} === ${expected}`);

  return console.log(`💩💩💩Assertion fails: ${actual} !== ${expected}`);
};

const tail = arr => arr.map((current, index) => index !== 0);

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!