pry = require('pryjs')

function longestString(array) {
  return array.reduce(function(currentString, nextString) {
    return currentString.length > nextString.length ? currentString : nextString
  })
}

module.exports = longestString
