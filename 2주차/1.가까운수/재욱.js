/* 
1. 오름차순 정렬 후 이진탐색
2. 찾는 수(n)가 배열에 없다면, 찾는 수는 이진탐색이 완료된 후의 array[middle]보다 무조건 큼
    ->  n이 array[middle]보다 작다면 array[middle-1] < n < array[middle]
        -> array[middle] < n < array[middle+1] 이므로 
          array[middle+1] - n 과 n - array[middle] 의 크기를 비교해서 어느 쪽이 n과 더 가까운 수인지 판별
3. 하지만 n이 배열의 가장 작은 수 보다도 작거나, 가장 큰 수 보다도 크다면 그냥 바로 배열의 0번째 혹은 마지막 요소를 반환하면 됨.
    ->  이진 탐색조차도 할 필요가 없으니 정렬 후의 배열에서 0번째 혹은 마지막 요소 바로 반환.
        =>  이진 탐색 전에 n < array[0] 과 n > array[array.length-1] 을 판별하고 둘 모두 아닌 경우에 이진 탐색 후 2 과정 진행
*/
function solution(array, n) {
  array.sort((a, b) => a-b);
  if (n < array[0]) return array[0];
  else if (n > array[array.length-1]) return array[array.length-1];
  else {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (array[middle] !== n && start <= end) {
      if (array[middle] < n) start = middle + 1; 
      else end = middle - 1;
      middle = Math.floor((start + end) / 2);
    }

    if (array[middle] === n) return array[middle];
    else {
      if ((n - array[middle]) === (array[middle+1] - n)) return array[middle];  
      else return (n - array[middle] > array[middle+1] - n) ? array[middle+1] : array[middle];  
    }
  }
};

console.log(solution([3, 10, 28], 20)); //28
console.log(solution([10, 11, 12], 13)); //12
console.log(solution([3, 6, 9, 11, 15, 16, 19, 23, 25], 7)); //6
console.log(solution([3, 10, 18, 20, 25, 26, 29], 28)); //29
console.log(solution([1, 6, 7, 9, 14, 17, 21, 26, 28, 34, 27], 35)); //34