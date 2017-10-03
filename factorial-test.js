const assert    = require('chai').assert
const factorial = require('./factorial')

describe('factorial will find the factorial', function() {
  context('when provided 0', function() {
    it('will return 1', function() {
      assert.equal(factorial(0), 1);
    })
  })

  context('when provided with a positive number', function() {
    it('will return the factorial of that number', function() {
      assert.equal(factorial(5), 120);
    })
  })
})
