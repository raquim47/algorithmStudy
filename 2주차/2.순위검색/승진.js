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