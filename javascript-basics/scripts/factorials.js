function factorial(number) {
  total = 1
  while (number > 0) {
    total *= number
    number = number - 1
  }
  return total
}

module.exports = {factorial}