function factorial(num) {
  if (num === 0) {
    return 1;
  }

  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }

  return num;
}

module.exports = factorial
