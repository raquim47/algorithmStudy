// 가까운 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript
// * 이진 탐색으로 풀 것

// 채점 결과 55.6 / 100.0

function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === n) return mid;
        else if (arr[mid] < n) left = mid + 1;
        else right = mid - 1;
    }
    return -1;   // 배열에 찾는 요소가 없는 경우
}

function solution(array, n) {
    array.push(n);
    const set = new Set(array);     // 정렬하기 위해 먼저 중복값 제거. 객체로 변환됨.
    const newArray = [...set];      // 객체를 배열로 다시 변환
    newArray.sort((a, b) => a - b); // 오름차순 정렬
    
    const nIndex = binarySearch(newArray, n);
    
    function gap(num) {
        console.log("gap num: " + num)
        if (num === undefined) return 1000;
        else return Math.abs(n - num);
    }

    const nNextGap = gap(newArray[nIndex + 1]);
    const nPrevGap = gap(newArray[nIndex - 1]);
    
    if (nPrevGap < nNextGap) return newArray[nIndex - 1];
    else if (nNextGap < nPrevGap) return newArray[nIndex + 1];
    else if (nNextGap = nPrevGap) return newArray[nIndex - 1];
    else return "ERROR";
}

console.log(solution([96, 96, 5, 8, 56, 51, 33], 50)); // 51
console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12
