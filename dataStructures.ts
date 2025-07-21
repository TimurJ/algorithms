type Node<T> = {
  value: T
  next?: Node<T>
}

// This is a Queue first in first out. When we dequeue we are removing the links to the head node and assigning it to the next one.
// When we add to the Queue we are moving the tail pointer to the newly created node and setting the next of the previous tail to point to it.
export default class Queue<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>
  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>

    this.length++
    if (!this.tail) {
      if (!this.head) {
        this.tail = this.head = node
        return
      }
      return
    }

    this.tail.next = node
    this.tail = node
  }
  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.length--

    if (this.length === 0) {
      this.tail = undefined
    }

    const head = this.head
    this.head = this.head.next

    return head.value
  }
  peek(): T | undefined {
    return this.head?.value
  }
}
