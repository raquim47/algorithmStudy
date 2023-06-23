
// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript


function solution(progresses, speeds){
    let answer = [];
    let count = 0;
    let days = 0;

    while(progresses.length >0){
        if (progresses[0] + days*speeds[0] >= 100){
            progresses.shift();
            speeds.shift();
            count++;
        }else{
            if (count>0){
                answer.push(count);
                count = 0;
            }
            days++;
        }
    }
    answer.push(count);
    return answer;

}

// function solution(arr){
//     return arr.filter((val, idx) => val != arr[idx-1]);
// }



console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));