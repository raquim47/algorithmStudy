// 4.H-Index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
// * 정렬 알고리즘을 사용할 것

/*
발표한 논문 : citations.length
citations의 요소 중 크기가 h 이상인 요소의 개수가 h 이상임을 만족하는 h의 최댓값 구하기
*/

function solution(citations) {
  citations = citations.sort((a,b) => b-a);
  var i = 0;
  while(i + 1 <= citations[i]){
      i++;
  }
  return i;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
