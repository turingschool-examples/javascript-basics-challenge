function total(arr) {
  var tote = arr.reduce(function (sum, value) {
    return sum + value;
  }, 0);
  return tote;
}

function mean(arr) {
  var count = arr.length;
  var tote = total(arr);
  return tote / count;
}

function median(arr) {
  // cannot get this fucker to work!
  var midPoint = Math.floor(arr.length);
  var med = arr.sort(function (a,b) {
    return a-b;
  })[midPoint];
  return med;
}

function mode(arr) {
}

module.exports = {
  total,
  mean,
  median,
  mode
}
