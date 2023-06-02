// 입국 심사
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/43238?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 이진 탐색

function solution(n, times) {
  times.sort((a, b) => a - b); // 오름차순 정렬
  let left = 0;
  let right = times[times.length - 1] * n; // 60
  let middle = Math.floor((left + right) / 2); // 30

  while (left <= right) {
    const enterPerson = times.reduce((acc, current) => acc + Math.floor(middle / current), 0); //(6, [7, 10])); // 28. 0+4, 4+
    if (enterPerson >= n) right = middle - 1;
    else if (enterPerson < n) left = middle + 1; //31
    middle = Math.floor((left + right) / 2); //45
  }
  return left;
}

// function binarySearch(n, arr) {
//   console.log("binarySearch arr: "+arr);
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (arr[mid] === n) return mid;
//       else if (arr[mid] < n) left = mid + 1;
//       else right = mid - 1;
//   }
//   return -1;   // 배열에 찾는 요소가 없는 경우
// }

// function solution(n, times) {
//   let minute = 0;
//   let t = times.slice(); // 배열 얕은복사
//   while (n > 0) {
//     for (let i = 0; i < t.length; ++i) {
//       t[i] -= 1;
//       if (t[i] == 0) {
//         t[i] = times[i];
//         --n;
//       }
//     }
//     ++minute;
//   }
//   return minute;
// }

console.log(solution(6, [7, 10])); // 28