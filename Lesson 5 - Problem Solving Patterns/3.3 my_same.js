// My Solution

function same(arr1, arr2) {
  const squareArr = arr1.map((i) => i ** 2).reduce((acc, arr) => acc + arr);
  const compareArr = arr2.reduce((acc, arr) => acc + arr);

  return squareArr === compareArr ? true : false;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
