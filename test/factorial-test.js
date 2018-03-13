var assert = require('chai').assert;
var getFactorial = require('../factorial').getFactorial

describe('Factorial function', function() {
  it('can get the factorial of a number', function() {
    assert.equal(getFactorial(0), 1)
    assert.equal(getFactorial(3), 6)
  })
})
