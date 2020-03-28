class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
    }

    size() {
        return this.length
    }

    head() {
        return this.head
    }

    add(value) {
        let node = new Node(value)
        if (this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node
        }

        this.length++
    }

    remove(value) {
        let currentNode = this.head
        let previousNode = null
        if (currentNode.value === value) {
            this.head = currentNode.next
        } else {
            while (currentNode.value !== value) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
        this.length--
    }

    isEmpty() {
        return this.length === 0
    }

    indexOf(node) {
        let currentNode = this.head
        let index = -1

        while (currentNode) {
            index++
            if (currentNode.value === node) {
                return index
            }
            currentNode = currentNode.next
        }

        return -1
    }

    valueAt(index) {
        let currentNode = this.head
        let count = 0
        while (count < index) {
            currentNode = currentNode.next
            count++
        }
        return currentNode.value
    }

    addAt(index, value) {
        if (index > this.length) {
            return false
        }

        let node = new Node(value)
        let currentIndex = 0
        let currentNode = this.head
        let previousNode

        if (index === 0){
            node.next = currentNode
            this.head = node
        } else {
            while (currentIndex < index) {
                previousNode = currentNode
                currentNode = currentNode.next
                currentIndex++
            }
            node.next = currentNode
            previousNode.next = node
        }
        this.length++
    }

    removeAt(index) {
        if (index >= this.length || index < 0) { 
            return null
        }

        let currentIndex = 0
        let currentNode = this.head
        let previousNode
        if (index === 0) {
            this.head = currentNode.next
        } else {
            while (currentIndex < index) {
                previousNode = currentNode
                currentNode = currentNode.next
                currentIndex++
            }
            previousNode.next = currentNode.next
        }
        this.length--

        return currentNode.value
    }
}

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.valueAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());