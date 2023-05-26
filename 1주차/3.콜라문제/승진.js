// 콜라 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 재귀함수 활용할 것!
// O(n)

function solution(a, b, n) {
  if(a > n) return 0; 
  let newCoke = Math.floor(n / a) * b;
  let remaining = (n % a) + newCoke;
  return newCoke + solution(a, b, remaining)
}


console.log(solution(2, 1, 20)); //19
// console.log(solution(3, 1, 20)); //	9


// 풀이
// 문제 : 빈 병 a개가 있으면 새로운 콜라 b병을 얻을 수 있을 때, 처음 빈 병의 개수 n개를 가지고 최대 몇 병의 새로운 콜라를 얻을 수 있는지를 계산
// 1. 재귀 종료 조건 설정 : a(필요한 병) > n(가진 병)
// 2. 새로 얻은 콜라 수 계산
// 3. 남은 빈 병의 수 계산 (갖다주고 남은 병 + 새로운 콜라 병)
// 4. solution을 재귀 호출, newCoke를 합하여 반환

function solution(a, b, n) {
  //재귀 종료 조건: a(필요한 병) > n(가진 병)
  if(a > n) return 0; 
  // 새로 얻은 콜라
  let newCoke = Math.floor(n / a) * b;
  // 남은 콜라
  let remaining = (n % a) + newCoke;
    
  return newCoke + solution(a, b, remaining)
}



// 한 줄
// function solution(a, b, n) {
//   return a > n ? 0 : Math.floor(n / a) * b + solution(a,b, (n % a) + Math.floor(n / a) * b);
// }

// while문
// function solution(a, b, n) {
//   let answer = 0;
    
//   while (n >= a) {
//     let rest = n % a;
//     answer += Math.floor(n / a) * b;
//     n = Math.floor(n / a) * b + rest;
//   }

//   return answer;
// }

