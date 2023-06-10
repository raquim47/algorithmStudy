// 4.H-Index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(citations) {
  citations.sort((a,b)=>b-a);
  for(let i = 0; i < citations.length; i++){
      if(i >= citations[i]) return i;
  }
  return citations.length;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
