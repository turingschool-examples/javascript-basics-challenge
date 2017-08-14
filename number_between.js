const pry = require('pryjs')

const countNumbersBetween = function(arr, lower, upper) {
    let results = arr.filter(function(num) {
        return num >= lower && num <= upper
    })
    return results.length
}

module.exports = countNumbersBetween