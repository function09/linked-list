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

  at(index) {
    const nodeArray = [];
    let node = this.head;

    nodeArray.push(node);

    while (node) {
      node = node.nextNode;
      nodeArray.push(node);
    }
    return nodeArray[index];
  }

  pop() {
    let node = this.head;

    while (node) {
      node = node.nextNode;
      if (node.nextNode === this.tailValue()) {
        node.nextNode = null;
        return node;
      }
    }
  }

  contains(value) {
    let node = this.head;

    while (node) {
      node = node.nextNode;
      if (node.value === value) {
        return true;
      }
      if (node.value !== value) {
        return false;
      }
    }
  }
}

export default LinkedList;
