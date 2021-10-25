const assertEqual = function (actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅Assertion passes: ${actual} === ${expected}`);

  return console.log(`💩💩💩Assertion fails: ${actual} !== ${expected}`);
};

const head = arr => arr[0];

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
console.log(head([]));
