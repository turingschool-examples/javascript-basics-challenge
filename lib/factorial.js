function factorial(num) {
  if (num === 0) {
    return 1
  } else {
    for (var i = num; i > 0; i--) {
      return i * factorial(i - 1)
    }
  }
}

module.exports = {
  factorial
}
