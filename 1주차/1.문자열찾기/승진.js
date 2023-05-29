// 문자열 찾기
// 문제 출처 : https://www.udemy.com/course/best-javascript-data-structures/

// 지시사항 : 인자로 받는 객체안에 들어있는 모든 문자열을 배열에 담아 반환하는 함수 solution을 완성하세요
// * 재귀함수 활용할 것!

function solution(obj) {
  let result = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(solution(obj[key]));
    }
  }
  return result;
}
// 시간 복잡도 On, 프로퍼티 개수의 비례
const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: ['bar'],
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(solution(obj)); // ["foo", "bar", "baz"])

// 풀이
// 문제 : 객체를 순회하며 모든 문자열 값을 배열로 반환하는 문제
// 1. 빈 배열 result 생성
// 2. 주어진 객체의 모든 키에 대해 반복
// 3. value의 타입이 string이면 result에 push, object면 solution을 호출하고 그 반환값을 result와 concat
function solution(obj) {
  let result = [];
  for (const key in obj) {
    // 배열열 때도 가능 for in문에서 obj가 배열일 때 key는 인덱스
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(solution(obj[key]));
    }
  }
  return result;
}
