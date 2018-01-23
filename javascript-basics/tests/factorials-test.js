expect = require('chai').expect
assert = require('chai').assert
factorials = require('../scripts/factorials.js')

describe('Factorial functions', function() {
  it('can find the factorial of a number greater than 0', function() {
    assert.deepEqual(factorials.factorial(4), 24)
  })

  it('can find the factorial of 0', function() {
    assert.deepEqual(factorials.factorial(0), 1)
  })
})