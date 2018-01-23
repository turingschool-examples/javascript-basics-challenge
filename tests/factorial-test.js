const assert = require('chai').assert
const factorial = require('../lib/factorial')

describe('Factorial', function() {
  it('takes a number and calculates the factorial of that number', function() {
    assert.equal(factorial.factorial(4), 24)
  })

  it('returns undefined with a number less than 0', function() {
    assert.isUndefined(factorial.factorial(-1))
  })

  it('returns 1 as the factorial of 0', function() {
    assert.equal(factorial.factorial(0), 1)
  })
})