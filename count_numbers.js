
var countNumbersBetween = function(array, lower, upper) {
  var withinBounds = function(value) {
    return (value >= lower && value <= upper);
  }

  if (array.length > 0) {
    var betweenNumbers = array.filter(withinBounds);
    var count = betweenNumbers.length
  } else {
    return 0;
  }
  return count;
}

exports.countNumbersBetween = countNumbersBetween;