// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
  const hash = {};

  for (const [_, type] of clothes) {
    if (!hash[type]) {
      hash[type] = 1;
    } else {
      hash[type] += 1;
    }
  }

  let result = 1;
  for (const key in hash) {
    result *= (hash[key] + 1);
  }

  return result - 1;
}
// (모자1, 모자2, 모자 안쓰기)*(상의1, 상의2, 상의 안입기)=9인데 (모자 안쓰기,상의 안입기) 1개 빼면 9-1=8
console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['green_turban', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
  ])
); //	5
// console.log(
//   solution([
//     ['crow_mask', 'face'],
//     ['blue_sunglasses', 'face'],
//     ['smoky_makeup', 'face'],
//   ])
// ); //	3
