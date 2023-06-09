// 1.문자열내마음대로정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    };
  });
  return answer;
}

// function solution(strings, n) {
//   let answer = [...strings];
//   let currentVal;
  
//   for (let i = 1; i < answer.length; i++) {
//     currentVal = answer[i];
//     for (var j = i-1; j >= 0 && answer[j][n] > currentVal[n]; j--) {
//       answer[j+1] = answer[j]
//     }
//     answer[j+1] = currentVal;  // 위 for문에서는 카운트 변수를 var로 했기때문에 for문을 빠져나와서도 변수 사용 가능(var는 함수 레벨 스코프니까)
//     if (j >= 0) {  // 위 for문에서 answer[j][n] > currentVal[n] 에서 걸리지 않고 다 반복되어 for문을 빠져나오는 경우는 j는 -1이 되므로 그 후 answer[j][n]하면 에러나는듯.
//       if (currentVal[n] === answer[j][n]) {
//         let sList = [];
//         sList.push(currentVal);
//         sList.push(answer[j]);
//         sList.sort();
//         answer[j] = sList[0];
//         answer[j+1] = sList[1];
//       }
//     }
//   }
//   return answer;
// }

console.log(solution(['sun', 'bed', 'car'], 1)); //["car", "bed", "sun"]
console.log(solution(['abce', 'abcd', 'cdx'], 2)); //	["abcd", "abce", "cdx"]
// console.log(solution(['aab', 'arce', 'abcd', 'cdx', 'ebs'], 1));  // ["aab", "abcd", "ebs", "cdx", "arce"]
// console.log(solution(['aab', 'abce', 'abcd', 'cdx', 'ebs', 'egr', 'bbq', 'qbe'], 1));  // ["aab", "abcd", "abce", "bbq", "ebs", "qbe", "cdx", "egr"]