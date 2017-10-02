function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    var sum = 1
    for (i = number; i > 0; i-- ) {
      sum *= i;
    }
    return sum;
  }
}

module.exports = factorial
