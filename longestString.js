function longestString(arr) {
  var result = [];
  arr.forEach(function(str) {
    result.push(str.length);
  })
  var maxLength = result.indexOf(Math.max.apply(null, result));
  return arr[maxLength]
};


module.exports = { longestString }
