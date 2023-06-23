// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== stack[stack.length - 1]) {
      stack.push(arr[i]);
    }
  }

  return stack;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]