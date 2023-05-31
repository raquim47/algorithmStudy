/*
입국심사에 걸리는 최대 시간을 end로 두기
-> 모든 사람이 다 시간이 가장 많이 걸리는 직원에게 심사받는 경우 : n * times[time.length-1] (배열 오름차순 정렬 후)

심사관들마다 특정 인원수만큼씩 심사를 했는데 end 시간이 걸렸다고 가정 후 시간 기준 이진 탐색. middle을 end로 두고 시작.
-> 심사관 배열이 [a, b, c] 인 경우 middle 시간동안 심사한 인원 수는 int(middle/a) + int(middle/b) + int(middle/c)

이렇게 구한 인원 수가 n보다 크면 입국 심사하는데 걸린 시간이 적어도 middle 보다는 작다는 것. -> end = middle-1;
n보다 크면 middle 보다 큼. -> start = middle+1;

이렇게 이진탐색해서 인원 수가 n과 같아지는 middle이 심사 시간의 최솟값.
*/
function solution(n, times) {
  var answer = 0;

  times.sort((a,b) => a-b);
  let start = 0;
  let end = n * times[times.length-1];  
  let middle = end;
  let people;
  
  while (start <= end) {
    people = 0;
    for (t of times) {
      people += Math.floor(middle / t);
    }
    if (people > n) end = middle - 1;
    else if (people === n) {
      end = middle - 1;
      answer = middle;
    }
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
    console.log(`p : ${people} - ans : ${answer}`);
  }
  
  return answer;
}

console.log(solution(6, [7, 10])); // 28