function total(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function mean(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    var mean = (total += arr[i]) / arr.length;
  }
  return mean;
}

module.exports = {total, mean}
