function factorial(number) {
  if (number < 0) {
    return undefined
  } else if (number === 0) {
    return 1
  } else {
    return recurseFactorial(number)
  }
}

function recurseFactorial(number) {
  if (number === 1 || number === 0) {
    return 1
  }
  return number * recurseFactorial(number - 1)
}

var exports = module.exports = { factorial }