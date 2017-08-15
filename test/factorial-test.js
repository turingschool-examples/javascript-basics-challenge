const assert = require('chai').assert
const factorial = require('../factorial')

describe('.factorial', function() {
  it('returns factorial of a positive integer', function() {
    assert.equal(factorial(4), 24)
  })

  it('returns 1 for the factorial of 0', function() {
    assert.equal(factorial(0), 1)
  })

  it('returns message if its a negative integer', function() {
    assert.equal(factorial(-5), 'Error. Number must be a positive integer')
  })
})
