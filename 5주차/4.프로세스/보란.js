// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
  let count = 0;    
  const indexArr = [];
  for(let i = 0; i < priorities.length; i++) {
      indexArr[i] = i;
  } // 인덱스 참조할 같은 크기의 배열 생성
  
  while (priorities) {
      const maxValue = Math.max(...priorities);
      if (priorities[0] < maxValue) {
          const pShifted = priorities.shift();
          priorities.push(pShifted);
          const iShifted = indexArr.shift();
          indexArr.push(iShifted);
      } else {
          ++count;
          if (indexArr[0] === location) {
              return count;
          } else {
              priorities.shift();
              indexArr.shift();  
          }
          
      }
  }
  return count;
}

console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
