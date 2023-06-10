// 2. K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(array, commands) {
  let answer = [];
  
  commands.forEach(command => {
      let arrayCut = [];
      
      if (command[0] === 0) {
          arrayCut = array.slice(command[0], command[1]);
      } else {
          arrayCut = array.slice(command[0] - 1, command[1]);
      }
      
      let arraySort = arrayCut.sort((a, b) => a - b);
      // let arraySort = [...new Set(arrayCut)].sort((a, b) => a - b);
      // 중복값 없애려고 Set을쓰면 일부 실패로 나옴. 왜일까?
      answer.push(arraySort[command[2] - 1]);
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
