function pivotHelper(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }

  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}

// console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3])); // 3

function quickSork(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSork(arr, left, pivotIndex - 1);
    quickSork(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSork([4, 8, 2, 1, 5, 7, 6, 3]));
