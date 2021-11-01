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

module.exports = middle;
