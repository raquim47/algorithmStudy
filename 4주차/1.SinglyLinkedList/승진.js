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

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

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
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    const gotNode = this.get(index);
    if (gotNode) {
      gotNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift;
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;

    return removedNode;
  }

  rotate(n) {
    if (!this.head) undefined;

    if (n > 0) {
      let count = 0;
      while (count < n) {
        const shiftedNode = this.shift();
        this.push(shiftedNode.val);
        count++;
      }
    } else {
      let count = 0;
      while (count < Math.abs(n)) {
        const poppedNode = this.pop();
        this.unshift(poppedNode.val);
        count++;
      }
    }
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

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.rotate(-1);
list.print();
