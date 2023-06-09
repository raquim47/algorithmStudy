// 1.문자열내마음대로정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
// * 정렬 알고리즘을 사용할 것

// bubble
function solution(strings, n) {
  for (let i = strings.length - 1; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (strings[j][n] > strings[j + 1][n]) {
        [strings[j], strings[j + 1]] = [strings[j + 1], strings[j]];
        noSwap = false;
      } else if (strings[j][n] === strings[j + 1][n]) {
        // n번째 문자가 같다면, 문자열 전체를 비교하여 스왑
        if (strings[j] > strings[j + 1]) {
          [strings[j], strings[j + 1]] = [strings[j + 1], strings[j]];
        }
      }
    }
    if (noSwap) break;
  }
  return strings;
}
// insert
function solution(strings, n) {
  for (let i = 1; i < strings.length; i++) {
    for (let j = i; j > 0; j--) {
      if (
        strings[j][n] < strings[j - 1][n] ||
        (strings[j][n] === strings[j - 1][n] && strings[j] < strings[j - 1])
      ) {
        [strings[j], strings[j - 1]] = [strings[j - 1], strings[j]];
      } else {
        break;
      }
    }
  }
  return strings;
}
console.log(solution(['sun', 'bed', 'car'], 1)); //["car", "bed", "sun"]
console.log(solution(['abce', 'abcd', 'cdx'], 2)); //	["abcd", "abce", "cdx"]
