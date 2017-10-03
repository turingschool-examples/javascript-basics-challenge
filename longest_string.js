// longestString(['horses', 'cats', 'pineapples']); // => "pineapples"

function longestString(array) {
  if (array.length == 0) {
    return null
  } else {
    var longest = array.reduce(function(a,b) { return (a.length > b.length) ? a: b;
    });
    return longest;
  }
}

module.exports = { longestString }
