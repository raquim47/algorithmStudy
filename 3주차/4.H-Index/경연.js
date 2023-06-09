// 4.H-Index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
// * 정렬 알고리즘을 사용할 것


function solution(citations) {
    citations.sort((a,b)=>b-a);
    let i = 0;
    while(i+1 <= citations[i]){
        i++;
    }
    return i;
}