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

class ListNode {
  #item;
  #nextPointer;
  constructor(inItem) {
    this.#item = inItem;
    this.#nextPointer = null;
  }

  setNextPointer(value) {
    this.#nextPointer = value;
  }

  setItem(value) {
    this.#item = value;
  }
}

class LinkedList {
  #head;
  #tail;
  #length;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  append(value) {
    let node = new ListNode(value);
    if (!this.#head) {
      this.#head = node;
      this.#tail = this.#head;
    } else {
      this.#tail.setNextPointer(node);
      this.#tail = node;
    }

    this.#length += 1;
  }
}

let myLinkedList = new LinkedList();
myLinkedList.append("54");
myLinkedList.append("147");
myLinkedList.append("1426");
