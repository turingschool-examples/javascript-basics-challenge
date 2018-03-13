var array = ['horses', 'cats', 'pineapples']

function longestString(array) {
  var longest = '';
  for (var i = 0; i < array.length; i++) {
    if(array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest
}

module.exports = longestString
