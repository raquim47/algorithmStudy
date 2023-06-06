// 문제: 퀵 정렬 알고리즘을 구현해보세요. 주어진 배열에 이 알고리즘을 적용하면 배열의 값들이 정렬됩니다. 이 함수는 두 개의 매개변수를 받습니다: 배열과 선택적인 비교자 함수입니다.

// 비교자 함수는 배열의 두 값을 비교하는 콜백함수입니다. 이 함수는 첫 번째 값이 두 번째 값보다 작으면 음수를, 첫 번째 값이 두 번째 값보다 크면 양수를, 두 값이 같으면 0을 반환합니다.

// 비교자 함수가 제공되지 않았을 경우 기본적으로 숫자를 오름차순으로 정렬하는 기본 비교자를 사용해야 합니다. 즉, 첫 번째 인자가 두 번째 인자보다 작으면 음수를, 두 번째 인자가 첫 번째 인자보다 크면 양수를, 그리고 두 인자가 같으면 0을 반환하는 함수를 기본 비교자로 사용해야 합니다.

function pivotHelper(arr, comparator, start=0, end=arr.length -1){
}

function quickSort(arr, comparator){
  
}

// 예시 1
console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]

// 예시 2
const moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}
console.log(quickSort(moarKittyData, oldestToYoungest)); // [4, 7, 9, 10, 12, 20]
