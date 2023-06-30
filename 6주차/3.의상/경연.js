// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
    let d = {};
    for (let i = 0; i < clothes.length; i++){
        if(d[clothes[i][1]]){
            d[clothes[i][1]]++;
        }else{
            d[clothes[i][1]] = 1;
        }
    }
    let answer = 1;
    for (let i in d){
        answer *= (d[i]+1)
    }
    return answer -1;
}
  
  console.log(
    solution([
      ['yellow_hat', 'headgear'],
      ['blue_sunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ])
  ); //	5
  console.log(
    solution([
      ['crow_mask', 'face'],
      ['blue_sunglasses', 'face'],
      ['smoky_makeup', 'face'],
    ])
  ); //	3
  