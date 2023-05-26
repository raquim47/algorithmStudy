function solution(a, b, n) {
  var answer = 0;
  // 1. a * parseInt(n/a)병을 들고가서 parseInt(n/a)병의 콜라를 받음 -> (n - (a * parseInt(n/a)) + parseInt(n/a))병(= a^) 보유, answer += parseInt(n/a)
  // 2. a * parseInt(a^/a)병을 들고가서 parseInt(a^/a)병의 콜라를 받음 -> (a^ - (a * parseInt(a^/a)) + parseInt(a^/a))병(= a^^) 보유, answer += parseInt(a^/a)
  // 3. a * parseInt(a^^/a)병을 들고가서 parseInt(a^^/a)병의 콜라를 받음 -> (a^^ - (a * parseInt(a^^/a)) + parseInt(a^^/a))병(= a^^^) 보유, answer += parseInt(a^^/a)
  function helpFunc(coke) {
    if (coke < a) return;
    let giveCoke = a * parseInt(coke/a);
    let receiveCoke = parseInt(coke/a);
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