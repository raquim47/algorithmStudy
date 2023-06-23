// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  let answer = [0];
  let rest = [];
  for (let i = 0; i < progresses.length; i++) {
    rest.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let currVal = rest[0];
  console.log(rest);
  for (let i = 0, j = 0; i < rest.length; i++) {
    if (currVal >= rest[i]) answer[j] += 1; 
    else {
      currVal = rest[i];
      answer[++j] = 1;
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //	[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //	[1, 3, 2]