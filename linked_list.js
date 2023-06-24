class LinkedList {
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