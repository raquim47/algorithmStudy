// 징검다리
// https://school.programmers.co.kr/learn/courses/30/lessons/43236?language=javascript
// [2, 14, 11, 21, 17]
function solution(distance, rocks, n) {
  rocks.push(distance);
  rocks.sort((a, b) => a - b);
  let left = 0;
  let right = distance;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let flag = 0;
    let removeCount = 0;

    for (let i = 0; i < rocks.length; i++) {
      const gap = rocks[i] - flag;
      if (gap < mid) {
        removeCount++;
      } else {;
        flag = rocks[i];
      }
    }

    if (removeCount > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    console.log(left, right, mid, removeCount)
  }
  
  return right;
}

// console.log(solution(25, [2, 14, 11, 21, 17], 2)); //4
console.log(solution(24, [2, 14, 11, 21, 17], 2)); //3
