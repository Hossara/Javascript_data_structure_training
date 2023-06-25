import { LinkedList } from "./linked_list.js"

class Queue {
    constructor() {
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }

    dequeue() {
        return this.list.pop()
    }

    toArray() {
        this.list.toArray()
    }
}