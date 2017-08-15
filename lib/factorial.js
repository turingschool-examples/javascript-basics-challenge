function factorial(number) {
  if (number < 0) {
    return null;
  }
  else if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

module.exports = factorial;
