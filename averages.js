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

function median(arr) {
  arr.sort( function(a, b) {
    return a - b;
  });

  var half = Math.floor(arr.length / 2);

  if(arr.length % 2) {
    return arr[half];
  } else {
    return (arr[half - 1] + arr[half]) / 2.0;
  }
}

module.exports = {total, mean, median}
