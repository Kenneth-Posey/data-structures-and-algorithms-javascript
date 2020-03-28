// simple hash function with a maximum hash value
function hash(string, limit) {
    let hashed = 0
    for (let i = 0; i < string.length; i++){
        hashed += string.charCodeAt(i)
    }
    return hashed % limit
}

class HashTable {
    constructor() {
        this.storage = []
        this.limit = 14
    }

    print() {
        console.log(this.storage)
    }

    add(key, value) {
        let index = hash(key, this.limit)
        if (this.storage[index] === undefined) {
            // add new array with key, value to the index
            this.storage[index] = [
                [key, value]
            ]
        } else {
            // loop over array at the index
            let inserted = false
            for(let i = 0; i < this.storage[index].length; i++) {
                // if key exists at index then update value
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value
                    inserted = true
                    break
                }
            }

            if (!inserted) {
                // if key does not exist at index then add key, value
                this.storage[index].push([key, value])
            }
        }
    }

    remove(key) {
        let index = hash(key, this.limit)
        // if there's only one value at that index then devare the index's array
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index]
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i]
                    break
                }
            }
        }
    }

    lookup(key) {
        let index = hash(key, this.limit)

        if (this.storage[index] === undefined) {
            return undefined
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1]
                }
            }
        }
    }
}

var ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();