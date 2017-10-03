function factorialCalculator(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorialCalculator(number - 1);
  }
}

module.exports = factorialCalculator;
