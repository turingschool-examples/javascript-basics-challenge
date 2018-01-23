const pry = require('pryjs');
var longestString = function(arr) {
  var longest = null;
  arr.forEach(function(element) {
    if (typeof element === 'string' && (!longest || element.length > longest.length)) {
      longest = element;
    }
  });
  return longest
}

module.exports = longestString;
