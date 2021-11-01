const eqArrays = (arr1, arr2) => {
  let result = true;
  arr1.forEach((num, i) => {
    if (num !== arr2[i]) return (result = false);
  });

  return result;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])); // => true
// console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])); // => false

module.exports = eqArrays;
