// 1.문자열내마음대로정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
// * 정렬 알고리즘을 사용할 것



function solution(strings, n) {
    strings.sort((a,b) => {
        if(a[n] === b[n]) {
            return a.localeCompare(b);
        }
        return a[n].localeCompare(b[n]);
    })
    return strings;
}