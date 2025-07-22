type Node<T> = {
  value: T
  prev?: Node<T>
  next?: Node<T>
}

export default class DoublyLinkedList<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = this.tail = undefined
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>
    this.length++

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error('You messed up')
    } else if (idx === this.length) {
      this.append(item)
    } else if (idx === 0) {
      this.prepend(item)
    }

    this.length++
    const curr = this.getAt(idx) as Node<T>
    const node = { value: item } as Node<T>

    node.next = curr
    node.prev = curr.prev
    curr.prev = node
    if (curr.prev) {
      curr.prev.next = node
    }
  }
  append(item: T): void {
    const node = { value: item } as Node<T>
    this.length++

    if (!this.tail) {
      this.tail = this.head = node
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }
  remove(item: T): T | undefined {
    let curr = this.head

    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === item) {
        break
      }
      curr = curr.next
    }

    if (!curr) {
      return undefined
    }

    this.length--

    if (this.length === 0) {
      const value = this.head?.value
      this.head = this.tail = undefined
      return value
    }

    if (curr.prev) {
      curr.prev.next = curr.next
    }

    if (curr.next) {
      curr.next.prev = curr.prev
    }

    if (this.head === curr) {
      this.head = curr.next
    }

    if (this.tail === curr) {
      this.tail = curr.prev
    }

    return curr.value
  }
  get(idx: number): T | undefined {
    return this.getAt(idx)?.value
  }
  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx)

    if (!node) {
      return undefined
    }

    this.length--

    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }

    if (this.head === node) {
      this.head = node.next
    }

    if (this.tail === node) {
      this.tail = node.prev
    }

    return node.value
  }

  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head

    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next
    }

    return curr
  }
}
