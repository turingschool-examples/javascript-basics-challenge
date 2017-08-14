const pry = require('pryjs')

const longestString = function(collection) {
    return collection.sort(function(a, b) {
        return b.length - a.length
    })[0]
}
module.exports = longestString