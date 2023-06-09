// 2. K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(array, commands) {
  let answerArr = [];

  for (let i = 0; i < commands.length; i++) {
    let cutArr = array.slice(commands[i][0] - 1, commands[i][1]);
    cutArr.sort((a, b) => a - b);
    answerArr[i] = cutArr[commands[i][2] - 1];
  }

  return answerArr;
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
