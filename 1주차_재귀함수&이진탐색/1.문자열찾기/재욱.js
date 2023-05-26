// 문자열 찾기
// 문제 출처 : https://www.udemy.com/course/best-javascript-data-structures/

// 지시사항 : 인자로 받는 객체안에 들어있는 모든 문자열을 배열에 담아 반환하는 함수 solution을 완성하세요
// * 재귀함수 활용할 것!

// function solution(myObj) {
//   let answer = [];
//   let objList = Object.values(myObj);

//   if (objList.length === 2) {
//     answer.push(objList[0]);
//     return answer.concat(solution(objList[1]));
//   }
//   else if (objList.length === 1) {
//     if (typeof(objList[0]) === "object") return solution(objList[0]);
//     else if (typeof(objList[0]) === "string") {
//       return objList[0];
//     }
//   }
// }

function solution(myObj) {
  let answer = [];
  for (let key in myObj) {
    if (typeof(myObj[key]) === "string") answer.push(myObj[key]);
    else if (typeof(myObj[key]) === "object") answer = answer.concat(solution(myObj[key]));
  }
  return answer;
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