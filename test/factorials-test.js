const assert = require('chai').assert
const factorial = require('../factorials').factorial


describe('Factorials', function () {
  context('factorial function', function () {
    it('calculates the Factorial for a number', function () {
      assert.equal(factorial(5), 120)
      assert.equal(factorial(3), 6)
    })
  })

})
