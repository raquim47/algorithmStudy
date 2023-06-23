// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s){
    let left = 0;
    let right = 0;
    for(i=0; i<s.length; i++){
        
        if( s[i]==='('){
            left++;
        }else if ( s[i] === ')'){
            right++;
            if(left-right < 0){
                return false;
            }
        }
    }
    if(left - right === 0){
        return true;
    }else{
        return false;
    }
}
console.log(solution('()()')); //	true
console.log(solution('(())()')); //	true
console.log(solution(')()(')); //	false
console.log(solution('(()(')); //	false