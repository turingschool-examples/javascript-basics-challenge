function factorial(num) {
  if (num < 0) {
    return "You must pick a positive integer."
  } else if (num === 0) {
    return 1
  } else {
    return factorial(num - 1) * num
  }
}

module.exports = factorial
