// 4.H-Index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(citations) {
  let answer = 0;
  for (let i = 1; i <= citations.length; i++) {
    let count = 0;
    for (let j = 0; j < citations.length; j++) {
      if(i <= citations[j]){
        count++;
      }

      if(i <= count){
        answer = i;
        break;
      }
    }
  }
  return answer;
}

// function solution(citations) {
//   // [3, 0, 6, 1, 5]
//   let answer = 0;
//   // n편 논문이 n회 이상 인용, 최대값
//   citations.sort((a, b) => a - b);
//   //[ 0, 1, 3, 5, 6 ]
//   for (let i = 1; i <= citations.length; i++) {
//     let count = 0;
//     for (let j = 0; j < citations.length; j++) {
//       if(i <= citations[j]){
//         count++;
//       }

//       if(i <= count){

//       }
//     }

//     if(i <= count && i > answer){
//       answer = i;
//     }
//   }
//   return answer;
// }

// function solution(citations) {
//   citations.sort((a, b) => b - a);
//   // [ 6, 5, 3, 1, 0 ]
//   let i = 0;
//   // 1
//   while(i + 1 <= citations[i]) {
//       i++;
//   }
//   return i;
// }


console.log(solution([3, 0, 6, 1, 5])); // 3
// console.log(solution([3, 2, 2, 5, 0, 6, 1, 5, 4, 5])); // 3
// console.log(solution([5, 5, 5, 5])); // 4
