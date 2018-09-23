'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  remove(offset) {
    // removes a node based on the input value
    // Big O = O(n) n = number of Nodes
    if (!this.head) return null;
    let counter = (offset - 1);
    let currentNode = this.head;

    function recursiveRemove() {
      if (!currentNode.next.next) {
        return null;
      }
      if (counter === 0) {
        currentNode.next = currentNode.next.next;
        return currentNode.next;
      }
      counter -= 1;
      currentNode = currentNode.next;
      recursiveRemove();
      return undefined;
    }
    recursiveRemove();
    return undefined;
  }

  insertAtHead(value) {
    // inserts a value at the head of the list
    // Big O = O(1)
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtTail(value) {
    // inserts a value at the tail of the list
    // Big O = O(1)
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }
};
