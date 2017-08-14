const pry = require('pryjs')
const factorial = function(num, total = 0) {
    if (num > 0) {
        total === 0 ?
            total = num :
            total = total * num
        var num = num - 1
        return factorial(num, total)
    } else {
        return total
    }
}

module.exports = factorial