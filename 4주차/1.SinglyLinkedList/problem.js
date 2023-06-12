// 강의에서 배운 단일 연결리스트의 메서드(push, pop, shift, unshift, get, set, insert, remove)를 연습해봅시다. 각 메서드의 원리와 동작 방식을 이해하는 것에 초점을 둡니다.

// 또한 배운 내용을 응용하여 n만큼 모든 노드를 회전하는 rotate 메서드를 완성해보세요.
// 리스트가 1 -> 2 -> 3 -> 4 -> 5 일 때
// rotate(2)를 실행하면 3 -> 4 -> 5 -> 1 -> 2 로 바뀌어야 합니다.
// n은 모든 정수입니다.

// print()를 실행하여 현재 리스트의 노드를 어레이 형식으로 확인할 수 있습니다.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){}

  pop(){}

  shift(){}
  
  unshift(val){}

  get(index){}
  
  set(index, val){}

  insert(index, val){}

  remove(index){}

  rotate(n){}

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
