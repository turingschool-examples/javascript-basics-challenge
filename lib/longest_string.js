var prototype = require('prototype')
Object.extend(global, prototype)

function longestString(array) {
  return array.max(function(item) { return item })
}

module.exports = {
  longestString
}
