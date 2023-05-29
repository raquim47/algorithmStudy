// 순위 검색
// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/72412?language=javascript

// 지시사항 : 프로그래머스 링크 참고

// * 이진 탐색...으로 못 풀고 하드코딩했습니다

function solution(info, query) {
  const answer = [];
  for (let j = 0; j < query.length; j++) {
    let qualifier = 0;
    for (let i = 0; i < info.length; i++) {
      const infoArr = info[i].split(" ");
      const queryArr = query[j].split(" ");
      if ((infoArr[0] === queryArr[0] || queryArr[0] === "-")
        && (infoArr[1] === queryArr[2] || queryArr[2] === "-")
        && (infoArr[2] === queryArr[4] || queryArr[4] === "-")
        && (infoArr[3] === queryArr[6] || queryArr[6] === "-")
        && parseInt(infoArr[4]) >= parseInt(queryArr[7])) qualifier++;
    }
    answer.push(qualifier);
  }
  return answer;
}

/*
https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/#%EB%AC%B8%EC%A0%9C-3-%EC%88%9C%EC%9C%84-%EA%B2%80%EC%83%89
효율성 테스트의 경우에는 위와 같은 방식으로 매번 지원자들을 찾는다면 통과할 수 없습니다.
문제 해결을 위해서, 지원자들을 그룹별로 적절하게 미리 분류해두면
매 문의 조건마다 지원자들을 INFO 배열에서 찾지 않아도 됩니다.... 그룹별로 분류하는 방법??
*/

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
