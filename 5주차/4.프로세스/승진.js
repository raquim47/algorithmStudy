// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

// 문서의 중요도가 담겨있는 배열(priorities)과 문서의 위치(location)가 주어졌을 때 location에 해당하는 문서가 몇번째에 실행되는가.
// 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.

function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));
  let count = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      count++;
      if (current.index === location) {
        return count;
      }
    }
  }
}

function solution(priorities, location) {
  // [2, 1, 3, 2], 2
  const queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));
  // [
  //   { priority: 2, index: 0 },
  //   { priority: 1, index: 1 },
  //   { priority: 3, index: 2 },
  //   { priority: 2, index: 3 }
  // ]
  let count = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    // item.priority가 하나라도 큰 게 있으면 true
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      count++;
      if (current.index === location) {
        return count;
      }
    }
    // let temp = false;
    // for (let i = 0; i < queue.length; i++) {
    //   if (queue[i].priority > current.priority) {
    //     temp = true;
    //     break;
    //   }
    // }
    // if(temp){
    //   queue.push(current);
    // }
  }
}

console.log(solution([2, 1, 3, 2], 2)); //1
// console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
