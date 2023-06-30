// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   enqueue(newValue) {
//     const newNode = new Node(newValue);
//     if (this.head === null) {
//       this.head = this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }

//   dequeue() {
//     const value = this.head.value;
//     this.head = this.head.next;
//     return value;
//   }

//   peek() {
//     return this.head.value;
//   }
// }

// function solution(priorities, location) {
//   const queue = new Queue();
//   for (let i = 0; i < priorities.length; i++) {
//     queue.enqueue([priorities[i], i]);
//   }

//   priorities.sort((a, b) => b - a);

//   let count = 0;
//   while (true) {
//     const currentValue = queue.peek();
//     if (currentValue[0] < priorities[count]) {
//       queue.enqueue(queue.dequeue());
//     } else {
//       const value = queue.dequeue();
//       count++;
//       if (location === value[1]) {
//         return count;
//       }
//     }
//   }
// }

// console.log(solution([2, 1, 3, 2], 2)); //1
// console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5