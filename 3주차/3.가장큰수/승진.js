// 3.가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(numbers) {
  // [3, 30, 34, 5, 9]
  let answer = numbers
    .map((v) => v + '')
    .sort((a, b) => {
      console.log(
        `a: ${a}, b: ${b}, b + a: ${b + a}, a + b: ${
          a + b
        }, (b + a) - (a + b): ${b + a - (a + b)}`
      );
      return b + a - (a + b);
    })
    .join('');

  return answer[0] === '0' ? '0' : answer;
}
// console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
