// 2. K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(array, commands) {
  let answer = [];
  commands.forEach(arr => {
    answer.push(array.slice(arr[0]-1, arr[1]).sort((a,b) => a-b)[arr[2]-1]);
  })
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); //[5, 6, 3]
