function factorial(number) {
  if (number == 0) {
    return 1
  } else if (number < 0) {
    return console.log("The factorial of a negative number is undefined")
  } else {
    while (number > 1) {
      return number * factorial(number - 1)
    }
    return number  
  }
}

module.exports = factorial