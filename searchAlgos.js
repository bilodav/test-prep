arr = [-5, 2, 10, 4, 6];
// Linear search Algo

function linSearch(arr, num) {
  arr = arr.sort((a, b) => a - b);

  return arr.indexOf(num);
}

// Binary Search Normal

function binSearch(arr, target) {
  arr = arr.sort((a, b) => a - b); //should be already sorted this is my laziness
  if (arr.length === 0) {
    return -1;
  }
  let lIndex = 0;
  let rIndex = arr.length - 1;

  while (lIndex <= rIndex) {
    let mid = Math.floor((lIndex + rIndex) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      rIndex = mid - 1;
    } else {
      lIndex = mid + 1;
    }
  }

  return -1;
}

// Recursive Binary Search

function recursiveBinarySearch(arr, target) {
  arr = arr.sort((a, b) => a - b); //should be already sorted this is my laziness

  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, lIndex, rIndex) {
  if (lIndex > rIndex) {
    return -1; //index not found
  }
  let mid = Math.floor((lIndex + rIndex) / 2);
  if (target === arr[mid]) {
    return mid;
  }
  if (target < arr[mid]) {
    return search(arr, target, lIndex, mid - 1);
  } else {
    return search(arr, target, mid + 1, rIndex);
  }
}

console.log(recursiveBinarySearch(arr, 10));
console.log(recursiveBinarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 20));
