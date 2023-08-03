import Node from "./Node";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let temp = this.head;

      while (temp.nextNode) {
        temp = temp.nextNode;
      }

      temp.nextNode = node;
    }
  }

  prepend(value) {
    const node = new Node(value);

    node.nextNode = this.head;
    this.head = node;
  }

  size() {
    let sizeCounter = 0;
    let node = this.head;

    while (node !== null) {
      sizeCounter += 1;
      node = node.nextNode;
    }
    return sizeCounter;
  }

  headValue() {
    console.log(this.head);
    return this.head;
  }

  tailValue() {
    let node = this.head;

    while (node !== null) {
      node = node.nextNode;
      if (node.nextNode === null) {
        return node;
      }
    }
  }
}

export default LinkedList;
