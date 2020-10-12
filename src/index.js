
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  let result = [];
  let parity = false;
  let i = 0;

  matrix.forEach(array => {
    result = arrayHandler(array, parity, result);
    i++;
    i % 2 ? parity = true : parity = false;
  });

  return result;
}

function arrayHandler(arr, parity, result) {
  if (!parity) {
    arr.forEach(num => {
      result.push(num);
    });
  } else {
    arr.reverse();
    arr.forEach(num => {
      result.push(num);
    });
  };

  return result;
}