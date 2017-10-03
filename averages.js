
// mode- returns an object representing the mode(s) of the array with the property being
// the mode and the value being the frequency

function total(array) {
  var total = array.reduce(function(sum, value) {
     return sum + value;
  }, 0);
  return total
}

function mean(array) {
  var total = array.reduce(function(sum, value) {
    return (sum + value);
  }, 0);
  return total / array.length;
}

function median(array) {
  var sorted = array.sort(function (a, b) { return a - b; });
  var half = Math.floor(sorted.length/2);

  if (sorted.length % 2) {
    return sorted[half];
  } else {
    return (sorted[half - 1] + sorted[half]) / 2.0;
  }
}

function mode(array) {
  modeValue = {};
  var counter = 0;
  for(var i = 0; i < array.length; i++) {
    if(!modeValue[array[i]]) modeValue[array[i]] = 0;
    modeValue[array[i]] += 1
  }
  return modeValue
}

module.exports = {
                  total,
                  mean,
                  median,
                  mode
                }
