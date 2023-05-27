// 순위 검색
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/72412?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 이진 탐색

function solution(info, query) {
  var answer = [];
  var quarr = [];

  for(let i = 0; i < query.length; i++){
      quarr.push(query[i].split(" and "));
  }

  for(let i = 0; i < quarr.length; i++){
      let count = 0;
      for(let j = 0; j < info.length; j++){
          let check = true;
          let temp = info[j].split(" ");
          let last_quarr = quarr[i][3].split(" ");
          for(let k = 0; k < 4; k++){
              if(k === 3){
                  if(!(temp[k] === last_quarr[0] || last_quarr[0] === '-')) {
                      check = false;
                      break;
                  }
                  if(!(Number(temp[4]) >= Number(last_quarr[1]))) {
                      check = false;
                      break;
                  }
              }
              else {
                  if(!(temp[k] === quarr[i][k] || quarr[i][k] === '-')) {
                      check = false;
                      break;
                  }
              }
          }
          if(check) count++;
      }
      answer.push(count);
  }
  return answer;
}


console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
); // [1,1,1,1,2,4]
