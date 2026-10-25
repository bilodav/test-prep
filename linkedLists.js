class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.size += 1;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this.size += 1;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.size += 1;
      return;
    }

    let current = this.head;
    this.head = newNode;
    this.size += 1;
    newNode.next = current;
  }

  print() {
    const printList = [];
    let current = this.head;

    if (this.isEmpty()) {
      return "List is empty";
    }

    while (current) {
      printList.push(current.data);
      current = current.next;
    }
    return printList;
  }
  insert(ind, data) {
    if (ind < 0 || ind > this.size) {
      return "Out of Range";
    }

    if (ind === 0) {
      this.prepend(data);
      return;
    }

    let counter = 0;
    let current = this.head;
    let after = current.next;
    let newNode = new Node(data);
    while (counter < ind) {
      current = current.next;
      after = current.next;
      counter++;
    }
    current.next = newNode;
    newNode.next = after;
  }

  removeFrom(ind) {
    if (ind < 0 || ind >= list.size) return "Out of range";

    let removedNode;

    if (ind === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removedNode.value;
    }

    let prev = this.head;
    for (let i = 0; i < ind - 1; i++) {
      prev = prev.next;
    }
    removedNode = prev.next;
    prev.next = removedNode.next;
  }

  removeValue(val) {
    if (this.isEmpty()) {
      return "List is empty";
    }

    if (this.head.value === val) {
      this.head = this.head.next;
      this.size--;
      return `${val} was deleted`;
    }

    let prev = this.head;
    let removedNode;
    while (prev.next && prev.next.data !== val) {
      prev = prev.next;
    }

    if (prev.next) {
      removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
      return `${val} was deleted`;
    }

    return `${val} was not found`;
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("List is EMPTY");

      return -1;
    }

    let i = 0;
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

// list.prepend(40);

console.log(list);

console.log(list.getSize());
console.log(list.print());

console.log(list.insert(3, 35));
console.log(list.print());
console.log(list.removeValue(40));
console.log(list.print());
console.log(list.search(355));

list.reverse();

console.log(list.print());
