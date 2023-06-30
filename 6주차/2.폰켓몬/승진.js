// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const maxToTake = nums.length / 2;

  const hash = {};
  let speciesCount = 0;
  
  for (const val of nums) {
    if (!hash[val]) {
      hash[val] = 1;
      speciesCount++;
    }
  }
  return speciesCount > maxToTake ? maxToTake : speciesCount;
}

function solution(nums) {
  const maxToTake = nums.length / 2;
  const speciesCount = new Set(nums).size;
  return Math.min(maxToTake, speciesCount);
}
// console.log(solution([3, 1, 2, 3])); //	2
// console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
