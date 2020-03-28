class Queue {
    constructor() {
        this.collection = []
    }

    enqueue(value) {
        this.collection.push(value)
    }

    dequeue() {
        return this.collection.shift()
    }

    size() {
        return this.collection.length
    }

    isEmpty() {
        return this.collection.length === 0
    }

    front() {
        return this.collection[0]
    }

    values() {
        return this.collection
    }
}

class PriorityQueue extends Queue {
    constructor() {
        super()
    }
    // example value: ["feed cat", 1]
    // higher priority is first
    enqueue(value) {
        if (this.isEmpty()) {
            this.collection.push(value)
        } else {
            let isAdded = false
            for (let i = 0; i < this.collection.length; i++) {
                // if the priority is less than the last priority, then add it in place
                if (value[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, value)
                    isAdded = true
                    break
                }
            }

            if (!isAdded) {
                this.collection.push(value)
            }
        }
    }
}

var pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
console.log(pq.values());
pq.dequeue();
console.log(pq.front());
console.log(pq.values()); 