const factorial = (num) => {
  if(num == 0 || num == 1) {
    return 1
  } else if(num < 0) {
    return "Stop trying to break me!"
  } else {
    return num * factorial(num - 1)
  }
}

module.exports = factorial
