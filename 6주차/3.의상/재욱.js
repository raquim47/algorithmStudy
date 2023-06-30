// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
  const clothesMap = {};
  let answer = 1;

  clothes.forEach(row => {
    const [name, kinds] = row;
    if(clothesMap.hasOwnProperty(kinds)) {
      clothesMap[kinds]++;
    }
    else {
      clothesMap[kinds] = 1;
    }
  })

  for(const key in clothesMap) {
    answer *= (clothesMap[key] + 1);
  }

  return answer - 1;
}


console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); //	5

console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
); //	3
