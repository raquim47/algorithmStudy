// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
  // 경우의 수를 곱해주기 위해 초기값을 1로 설정
  let answer = 1;

  // 종류별로 의상 개수 카운팅. 초기값을 빈 객체로 설정하고 콜백을 각 요소 clothes에 실행
  // 현재 의상 종류가 객체 내에 key값으로 존재한다면 1을 더함
  // 객체 내에 key값이 없으면 value로 2를 할당(안입은경우, 입은경우)
  const clothesObj = clothes.reduce((prev, curr) => {
    if (prev[curr[1]]) prev[curr[1]] += 1;
    else prev[curr[1]] = 2;
    return prev;
  }, {});

  //   const clothesObj = clothes.reduce((prev, curr) => {
  //     prev[curr[1]] = (prev[curr[1]] || 1) + 1;
  //     return prev;
  // }, []);

  // 각 종류의 의상 개수를 곱한다 (경우의 수)
  for (let key in clothesObj) {
    answer *= clothesObj[key];
  }

  // 아무것도 착용하지 않는 경우는 없으므로 -1
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); //	5

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); //	3
