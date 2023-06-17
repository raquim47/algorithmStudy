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
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// console.log(first)


  
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
  
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }
  
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
  
    get(index){
        if(index<0 || index >= this.length) return null;
        var counter =0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;
    }
    
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
  
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
  
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
  
    rotate(n){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i =0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
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
  
var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.unshift("FIRST")
console.log(list)

list.print()