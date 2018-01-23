var pry = require("pryjs");

function longest(array) {
  var indexOfLongest;
  array.forEach(function (string, index) { 
    var isLongest = typeof indexOfLongest === 'undefined' || string.length > array[indexOfLongest].length
    if (isLongest) {
      indexOfLongest = index
    }
  })
  return array[indexOfLongest]
}

module.exports = {longest}