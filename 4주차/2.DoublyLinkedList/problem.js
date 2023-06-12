// 강의에서 배운 다중 연결리스트의 메서드(push, pop, shift, unshift, get, set, insert, remove)를 연습해봅시다. 각 메서드의 원리와 동작 방식을 이해하는 것에 초점을 둡니다.

// 또한 배운 내용을 응용하여 리스트의 모든 노드의 순서를 반전하는 메서드 reverse를 완성해보세요.
// 리스트가  <head> 1 <-> 2 <-> 3 <-> 4 <-> 5 <tail> 이라면
// reverse 실행 뒤엔 <head> 5 <-> 4 <-> 3 <-> 2 <-> 1 <tail> 로 바뀌어야 합니다.

// print()를 실행하여 현재 리스트의 노드를 어레이 형식으로 확인할 수 있습니다.

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {}
  
  pop() {}
  
  shift(){}

  unshift(val){}
  
  get(index){}

  set(index, va){}

  insert(index, va){}

  remove(index){}

  reverse(){}

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

