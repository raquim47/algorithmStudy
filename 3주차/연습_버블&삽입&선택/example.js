function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]; // 구조 분해 할당을 사용하여 swap
    }
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));
console.log(selectionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([2, 1, 9, 76, 4]));