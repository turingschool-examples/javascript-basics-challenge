function countNumbersBetween(data, lowerBound, upperBound) {
  var total = 0;
  data.forEach(function(num) {
    if (num <= upperBound || num >= lowerBound) {
      total += 1;
    }
  });
  return total;
}


module.exports = {
  countNumbersBetween
}
