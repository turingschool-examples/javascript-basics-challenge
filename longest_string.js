const pry = require('pryjs')


const sortArrByLength = function(collection) {
    return collection.sort(function(a, b) {
        return b.length - a.length
    })
}
const longestString = function(collection) {
    if (collection.length === 0) {
        return null
    } else {
        return sortArrByLength(collection)[0]
    }
}


module.exports = longestString