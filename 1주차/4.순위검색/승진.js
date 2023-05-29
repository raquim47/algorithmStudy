// 순위 검색
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/72412?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 이진 탐색
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return left;
};

function solution(info, query) {
  let answer = [];
  const obj = {};

  info.forEach(infoString => {
    const infoArr = infoString.split(' ');
    const score = Number(infoArr.pop());
    const key = infoArr.join('');
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(score);
  });

  for (const key in obj) {
    obj[key].sort((a, b) => a - b);
  }
  // obj : {
  //   javabackendjuniorpizza: [ 150 ],
  //   pythonfrontendseniorchicken: [ 210, 150 ],
  //   cppbackendseniorpizza: [ 260 ],
  //   javabackendjuniorchicken: [ 80 ],
  //   pythonbackendseniorchicken: [ 50 ]
  // }

  query.forEach(queryString => {
    // 예시 queryString : '- and backend and senior and - 150',
    const queryArr = queryString.split(' ').filter(v => v !== 'and' && v !== '-');
    const score = queryArr.pop();
    // queryArr : [ 'backend', 'senior' ]

    const targets = Object.keys(obj).filter(key => queryArr.every(v => key.includes(v)));
    console.log(targets, score)
    // targets : [ 'cppbackendseniorpizza', 'pythonbackendseniorchicken' ]
    // 3단계: 쿼리와 정보를 비교합니다.
    const result = targets.reduce((acc, key) => {
      // score: 150, obj의 value : [100, 120, 150, 180, 200]
      // binarySearch는 obj의 value에서 score이상인 첫번째 요소의 인덱스를 반환
      const cur = obj[key].length - binarySearch(obj[key], score);
      return acc + cur;
    }, 0);
    answer.push(result);
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

// 풀이
// 각 지원자가 제출한 설문 (언어, 직군,경력, 음식, 점수) 항목에 대해 특정 조건을 충족하는 결과를 배열로 반환하는 문제.

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);// 중간 인덱스 계산
    if (arr[mid] < target) {
      left = mid + 1;// 탐색 범위를 오른쪽 절반 + 1으로 변경
    } else {
      right = mid - 1;// 탐색 범위를 왼쪽 절반 - 1으로 변경
    }
  }
  
  return left;
};

function solution(info, query) {
  let answer = [];
  const obj = {};

  // obj : 점수를 제외한 문자열을 공백없이 key로 넣고, 마지막 점수값을 배열에 담아 value로 
  info.forEach(infoString => {
    const infoArr = infoString.split(' ');
    const score = Number(infoArr.pop());
    const key = infoArr.join('');
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(score);
  });

  // obj의 value(점수 배열를 오름차순으로 정렬.
  for (const key in obj) {
    obj[key].sort((a, b) => a - b);
  }
  // obj : {
  //   javabackendjuniorpizza: [ 150 ],
  //   pythonfrontendseniorchicken: [ 210, 150 ],
  //   cppbackendseniorpizza: [ 260 ],
  //   javabackendjuniorchicken: [ 80 ],
  //   pythonbackendseniorchicken: [ 50 ]
  // }

  query.forEach(queryString => {
    // 예시 queryString : '- and backend and senior and - 150',
    const queryArr = queryString.split(' ').filter(v => v !== 'and' && v !== '-');
    const score = queryArr.pop();
    // queryArr : [ 'backend', 'senior' ]
    // score 150
    const targets = Object.keys(obj).filter(key => queryArr.every(v => key.includes(v)));
    console.log(targets, score)
    // targets : [ 'cppbackendseniorpizza', 'pythonbackendseniorchicken' ]
    // 3단계: 쿼리와 정보를 비교합니다.
    const result = targets.reduce((acc, key) => {
      // score: 150, obj의 value : [100, 120, 150, 180, 200]
      // binarySearch는 obj의 value에서 score이상인 첫번째 요소의 인덱스를 반환
      const cur = obj[key].length - binarySearch(obj[key], score);
      return acc + cur;
    }, 0);
    answer.push(result);
  });
  return answer;
}
// function solution(info, query) {
//   const responseList = info.map((e) => e.split(' '));

//   const searchList = query.map((e) => {
//     const splited = e.split(' ');
//     return splited.filter((e) => e != 'and');
//   });

//   return searchList.map((search) => {
//     const searchLength = search.length;
//     const searchScore = Number(search[searchLength - 1]);

//     return responseList.filter((response) => {
//       if (response[4] < searchScore) return false;

//       for (let i = 0; i < searchLength - 1; i++) {
//         if (search[i] !== '-' && search[i] !== response[i]) {
//           return false;
//         }
//       }
//       return true;
//     }).length;
//   });
// }
