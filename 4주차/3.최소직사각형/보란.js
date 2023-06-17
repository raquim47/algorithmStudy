// 3. 최소 직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// * 정렬 알고리즘을 사용할 것

function solution(sizes) {
  const answer = 0;
  let before = [];
  let after = [];

  for(let i = 0; i < sizes.length; ++i) {
    sizes[i].sort((a, b) => a - b);
    before.push(sizes[i][0]); // 더 좋은 방법이 있을것같은데...
    after.push(sizes[i][1]);
  }

  const beforeMax = Math.max(...before);
  const afterMax = Math.max(...after);
  return beforeMax * afterMax;
}