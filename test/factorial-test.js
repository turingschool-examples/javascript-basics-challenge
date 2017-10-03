const assert = require('chai').assert
const factorial= require('../lib/factorial')

describe('Factorial Methods', function() {
  it('should return the correct factorial for 4', function() {
    assert.equal(24, factorial(4))
  })

  it('should return the correct factorial for 10', function() {
    assert.equal(3628800, factorial(10))
  })
})
