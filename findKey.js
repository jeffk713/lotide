const assertEqual = function (actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅Assertion passes: ${actual} === ${expected}`);

  return console.log(`💩💩💩Assertion fails: ${actual} !== ${expected}`);
};

const findKey = (obj, cb) => {
  let nameToReturn;

  for (const name in obj) {
    if (cb(obj[name])) {
      nameToReturn = name;
      break;
    }
  }
  
  return nameToReturn;
};

findKey(
  {
    'Blue Hill': { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  x => x.stars === 2
); // => "noma"

assertEqual(
  findKey(
    {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    x => x.stars === 2
  ),
  'noma'
);
