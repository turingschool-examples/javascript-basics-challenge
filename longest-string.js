function longestString(array){
  return array.sort(function (a, b) { return b.length - a.length; })[0];
}

module.exports = longestString
