function solution(n, times) {
  let left = 0;
  times.sort((a,b) => a-b);
  let right = n * times[times.length-1];
  let middle = parseInt((left + right) / 2);
  let p = 0;

  while (left <= right) {
    p = 0;
    for (t of times) {
      p += parseInt(middle / t);
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