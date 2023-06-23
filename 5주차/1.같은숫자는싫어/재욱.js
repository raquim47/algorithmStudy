// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr) {
  let answer = [arr[0]];
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === num) {
      num = arr[i];
      continue;
    }
    answer.push(arr[i]);
    num = arr[i]
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
console.log(solution([2, 2, 2, 6, 1, 1, 4, 3, 3, 8, 9, 9])) // [2, 6, 1, 4, 3, 8, 9]