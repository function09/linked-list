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

  headNode() {
    return this.head;
  }

  tailNode() {
    let node = this.head;

    while (node !== null) {
      node = node.nextNode;
      if (node.nextNode === null) {
        return node;
      }
    }
  }

  at(index) {
    let node = this.head;

    for (let i = 0; i < index; i += 1) {
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    let node = this.head;

    while (node) {
      if (node.nextNode === this.tailNode()) {
        node.nextNode = null;
      }
      node = node.nextNode;
    }
    return node;
  }

  contains(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }

  find(value) {
    let node = this.head;
    let i = 0;
    while (node) {
      i += 1;
      if (node.value === value) {
        return i;
      }
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    let node = this.head;
    let string = "";
    while (node) {
      string += `(${node.value}) -> `;
      node = node.nextNode;
      if (node === null) {
        string += "null";
      }
    }
    console.log(string);
  }
}

export default LinkedList;
