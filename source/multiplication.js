pry = require('pryjs')

function multiplicationTable(num) {
  var integers = []
  var products = []
  for (i = 1; i <= num; i++) {
    integers.push(i)
    products.push(i)
  }
  products.push('\n')
  for (i = 2; i <= num; i++) {
    integers.forEach(function(num) {
      products.push(i * num)
    })
    products.push('\n')
  }
  return products.toString().replace(/,/g , " ")
}

module.exports = multiplicationTable
