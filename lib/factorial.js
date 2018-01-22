var findFactorial = function(n) {
  if (n == 1) {
    return n;
  }

  return n * findFactorial(n-1);
}

module.exports = {findFactorial}