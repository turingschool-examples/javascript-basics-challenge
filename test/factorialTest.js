const assert = require('chai').assert
const factorial = require('../factorial')

describe('factorials', function() {
  context('it returns the factorial', function() {
    it('returns factorial', function() {
      assert.equal(factorial(5), 120)
    })
  })

  context('0 number is given', function() {
    it('returns 1', function() {
      assert.equal(factorial(0), 1)
    })
  })

  context('1 number is given', function() {
    it('returns 1', function() {
      assert.equal(factorial(1), 1)
    })
  })
})
