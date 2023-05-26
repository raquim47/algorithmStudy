// 소수 만들기
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

// 지시사항 : 프로그래머스 링크 참고
// * 재귀함수 활용할 것!



function isPrime(num){
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
      if (num % i ===0) return false;
  }
  return true;
}

function solution(nums) {
  var answer = 0;
  for(let i = 0; i < nums.length -2; i++){
      for (let j = i+1; j<nums.length-1; j++){
          for (let k= j+1; k<nums.length; k++){
              let sum = nums[i]+nums[j]+nums[k];
              if (isPrime(sum)) {
                  answer++;
              }
          }
      }
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript')

  return answer;
}





  //재귀
  function solution(nums) {
      let count = 0; 
  
      function isPrime(num) {
          for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
              if(num % i === 0) return false; 
          return num > 1; 
      }
  
      // 재귀 함수
      function find(sum, cnt, idx) {
          if (cnt === 3) {
              if(isPrime(sum)) count++;
              return;
          }
  
          for(let i = idx; i < nums.length; i++)
              find(sum + nums[i], cnt + 1, i + 1);
      }
      
      find(0, 0, 0);
      return count;
  }

  console.log(solution([1, 2, 3, 4])); // 1
// console.log(solution([1, 2, 7, 6, 4])); // 4