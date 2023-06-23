https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr){
    let answer = [];
    let prev = null;
    for ( i=0; i<arr.length; i++){
        if ( arr[i] === prev){
            
        }else{
            answer.push(arr[i])
            prev = arr[i]
        }
    }
    return answer;
    
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]