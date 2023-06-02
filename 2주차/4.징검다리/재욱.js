function solution(distance, rocks, n) {
  var answer = 0;
  rocks.sort((a, b) => a-b);
  let start = 0;
  let end = distance;
  let middle = Math.floor((start + end) / 2);
  
  while(start <= end) {
    let count = 0;
    let current = 0;

    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - current < middle) count++;
      else current = rocks[i];
    }
    
    if (count > n) end = middle - 1;
    else if (count < n) start = middle + 1;
  }

  return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2)); //4