// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript


function solution(s){
  let stackCount = 0;
  if (s[0] === ")" || s[s.length-1] === "(") return false;
  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === '(' ? 1 : -1;  // '(' 면 스택 +1, ')' 면 스택 -1
    if (stackCount < 0) return false;  // 도중에 스택 수가 음수가 되면 뒤는 볼것도 없이 잘못된 괄호 문자열인거니까 컷
  }
  return stackCount === 0 ? true : false;
}

// 스택 자료구조를 직접 구현하여 푸는 ver -> 시간 오래걸림
// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = this.first;
//     } else {
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }

//   pop() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) this.last = null;
//     this.first = temp.next;
//     this.size--;
//     return temp.value;
//   }
// }


// function solution(s) {
//   let bracketList = new Stack();
//   if (s[0] === ")" || s[s.length-1] === "(") return false;  // 시작이 ')' 이거나 끝이 '(' 인건 무조건 잘못된 괄호
//   for (let i = 0; i < s.length; i++) {   // '(' 이면 push, ')' 이면 넣지않고 가장 최근의 '(' 를 pop
//     if (s[i] === ")") {
//       if (!bracketList.pop()) return false;  // 스택에 더이상 남아있는 '(' 가 없는데 ')' 가 들어오는 경우 -> 뒤는 더 볼 필요 없이 잘못된 괄호이므로 바로 컷(안하면 시간초과남)
//       // (빈 스택인데 pop을 하면 null이 반환되니까)
//     } else {
//       bracketList.push(s[i]);
//     }
//   }
//   if (bracketList.size !== 0) return false;
//   return true;
// }

console.log(solution('()()')); //	true
console.log(solution('(())()')); //	true
console.log(solution(')()(')); //	false
console.log(solution('(()(()')); //	false