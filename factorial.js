const pry = require('pryjs')
const factorial = function(num, total = 1) {
    if (num > 0) {
        var total = num * total
        var num = num - 1
        return factorial(num, total)
    } else {
        return total
    }
}

module.exports = factorial