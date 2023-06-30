// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  const hashed = {};
  for (let i = 0; i < participant.length; i++) {
    hashed[participant[i]] = (hashed[participant[i]] ?? 0) + 1;
    
    if (i < participant.length - 1) {
      hashed[completion[i]] = (hashed[completion[i]] ?? 0) - 1;
    }
  }
  for (let key in hashed) {
    if (hashed[key] >= 1) return key;
  }
  // return Object.keys(hashed).find()
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
// console.log(
//   solution(
//     ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
//     ['josipa', 'filipa', 'marina', 'nikola']
//   )
// ); //"vinko"
// console.log(
//   solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
// ); //	"mislav"
