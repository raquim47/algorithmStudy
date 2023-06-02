function solution(info, query) {
  var answer = [];
  const infoObj = {};
  const query_list = [];
  
  for (i of info) {
    const arr = i.split(" ");
    const value = parseInt(arr.pop());
    const key = arr.join("");
    if (!infoObj[key]) infoObj[key] = [value];
    else infoObj[key].push(value);
  }
  for (const key in infoObj) {
    infoObj[key].sort((a, b) => a-b);
  }

  for (q of query) {
    query_list.push(q.split(" ").filter(s => s !== "and" && s !== "-"));
  }
  
  query_list.forEach(qry => {
    const score = qry.pop();
    const result = getResult(infoObj, qry, score);
    answer.push(result);
  })

  return answer;
}

const getResult = (obj, query, score) => {
  const infoObjKey = Object.keys(obj);
  // console.log(infoObjKey);
  return infoObjKey
    .filter(key => query.every(v => key.includes(v)))  // infoObjKey 요소 중 query 배열의 모든 요소를 포함하는것만 반환
    .reduce((total, key) => total + obj[key].length - binarySearch(obj[key], score), 0);
    // 해당 key의 값인 배열의 총 길이에서 이분 탐색으로 얻은 인덱스를 빼면 값이 score 이상인 요소의 수. 이걸 누산
}

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while(start <= end) {
    if (arr[middle] === target) return middle;
    if (arr[middle] < target) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }
  return middle + 1;  // target 값이 없는 경우, while 문을 빠져나온 후의 arr[middle]은 target보다 무조건 작기 때문에 이때는 middle + 1을 반환
}
// ex)
// arr = [2, 4, 5, 8, 12, 13]
// target = 7  ->  start : 3   middle : 2   end : 2  ->  arr[middle] : 5
// target = 9  ->  start : 4   middle : 3   end : 3  ->  arr[middle] : 8


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