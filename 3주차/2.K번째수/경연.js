// 2. K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// * 정렬 알고리즘을 사용할 것


function solution(array, commands) {
    let answer = [];
    for (i=0; i< commands.length; i++){
        let temp = array.slice(commands[i][0]-1, commands[i][1]);
        temp.sort((a, b)=> a - b);
        answer.push(temp[commands[i][2]-1]);
    }
    return answer;
}