const assert = require('assert')
const factorial = require('../factorial')

describe("factorial", function() {
  it("it returns the factorial of a provided number", function() {
    assert(factorial(4), 24)
    assert(factorial(3), 6)
    assert(factorial(5), 120)
  })
})
