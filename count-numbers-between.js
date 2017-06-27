


function countNumbersBetween(array, lower, upper) {
  var array = array.filter( function(num) {
    return (num >= lower) && (num <= upper)
  });
  return array.length
}

module.exports = countNumbersBetween
