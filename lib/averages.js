function total(arr) {
  return arr.reduce(function(sum, value) {
    return sum + value;
  }, 0);
};

function mean(arr) {
  return total(arr) / arr.length
};

function median(arr) {
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });

  return sorted[Math.floor(sorted.length / 2)];
};

function mode(arr) {

};

module.exports = {
  total,
  mean,
  median,
  mode
}
