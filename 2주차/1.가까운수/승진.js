// 가까운 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript
// * 이진 탐색으로 풀 것

// 문제 : 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  array.sort((a, b) => a - b); // 오름차순 정렬

  let left = 0;
  let right = array.length - 1;
  while(left < right){
    let mid = Math.floor((left + right) / 2);
    // mid는 배열의 인덱스, 배열의 요소중에 n과 가까운 값을 찾는다.
    if(array[mid] < n){
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  // array[left]는 n보다 크거나 같은 값을 가리킨다
  
  // left === 0인 경우 array에서 n가 가장 가까운 값은 array[0], 즉 array[left]가 된다.
  if(array[left] === n || left === 0){
    return array[left];
  }

  // left, left - 1번째 요소 중에 n과 가까운 수 찾기
  if(array[left] - n < n - array[left - 1]){
    return array[left]
  } else { // n과의 거리가 같을 경우도 포함
    return array[left - 1];
  }
}

console.log(solution( [1, 3, 5, 7] , 6)); //5
// console.log(solution([10, 15, 18], 16)); //12
// console.log(solution([10, 11, 12], 13)); //12
