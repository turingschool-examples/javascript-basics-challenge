const factorial = (num) => {
  if (num < 0) {return undefined}
  let result = 1
  for (var i = num; i > 0; i--) {
    result *= i
  }
  return result
}

module.exports = factorial
