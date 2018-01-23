const assert = require('chai').assert
const Factorial = require('../lib/factorial')

describe('factorial(num) functionality', function() {
  context('with an argument of a non-negative integer', function() {
    it('calculates and returns the product of all integers from 1 to that number', function() {
      assert.equal(Factorial.factorial(3), 6)
      assert.equal(Factorial.factorial(4), 24)
      assert.equal(Factorial.factorial(5), 120)
      assert.equal(Factorial.factorial(12), 479001600)
    })
  })
  context('with an argument of 0', function() {
    it('returns 1', function() {
      assert.equal(Factorial.factorial(0), 1)
    })
  })
})
