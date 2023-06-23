// https://school.programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

function solution(bridge_length, weight, truck_weights) {
  const queue = new Array(bridge_length).fill(0);
  let sec = 0;
  let onBridgeWeight = 0;

  while (truck_weights.length > 0) {
    onBridgeWeight -= queue.shift();

    if (onBridgeWeight + truck_weights[0] <= weight) {
      const shifted = truck_weights.shift();
      onBridgeWeight += shifted;
      queue.push(shifted);
    } else {
      queue.push(0);
    }

    sec++;
  }

  return sec + bridge_length;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
