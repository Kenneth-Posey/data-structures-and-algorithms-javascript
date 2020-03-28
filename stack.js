class Stack {
    // push, pop, peek, length
    constructor() {
        this.count = 0
        this.storage = []
    }

    push(value) {
        this.storage[this.count] = value
        this.count++
    }

    pop() {
        if (this.count === 0) {
            return undefined
        }

        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    size() {
        return this.count
    }

    peek() {
        return this.storage[this.count-1]
    }
}

class StackExample {
    static Palindrome(word) {
        let letters = new Stack()
        let reversed = ""

        for (let i = 0; i < word.length; i++) {
            letters.push(word[i])
        }

        for (let i = 0; i < word.length; i++) {
            reversed += letters.pop();
        }

        if (reversed === word) {
            return true
        } else {
            return false
        }
    }
}

var myStack = new Stack()
myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.size())
console.log(StackExample.Palindrome("racecar"))
console.log(StackExample.Palindrome("palindrome"))