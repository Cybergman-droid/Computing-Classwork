class Stack {
  #items;
  #topPointer;
  constructor() {
    this.#items = [];
    this.#topPointer = -1;
  }

  push(item) {
    this.#items.push(item);
    this.#topPointer += 1;
  }

  pop() {
    if (this.#topPointer < 0) {
      console.log("the stack is empty");
    } else {
      this.#topPointer -= 1;
    }
  }

  peek() {
    if (this.#topPointer < 0) {
      console.log("the stack is empty");
    } else {
      console.log(this.#items[this.#topPointer]);
    }
  }

  show() {
    console.log(this.#items);
  }
}

class Queue {
  #items;
  #frontPointer;
  #backPointer;
  constructor() {
    this.#items = [];
    this.#frontPointer = -1;
    this.#backPointer = -1;
  }

  enqueue(item) {
    if (!this.#items.length >= 1) {
      this.#items.push(item);
      this.#frontPointer += 1;
      this.#backPointer += 1;
    } else {
      this.#items.push(item);
      this.#backPointer += 1;
    }
  }

  dequeue() {
    if (this.#items.length < 0) {
      console.log("the queue is empty");
    } else {
      this.#frontPointer += 1;
    }
  }

  peek() {
    if (!this.#items.length >= 1) {
      console.log(this.#items[this.#frontPointer]);
    }
  }

  show() {
    console.log(this.#items);
  }
}

let myStack = new Stack();
let myQueue = new Queue();
myQueue.enqueue("15");
myQueue.enqueue("45");
myQueue.enqueue("75");
myQueue.enqueue("95");
myQueue.show();
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.show();
myQueue.peek();
