const assert = require('chai').assert;
const factorial = require('./factorial');

describe('Factorial', function() {
  context('factorial function', function() {
    it('it returns the factorial of 24', function() {
      assert.equal(factorial(4), 24)
    })
    it('it returns the factorial of 0', function() {
      assert.equal(factorial(4), 24)
    })
  })
})
