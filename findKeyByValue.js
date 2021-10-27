const assertEqual = function (actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅Assertion passes: ${actual} === ${expected}`);

  return console.log(`💩💩💩Assertion fails: ${actual} !== ${expected}`);
};

const findKeyByValue = (itemObj, item) => {
  let result;

  for (const genre in itemObj) {
    if (itemObj[genre] === item) return (result = genre);
  }

  return result;
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Friends'), undefined);
