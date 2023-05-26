// 소수 만들기
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// O(n^3 * √m)
function isPrime(value){
  if(value % 2 === 0){
    return false;
  }
  for (let i = 3; i <= Math.sqrt(value); i+=2) {
    if(value % i === 0){
      return false;
    }
  }

  return true;
}

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        
        if(isPrime(sum)){
          answer++;
        }
      }
    }
  }
  return answer;
}
// O(n^3 * √m)
console.log(solution([1, 2, 3, 4])); // 1
// console.log(solution([1, 2, 7, 6, 4])); // 4


// 풀이
// 문제 : 주어진 배열에서 서로 다른 세 개의 수를 선택하여 더했을 때 그 합이 소수가 되는 경우의 수를 찾는 문제
// 1. 결과값 변수 answer = 0으로 초기화
// 2. 첫번째, 두번째, 세번째 수를 선택하기 위해 배열을 순회
// 3. 세 수를 합한 값이 소수인지 isPrime을 통해 판별
// 3-1. 입력값이 2로 나누어 떨어지면 false 반환(짝수는 소수가 아니다)
// 3-2. 입력값을 3부터 입력값의 제곱근(소수가 아닌 경우 그 수는 루트 값 이하의 수로만 나눠지기 때문)까지의 모든 홀수로 나눴을 때 나누어 떨어지면 false 반환
// 3-3. 위 루프가 중단되지 않고 통과되면 true를 반환(소수)
// 4. isPrime이 true면 answer++

function isPrime(value){
  if(value % 2 === 0){
    return false;
  }
  // 소수인지 판별
  // 소수가 아닌 경우 그 수는 루트 값 이하의 수로만 나눠지기 때문
  for (let i = 3; i <= Math.sqrt(value); i+=2) {
    if(value % i === 0){
      return false;
    }
  }

  return true;
}

function solution(nums) {
  let answer = 0;
  
  // 세 숫자의 조합
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        
        if(isPrime(sum)){
          answer++;
        }
      }
    }
  }
  return answer;
}