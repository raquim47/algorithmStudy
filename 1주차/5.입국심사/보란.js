// 입국 심사
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/43238?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 이진 탐색

// 테스트케이스 3/9만 통과되는 불완전한 코드
function solution(n, times) {
  let minute = 0;
  let t = times.slice(); // 배열 얕은복사
  while (n > 0) {
    for (let i = 0; i < t.length; ++i) {
      t[i] -= 1;
      if (t[i] == 0) {
        t[i] = times[i];
        n--;
      }
    }
    ++minute;
  }
  return minute;
}

console.log(solution(6, [7, 10]));
// 28

// 강의 듣고 코드 공부하기
// https://velog.io/@kwb020312/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC-t80l9jot


// 답도 틀리게 나오고 배열크기 변하는 것 반영불가
// function solution(n, times) {
//   let minute = 0;
//   let t0 = times[0];
//   let t1 = times[1];

//   while(n > 0) {
//     if (t0 === 0) {
//       --n;
//       t0 = 7
//     }
//     if (t1 === 0) {
//       t1 = 10;
//       --n;
//     }
//     --t0;
//     --t1;
//     ++minute;
//   }
//   return minute;
// }
// console.log(solution(6, [7, 10]));
