import { LinkedList } from "./linked_list.js"
export class Stack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
       return this.list.pop()
    }

    toArray() {
        return this.list.toArray()
    }
}
/*

const stack = new Stack()

stack.push("Product 1")
stack.push("Product 2")
stack.push("Product 3")

console.log(stack.toArray())

console.log(stack.pop())

console.log(stack.toArray())*/
