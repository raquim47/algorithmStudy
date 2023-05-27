// 콜라 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 재귀함수 활용할 것!

function solution(a, b, n) {
  if(n < a){
    return 0;
  }
  
  return b + solution(a, b, n - a + b);
}

// function solution(a, b, n) {
//   var answer = 0;
//   while (n >= a){
//       let exchange = Math.floor(n / a);
//       answer += exchange * b;
//       n=exchange * b + n % a;
      
//   }
//   return answer;
// }

console.log(solution(2, 1, 20)); //19
// console.log(solution(3, 1, 20)); //	9
