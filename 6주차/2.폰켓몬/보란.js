// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const numSet = [...new Set(nums)];
  
  if (numSet.length > nums.length / 2)
      return nums.length / 2;
  else return numSet.length;
}

console.log(solution([3, 1, 2, 3])); //	2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
