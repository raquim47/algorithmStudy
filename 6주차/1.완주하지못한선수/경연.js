// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
    let d = {};
    for(let i of participant){
        if(d[i]){
            d[i]++;
        }
        else{
            d[i] = 1;
        }
    }
    for(let i of completion){
        if(d[i] === 1){
            delete d[i];
        }
        else{
            d[i]--;
        }
    }
    return Object.keys(d)[0];
}



console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
); //"vinko"
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
); //	"mislav"