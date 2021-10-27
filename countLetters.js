const assertEqual = function (actual, expected) {
  if (actual === expected)
    return console.log(`✅✅✅Assertion passes: ${actual} === ${expected}`);

  return console.log(`💩💩💩Assertion fails: ${actual} !== ${expected}`);
};

const countLetters = string => {
  const result = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (!result[letter]) {
        result[letter] = 1;
      } else {
        result[letter]++;
      }
    }
  }

  return result;
};

console.log(countLetters('lighthouse in the house'));
