// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  const days = [];
  // [7, 3, 9]

  for (let i = 0; i < progresses.length; i++) {
    const day = (100 - progresses[i]) / speeds[i];
    days.push(Math.ceil(day));
  }

  const result = [];
  let before = days[0];
  let temp = 1;
  for (let i = 1; i < days.length; i++) {
    if (before >= days[i]) {
      temp++;
    } else {
      result.push(temp);
      temp = 1;
      before = days[i]
    }
  }

  result.push(temp);
  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //	[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //	[1, 3, 2]
