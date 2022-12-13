interface IQueueData<T> {
  [index: number]: T
}

export class Queue<T> {
  private data: IQueueData<T> = {}
  private count = 0
  private lowCount = 0

  offer (ele: T) {
    this.data[this.count++] = ele
  }

  poll () {
    if (this.isEmpty()) {
      return null;
    }
    const result = this.data[this.lowCount]
    delete this.data[this.lowCount++]
    return result
  }

  peek () {
    return this.data[this.lowCount]
  }

  isEmpty () {
    return this.count === this.lowCount
  }

  size () {
    return this.count - this.lowCount
  }

  clear () {
    this.data = {}
    this.count = 0
    this.lowCount = 0
  }

  toString () {
    if (this.isEmpty()) return ''
    let objString = `${this.data[this.lowCount]}`
    for (let i = this.lowCount + 1; i < this.count; i++) {
      objString += ` ${this.data[i]}`
    }
    return objString
  }
}
