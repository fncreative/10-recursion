'use strict';

const LinkedList = require('../lib/linkedList');

describe('Testing the linked-list js file', () => {
  test('This is testing the constructor', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.head).toBeNull();
  });

  test('This will insert a number at the head of the linked list', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtHead(46);
    expect(testLinkedList.head.value).toEqual(46);
  });
  test('This will insert a string at the beginning of the head of the linked list', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtHead('d');
    expect(testLinkedList.head.value).toEqual('d');
  });
  test('This should remove the given value from the list ', () => {
    const testLinkedList = new LinkedList();

    testLinkedList.remove(5);
    expect(testLinkedList.head).toBeNull();

    testLinkedList.insertAtTail(3);
    testLinkedList.insertAtTail(4);
    testLinkedList.insertAtTail(6);
    testLinkedList.insertAtTail(8);
    expect(testLinkedList.head.value).toEqual(3);
    expect(testLinkedList.head.next.value).toEqual(4);
    expect(testLinkedList.head.next.next.value).toEqual(6);
    expect(testLinkedList.head.next.next.next.value).toEqual(8);
  });
  test('This will remove a given string value from the list', () => {
    const testLinkedList = new LinkedList();

    testLinkedList.remove('daniel');
    expect(testLinkedList.head).toBeNull();

    testLinkedList.insertAtTail('daniel');
    testLinkedList.insertAtTail(7);
    testLinkedList.insertAtTail(3);
    testLinkedList.insertAtTail(2);
    expect(testLinkedList.head.next.value).toEqual(7);
    expect(testLinkedList.head.next.next.value).toEqual(3);
    expect(testLinkedList.head.next.next.next.value).toEqual(2);
  });
});
