const arr = [8, 20, -2, 4, -6];

// Bubble Sort
function bubbleSort(arr) {
  let hasSwapped;
  do {
    //does this atleast once therefore is good use for do while loop
    hasSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] =temp

        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        hasSwapped = true;
      }
    }
  } while (hasSwapped);

  return arr;
}

// console.log(bubbleSort(arr));

// Insertion Sort

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertionSort(arr));
