export class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // Add a value to the end of the list
    append(value) {
        const newElement = {
            value: value,
            next: null
        }

        if (this.tail) this.tail.next = newElement

        this.tail = newElement

        if (!this.head) this.head = newElement
    }

    // Add a value to first of the list
    prepend(value) {
        const newElement = {
            value: value,
            next: this.head
        }

        this.head = newElement

        if (!this.tail) this.tail = newElement
    }

    find(value) {
        // If list is empty
        if (!this.head) return

        let currentElement = this.head

        while (currentElement) {
            if (currentElement.value === value)
                return currentElement
            else currentElement = currentElement.next
        }

        return false
    }

    insertAfter(item, value) {
        const existingElement = this.find(item)

        if (existingElement)
        {
            existingElement["next"] = {
                value: value,
                next: existingElement.next
            }
        }
    }

    delete(value) {
        // If list is empty
        if (!this.head) return

        let preElement = null
        let currentElement = this.head

        // Loop in list elements
        while (true) {
            // Check if next value is what we lo
            if (currentElement.value === value) {

                if (this.head.value === value)
                {
                    this.head = this.head.next
                    currentElement = this.head
                }
                else if(this.tail.value === value)
                {
                    this.tail = preElement
                    currentElement = this.tail
                    currentElement.next = null
                }
                else preElement.next = currentElement.next
                break
            }
            else
            {
                if (currentElement.next)
                {
                    preElement = currentElement
                    currentElement = currentElement.next
                }
                else break
            }
        }
    }

    pop() {
        // If list is empty
        if (!this.head) return

        const deletedItem = this.head

        if (this.head.next)
            this.head = this.head.next
        else
        {
            this.head = null
            this.tail = null
        }

        return deletedItem
    }

    toArray() {
        const elements = []

        let currentElement = this.head

        while(currentElement) {
            elements.push(currentElement)
            currentElement = currentElement.next
        }

        return elements
    }
}

/*
const linkedList = new LinkedList()

linkedList.append(2)
linkedList.append("s")
linkedList.append("b")
linkedList.append("d")
linkedList.append("n")

linkedList.prepend("first value")

console.log(linkedList.toArray())

linkedList.delete("first value")

console.log(linkedList.toArray())
linkedList.delete("s")
console.log(linkedList.toArray())
linkedList.delete(2)
console.log(linkedList.toArray())
linkedList.delete("n")
console.log(linkedList.toArray())

console.log(linkedList.find("d"))

linkedList.insertAfter("d", "mmd")
console.log(linkedList.toArray())

linkedList.pop()

console.log(linkedList.toArray())*/
