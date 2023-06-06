// 입국 심사
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/43238?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 이진 탐색
//  O(M *log N)

// 6, [7, 10]
function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);

  let minTime = sortedTimes[0]; 
  let maxTime = sortedTimes[sortedTimes.length - 1] * n;
  while (minTime <= maxTime) {
    let midTime = Math.floor((minTime + maxTime) / 2);
    let passedCount = 0;

    for (const time of sortedTimes) {
      passedCount += Math.floor(midTime / time);
    }
    
    console.log(minTime, maxTime, midTime, passedCount)
    if (passedCount >= n) {
      maxTime = midTime - 1;
    } else if(passedCount < n){
      minTime = midTime + 1;
    } 
  }
  return minTime;
}

console.log(solution(6, [7, 10])); // 28


// 풀이
// 문제 : 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 주어지고, 대기자 n명이 모두 심사를 받는데 필요한 최소 시간을 찾는 문제입니다.

// 1. times 배열을 오름차순으로 정렬
// 2. 심사를 받는 데 필요한 최소 시간(minTime)과 최대 시간(maxTime)을 구하기, minTime:제일 빠른 심사관의 시간, maxTime은 가장 느린 심사관이 n명을 심사할 때 걸리는 시간
// 3. minTime <= maxTime일때 반복
// 3-1. 중간시간을 구한다
// 3-2. 중간시간동안 각 심사관이 심사할 수 있는 사람을 합산한다. passedCount
// 3-3. passedCount >= n이면 maxTime을 중간값 - 1로 갱신, 아니면 minTime을 중간값 + 1로 갱신
// 4. minTime을 반환
function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);

  let minTime = sortedTimes[0]; // 7
  let maxTime = sortedTimes[sortedTimes.length - 1] * n; // 60
  while (minTime <= maxTime) {
    // 7 60
    // 7 32
    // 20 32
    // 27 32
    // 27 28
    // 28 28 
    let midTime = Math.floor((minTime + maxTime) / 2); // 33 19 26 29 27 28
    let passedCount = 0;

    for (const time of sortedTimes) {
      passedCount += Math.floor(midTime / time); 
      // 33 / 7 + 33 / 10 -> 7
      // 19 / 7 + 19 / 10 -> 3
      // 26 / 7 + 26 / 10 -> 5
      // 29 / 7 + 29 / 10 -> 6
      // 27 / 7 + 27 / 10 -> 5
      // 28 / 7 + 28 / 10 -> 6
    }

    if (passedCount >= n) {
      maxTime = midTime - 1; // maxTime = 32 = 28
    } else {
      minTime = midTime + 1; // minTime = 20 = 27 = 28
    }

    // if(minTime === maxTime) return minTime;
  }

  return minTime;
}
