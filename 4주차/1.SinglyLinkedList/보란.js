// 강의에서 배운 단일 연결리스트의 메서드(push, pop, shift, unshift, get, set, insert, remove)를 연습해봅시다.
// 각 메서드의 원리와 동작 방식을 이해하는 것에 초점을 둡니다.

// 또한 배운 내용을 응용하여 n만큼 모든 노드를 회전하는 rotate 메서드를 완성해보세요.
// 리스트가 1 -> 2 -> 3 -> 4 -> 5 일 때
// rotate(2)를 실행하면 3 -> 4 -> 5 -> 1 -> 2 로 바뀌어야 합니다.
// n은 모든 정수입니다.

// print()를 실행하여 현재 리스트의 노드를 어레이 형식으로 확인할 수 있습니다.

// 강의는 다 들었지만 rotate는 못만들었습니다...

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

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // this.head가 null인 게 참이라면
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.length;
    return this;
  }

  // traverse() { // traverse 횡단하다
  //     let current = this.head;
  //     while(current) {
  //         console.log(current.val);
  //         current = current.next;
  //     }
  // }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    --this.length;

    if (this.length === 0) {
      // length 음수값 방지
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    --this.length;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    ++this.length;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      ++counter;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      this.push(val);
      return true; // 한 줄로: if (index === this.length) !!this.push(val);
    }
    if (index === 0) {
      this.unshift(val);
      return true; // 한 줄로: if (index === 0) !!this.unshift(val);
    }

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    ++this.length;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = this.get(index);
    previousNode.next = removed.next; // this.get(index + 1)으로 할당해도 동작은 같지만 쓸데없는함수호출
    --this.length;
    return removed;
  }

  reverse() {
    let node = this.head; // head/tail swap
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; ++i) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  rotate(n) {
    ;
  }

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
