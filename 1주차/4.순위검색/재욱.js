function solution(info, query) {
  var answer = [];

  let info_list = [];
  let query_list = [];
  for (i of info) {
    info_list.push(i.split(" "));
  }
  for (q of query) {
    query_list.push(q.split(" ").filter((s) => s !== "and"));
  }

  for (qr of query_list) {
    for (let i = 0; i < qr.length; i++) {
      
    }
  }

  console.log(info_list);
  console.log(query_list);
  
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