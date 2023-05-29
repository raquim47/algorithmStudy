function solution(n, times) {
  let left = 0;
  times.sort((a,b) => a-b);
  let right = n * times[times.length-1];  // 입국심사에 걸리는 최대 시간(모든 사람이 다 시간이 가장 많이 걸리는 직원에게 심사받는 경우)
  let middle = parseInt((left + right) / 2);
  let p = 0;

  while (left <= right) {
    p = 0;
    for (t of times) {
      p += parseInt(middle / t);  //times = [7, 10] -> int(middle/7) + int(middle/10) => 입국심사 총 시간
    }
    if (p > n) {
      right = middle - 1;
      middle = parseInt((left + right) / 2);
    }
    else if (p < n) {
      left = middle + 1;
      middle = parseInt((left + right) / 2);
    }
    else break;
  }
  
  return middle;
}

console.log(solution(6, [7, 10])); // 28