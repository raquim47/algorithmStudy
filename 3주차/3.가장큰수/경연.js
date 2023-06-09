// 3.가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
// * 정렬 알고리즘을 사용할 것



function solution(numbers) {
    let strArr = numbers.map(String);
    strArr.sort((a, b) => b + a -( a + b));
    
    let result = strArr.join("");
    
    return result[0] === "0" ? "0" : result;
}

// function solution(numbers) {
//     let strArr = numbers.map(String);
//     strArr.sort((a, b) => {
//         if(a + b > b + a){
//             return -1;
//         }else if (a + b < b + a){
//             return 1;
//         }else{
//             return 0;
//         }
//     });
    
//     let result = strArr.join("");
    
//     return result[0] === "0" ? "0" : result;
// }
