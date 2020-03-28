class Set {
    constructor() {
        this.collection = []
    }

    has(value) {
        return this.collection.indexOf(value) !== -1
    }

    values() {
        return this.collection
    }

    add(value) {
        if (!this.has(value)) {
            this.collection.push(value)
            return true
        }
        return false
    }

    remove(value) {
        if (this.has(value)){
            let index = this.collection.indexOf(value)
            this.collection.splice(index, 1)
            return true
        }
        return false
    }

    size() {
        return this.collection.length
    }

    union(set) {
        let unionSet = new Set()
        let set1 = this.values()
        let set2 = set.values()

        set1.forEach(function(value) {
            unionSet.add(value)
        })

        set2.forEach(function(value) {
            unionSet.add(value)
        })

        return unionSet
    }

    intersection(set) {
        let interSet = new Set()
        let set1 = this.values()

        set1.forEach(function(value){
            if(set.has(value)){
                interSet.add(value)
            }
        })
        return interSet
    }

    difference(set) {
        let diffSet = new Set()
        let set1 = this.values()
        set1.forEach(function(value) {
            if (!set.has(value)){
                diffSet.add(value)
            }
        })
        return diffSet
    }

    subset(set) {
        let set1 = this.values()
        return set1.every(function(value){
            return set.has(value)
        })
    }
}


var setA = new Set()
var setB = new Set()
setA.add("a")
setA.add("b")
setA.add("c")
setB.add("a")
setB.add("b")
console.log("intersection: " + setA.intersection(setB).values())
console.log("difference: " + setA.difference(setB).values())
console.log("union: " + setA.union(setB).values())
console.log("B is subset of A: " + setB.subset(setA))
