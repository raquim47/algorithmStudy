// 콜라 문제
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 지시사항 : 프로그래머스 링크 참고
// * 재귀함수 활용할 것!

// a개 당 b개를 돌려줌, 현재가진빈병갯수n
let emptySum = 0;

function solution(a, b, n) {
  if (n < a) return emptySum;
  else {
      let empty = Math.floor(n / a) * b;
      emptySum += empty;
      return solution(a, b, empty + n % a);
  }
}

console.log(solution(2, 1, 20));

emptySum = 0;
console.log(solution(3, 1, 20));

/*
a와 b는 변하지 않고 n만 계속 변함
solution(2, 1, 20)의 경우
 n       empty           emptySum
빈병 20  받음 10          10
빈병 10  받음 5           15
빈병 5   받음 2 +나머지1  17
빈병 3   받음 1 +나머지1  18
빈병 2   받음 1          19
*/
