// Linear Search Pseudocode

function linearSearch(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    } else {
      if (arr.includes(num) === false) return -1;
    }
  }
}

console.log(linearSearch(12, [5, 8, 1, 100, 12, 3, 12]));
