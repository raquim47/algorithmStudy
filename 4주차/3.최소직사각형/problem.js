// 3. 최소 직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// * 정렬 알고리즘을 사용할 것

function solution(sizes) {
  let max_width = 0;
  let max_heigth = 0;
  sizes.forEach(arr => {
    if (arr[0] < arr[1]) swap(arr, 0, 1);
    if (arr[0] > max_width) max_width = arr[0];
    if (arr[1] > max_heigth) max_heigth = arr[1];
  });
  return max_width*max_heigth;
}

function swap(arr, i, j) {
    let value = arr[i];
    arr[i] = arr[j];
    arr[j] = value;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); //	120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); // 133