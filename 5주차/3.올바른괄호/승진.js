// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s) {
  const stack = [];
  
  for (const val of s) {
    if (val === '(') {
      stack.push(val);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0; // if stack is empty, all parentheses are correctly paired.
}

console.log(solution('()()')); //	true
console.log(solution('(())()')); //	true
console.log(solution(')()(')); //	false
console.log(solution('(()(')); //	false
