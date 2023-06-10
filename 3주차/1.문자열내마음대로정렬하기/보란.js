// 1.문자열내마음대로정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
// * 정렬 알고리즘을 사용할 것

function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        if (a[n] === b[n]) {
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        }
        else if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
    });
    return answer;
}

// sort메소드의 동작 방식
// 2개의 인자를 뺄셈하여
// 뺀 값이 양수면(앞의 것이 더 크면) 자리바꿈
// 음수면(뒤의 것이 더 크면) 바꾸지않음.

console.log(solution(['sun', 'bed', 'car'], 1)); //["car", "bed", "sun"]
console.log(solution(['abce', 'abcd', 'cdx'], 2)); //	["abcd", "abce", "cdx"]