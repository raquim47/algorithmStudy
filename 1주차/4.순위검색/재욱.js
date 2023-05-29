<<<<<<< HEAD:1주차_재귀함수&이진탐색/3.콜라문제/재욱.js
function solution(a, b, n) {
  var answer = 0;
  // 1. a * (b*parseInt(n/a))병을 들고가서 b*parseInt(n/a)병의 콜라를 받음 -> (n - (a * (b*parseInt(n/a))) + b*parseInt(n/a))병(= a^) 보유, answer += parseInt(n/a)
  // 2. a * (b*parseInt(a^/a))병을 들고가서 b*parseInt(a^/a)병의 콜라를 받음 -> (a^ - (a * parseInt(a^/a)) + parseInt(a^/a))병(= a^^) 보유, answer += parseInt(a^/a)
  // 3. a * (b*parseInt(a^^/a))병을 들고가서 b*parseInt(a^^/a)병의 콜라를 받음 -> (a^^ - (a * parseInt(a^^/a)) + parseInt(a^^/a))병(= a^^^) 보유, answer += parseInt(a^^/a)
  function helpFunc(coke) {
    if (coke < a) return;
    let giveCoke = b*(a * parseInt(coke/a));
    let receiveCoke = b*parseInt(coke/a);
    // coke -= a * parseInt(coke/a);
    answer += receiveCoke;
    return helpFunc(coke - giveCoke + receiveCoke);
  }

  helpFunc(n);
  // // hF(20);
  //     a:6, helpFunc(8)
  //          a:6+2, helpFunc(4)
  //                 a:6+2+1,  helpFunc(2)
  //                              X


  return answer;
}

console.log(solution(2, 1, 20)); //19
console.log(solution(3, 1, 20));  //9
=======
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
>>>>>>> bcbb6fd220f98ccbb4f9eff485a77c2d984d4381:1주차/4.순위검색/재욱.js
