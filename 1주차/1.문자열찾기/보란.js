// 문자열 찾기 collectSt
// 문제 출처 : https://www.udemy.com/course/best-javascript-data-structures/

// 지시사항 : 인자로 받는 객체안에 들어있는 모든 문자열을 배열에 담아 반환하는 함수 solution을 완성하세요
// * 재귀함수 활용할 것!

function solution(obj) {
  const strArr = [];

  function collectStr(o) {
    for(let key in o) {
      if (typeof o[key] === 'string') strArr.push(o[key]);
      else if (typeof o[key] === 'object') return collectStr(o[key]);
    }

    // const keys = Object.keys(o);
    // for(let i = 0; i < keys.length; i++) {
    //   if (typeof keys[i] === 'string') strArr.push(keys[i]);
    //   else if (typeof keys[i] === 'object') return collectStr(keys[i]);
    // } // 출력 ['stuff', 'data']
  }

  collectStr(obj);
  return strArr;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
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