function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
      comparator = (a, b) => a - b; // 기본 비교자: 오름차순 정렬
  }

  for (let i = arr.length - 1; i > 0; i--) {
      let noSwap = true;
      for (let j = 0; j < i; j++) {
          if (comparator(arr[j], arr[j + 1]) > 0) { 
              // comparator 함수를 사용하여 두 요소를 비교
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
              noSwap = false;
          }
      }
      if (noSwap) break; 
  }
  return arr;
}

function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b; // 기본 비교자: 오름차순 정렬
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[lowest]) < 0) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  
  return arr;
}

function insertionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b; // 기본 비교자: 오름차순 정렬
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[lowest]) < 0) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  
  return arr;
}

// 입력값 예시 1
console.log(bubbleSort([7,6,5,4,3,2,1]));// [1,2,3,4,5,6,7]
console.log(selectionSort([7,6,5,4,3,2,1]));// [1,2,3,4,5,6,7]
console.log(insertionSort([7,6,5,4,3,2,1]));// [1,2,3,4,5,6,7]
// 입력값 예시 2
var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
// console.log(bubbleSort(moarKittyData, oldestToYoungest)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
// console.log(selectionSort(moarKittyData, oldestToYoungest)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
// console.log(insertionSort(moarKittyData, oldestToYoungest)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
