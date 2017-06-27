function factorial(num) {
  if (num === 0) return 1;
  var total = 1;
  for (num; num > 0; num--) {
    total = num * total;
  }
  return total;
}

module.exports = factorial;
