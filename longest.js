var pry = require('pryjs');

function longestString(arr) {
  arr.sort(function(a, b) {
    return b.length - a.length;
  })
  return arr[0];
}

module.exports = longestString
