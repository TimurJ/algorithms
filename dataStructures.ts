type QueueNode<T> = {
  value: T
  next?: QueueNode<T>
}

// This is a Queue first in first out. When we dequeue we are removing the links to the head node and assigning it to the next one.
// When we add to the Queue we are moving the tail pointer to the newly created node and setting the next of the previous tail to point to it.
class Queue<T> {
  public length: number
  private head?: QueueNode<T>
  private tail?: QueueNode<T>
  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const node = { value: item } as QueueNode<T>

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

type StackNode<T> = {
  value: T
  previous?: StackNode<T>
}

// This is a Stack using a singly linked list, the head is at the end of the list and you can only add and remove items onto the head/end of list.
// When adding the previous of the new head should point to old and the head should now point to the newly added node.
// When removing the head should point to the previous of the current head and return out the value of current head.
class Stack<T> {
  public length: number
  private head?: StackNode<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    this.length++
    const node = { value: item } as StackNode<T>

    if (!this.head) {
      this.head = node
      return
    }

    node.previous = this.head
    this.head = node
  }
  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1)

    if (this.length === 0) {
      const head = this.head as StackNode<T>
      this.head = undefined
      return head?.value
    }

    const head = this.head as StackNode<T>
    this.head = head.previous

    return head.value
  }
  peek(): T | undefined {
    return this.head?.value
  }
}
