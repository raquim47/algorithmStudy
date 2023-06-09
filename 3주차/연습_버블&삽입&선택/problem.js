// 문제 : 함수 bubbleSort, selectionSort, insertionSort를 완성하세요. 주어진 배열에 대해, 각각의 함수는 2개의 매개변수를 받고 아래 조건에 따라 버블정렬, 삽입정렬, 선택정렬을 사용하여 배열의 값을 정렬합니다. 

// 비교자 함수(comparator)는 두 개의 값이 배열에서 어떻게 비교되는지 정의하는 콜백 함수입니다. 이 함수는 첫 번째 값이 두 번째 값보다 작을 경우 음수를 반환하고, 첫 번째 값이 두 번째 값보다 큰 경우 양수를 반환하며, 두 값이 같을 경우 0을 반환합니다.

// 비교자 함수가 제공되지 않았을 경우 기본적으로 숫자를 오름차순으로 정렬하는 기본 비교자를 사용해야 합니다. 즉, 첫 번째 인자가 두 번째 인자보다 작으면 음수를, 두 번째 인자가 첫 번째 인자보다 크면 양수를, 그리고 두 인자가 같으면 0을 반환하는 함수를 기본 비교자로 사용해야 합니다.

function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b; // 기본 비교자: 오름차순 정렬
  }
  
}

function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b; // 기본 비교자: 오름차순 정렬
  }

  return arr;
}

function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b; // 기본 비교자: 오름차순 정렬
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
