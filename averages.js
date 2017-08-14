const pry = require('pryjs')

class Operations {
    constructor(collection) {
        this.collection = collection
    }

    get total() {
        return this.collection.reduce(function(sum, value) {
            return sum + value;
        }, 0)
    }

    get mean() {
        return this.total / this.collection.length
    }

    get median() {

        let sorted = this.collection.sort(function(a, b) { a - b })
        if (sorted.length % 2 === 0) {
            let i = Math.floor(sorted.length / 2)
            let sum = sorted[i] + sorted[i + 1]
            let avg = sum / 2
            return avg
        } else {
            let median = Math.floor(sorted.length / 2)
            return sorted[median]
        }
    }

    get mode() {
        var groups = {}
        this.collection.forEach(function(number) {
            if (groups[number]) {
                groups[number] += 1
            } else {
                groups[number] = 1
            }
        })
        if (this.noMode(groups)) {
            return 'none'
        } else {
            var result = this.arrayify(groups)
            var final = this.sortGroup(result)
            var mode = {}
            mode[final[0]] = final[1]
            return mode
        }
    }

    noMode(groups) {
        return Object.values(groups).every(function(num) { return num === 1 })
    }

    arrayify(groups) {
        return Object.keys(groups).map(function(key) {
            return [key, groups[key]];
        })
    }
    sortGroup(group) {
        return group.sort(function(a, b) { return b[1] - a[1] })[0]
    }
}

module.exports = Operations