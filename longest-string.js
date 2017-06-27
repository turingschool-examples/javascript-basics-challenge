

function longestString(array) {
  if (array.length == 0) { return null};
  var longest = array.reduce(function (a, b) {
    return a.length > b.length ? a : b; });
    return longest
}

module.exports = longestString


// var longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
