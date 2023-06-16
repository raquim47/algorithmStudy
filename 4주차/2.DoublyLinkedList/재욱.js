// 강의에서 배운 다중 연결리스트의 메서드(push, pop, shift, unshift, get, set, insert, remove)를 연습해봅시다. 각 메서드의 원리와 동작 방식을 이해하는 것에 초점을 둡니다.

// 또한 배운 내용을 응용하여 리스트의 모든 노드의 순서를 반전하는 메서드 reverse를 완성해보세요.
// 리스트가  <head> 1 <-> 2 <-> 3 <-> 4 <-> 5 <tail> 이라면
// reverse 실행 뒤엔 <head> 5 <-> 4 <-> 3 <-> 2 <-> 1 <tail> 로 바뀌어야 합니다.

// print()를 실행하여 현재 리스트의 노드를 어레이 형식으로 확인할 수 있습니다.

class Node{
  constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(val){
      let newNode = new Node(val);
      if(this.length === 0){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
  } 

  pop(){
      if(!this.head) return undefined;
      let poppedNode = this.tail;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      } else {
          this.tail = poppedNode.prev;
          this.tail.next = null;
          poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
  }

  shift(){
      if(this.length === 0) return undefined;
      let oldHead = this.head;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      }else{
          this.head = oldHead.next;
          this.head.prev = null;
          oldHead.next = null;
      }
      this.length--;
      return oldHead;
  }

  unshift(val){
      let newNode = new Node(val);
      if(this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }

  get(index){
      if(index < 0 || index >= this.length) return null;
      let count, current;
      if(index <= this.length/2){
          count = 0;
          current = this.head;
          while(count !== index){
              current = current.next;
              count++;
          }
      } else {
          count = this.length - 1;
          current = this.tail;
          while(count !== index){
              current = current.prev;
              count--;
          }
      }
      return current;
  }

  set(index, val){
      let foundNode = this.get(index);
      if(foundNode != null){
          foundNode.val = val;
          return true;
      }
      return false;
  }
  
  insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index === 0) return !!this.unshift(val);
      if(index === this.length) return !!this.push(val);

      let newNode = new Node(val);
      let beforeNode = this.get(index-1);
      let afterNode = beforeNode.next;
      
      beforeNode.next = newNode, newNode.prev = beforeNode;
      newNode.next = afterNode, afterNode.prev = newNode;
      this.length++;
      return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.prev = null;
    removedNode.next = null;
    this.length--;

    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
  
    // next 포인터 방향 뒤집기
    let next; 
    let prev = null; 
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;   // 처음 prev는 null : 첫 번째로 뒤집히는 node(tail이 되므로)의 next는 null
      prev = node;
      node = next;
    }
  
    // prev 포인터 방향 뒤집기
    next = null;  
    node = this.head; // 반복문에서 사용할 tail node를 저장한다
    //(위에서 head와 tail이 뒤집혔으므로 this.head는 사실상 원래 tail이었다.)
    for (let i = 0; i < this.length; i++) {
      prev = node.prev;
      node.prev = next;   // 처음 node는 null : 첫 번째로 뒤집히는 node(head가 되므로)의 prev는 null
      next = node;
      node = prev;
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


const DLL = new DoublyLinkedList();
DLL.push(1);
DLL.push(2);
DLL.push(3);
DLL.push(4);
DLL.push(5);
DLL.reverse();
DLL.print();