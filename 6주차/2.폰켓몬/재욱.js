// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  let answer = [];
  let max = nums.length / 2;
      
  for(let i = 0; i < nums.length; i++) {
    if(answer.length < max) {
      if(!answer.includes(nums[i])) {
          answer.push(nums[i]);
      }
    }
  }
  
  return answer.length; 
}


console.log(solution([3, 1, 2, 3])); //	2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2