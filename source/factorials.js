pry = require('pryjs')

function factorial(num) {
  if(num === 0) {
    return 1
  } else {
  var integers = []
  for (i = 1; i <= num; i++) {
    integers.push(i)
  }
  return integers.reduce((total, num) => total * num)
  }
}

module.exports = factorial
