// 3.가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(numbers) {
  const answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => {
      return (b + a) - (a + b)
    })
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

// function solution(numbers) {
//   var answer = '';
//   let arr = numbers.sort().map(e => String(e));
//   for (let i = 0; i <= arr.length-2; i++) {
//     if (arr[i].length === 1 && arr[i] === arr[i+1][0]) {
//       if (arr[i] > arr[i+1][1]) swap(arr, i, i+1);
//     }
//   }
//   console.log(arr);
//   for (let j = arr.length-1; j >= 0; j--) answer += arr[j];
//   return answer;
// }

// function swap(arr, i, j) {
//   let value = arr[i];
//   arr[i] = arr[j];
//   arr[j] = value;
// }

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
console.log(solution([6, 51, 68, 5, 12, 57, 9])); // 12 5 6 68 9
console.log(solution([6, 5, 63, 12, 9])); // 12 5 63 6 9
console.log(solution([3, 20, 17, 31, 35, 63])) // 