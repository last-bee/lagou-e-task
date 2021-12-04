/**
  单向链表
 */
class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}
class LinkedList {
  constructor() {
    this.size = 0
    this.head = null
  }
  _getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('越界了')
    }
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  add(...args) {
    let index = args[0], element = args[1]
    if(args.length === 1) {
      index = this.size
      element = args[0]
    }
    if(index < 0 || index > this.size) {
      throw new Error('超出边界')
    }
    if( index === 0){
      this.head = new Node(element, this.head)
    } else {
      let preNode = this._getNode(index - 1)
      preNode.next = new Node(element, preNode.next)
    }
    this.size ++
  }
  remove(index) {
    let rmNode = null 
    if (index == 0) {
      rmNode = this.head 
      if (!rmNode) {
        return undefined
      }
      this.head = rmNode.next
    } else {
      let preNode = this._getNode(index -1)
      rmNode = preNode.next
      preNode.next = rmNode.next
    }
    this.size--
    return rmNode
  }
  set(index, element) {
    let node = this._getNode(index)
    node.element = element
  }
  get(index) {
    return this._getNode(index)
  }
  clear() {
    this.head = null 
    this.size = 0 
  }
}


class Queue {
  constructor() {
    this.linkedList = new LinkedList()
  }
  enQueue(data) {
    this.linkedList.add(data)
  }
  deQueue() {
    return this.linkedList.remove(0)
  }
}

const q = new Queue()

q.enQueue('node1')
q.enQueue('node2')
console.log(q)
let a = q.deQueue()
a = q.deQueue()

console.log(a)
// module.exports = Queue