// 순위 검색
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/72412?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 이진 탐색

const checkPass = (infoObject, query, score) => {
  let qualifier = 0;
  const keys = Object.keys(infoObject);
  // keys
  // ['javabackendjuniorpizza',
  //   'pythonfrontendseniorchicken',
  //   'cppbackendseniorpizza',
  //   'javabackendjuniorchicken',
  //   'pythonbackendseniorchicken']
  keys
    .filter(key => infoObject[key] > score)
    .filter(key => query
      .every(q => function (q) {
        key.includes(q);
        ++qualifier;
      }));
  return qualifier;
}

function solution(info, query) {
  const answer = [];

  const infoObject = {};
  for (let i = 0; i < info.length; ++i) {
    const infos = info[i].split(' ');
    const score = Number(infos.pop());
    const key = infos.join('');
    infoObject[key] = score;
  }

  query
    .map(q => q.replaceAll(" and ", " ")
      .replaceAll("- ", "")
      .split(" "))
    .forEach(query => {
      const score = Number(query.pop());
      answer.push(checkPass(infoObject, query, score));
    });

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




// function solution(info, query) {
//   const answer = [];
//   for (let j = 0; j < query.length; j++) {
//     let qualifier = 0;
//     for (let i = 0; i < info.length; i++) {
//       const infoArr = info[i].split(" ");
//       const queryArr = query[j].split(" ");
//       if ((infoArr[0] === queryArr[0] || queryArr[0] === "-")
//         && (infoArr[1] === queryArr[2] || queryArr[2] === "-")
//         && (infoArr[2] === queryArr[4] || queryArr[4] === "-")
//         && (infoArr[3] === queryArr[6] || queryArr[6] === "-")
//         && parseInt(infoArr[4]) >= parseInt(queryArr[7])) qualifier++;
//     }
//     answer.push(qualifier);
//   }
//   return answer;
// }