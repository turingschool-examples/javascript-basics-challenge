const assert = require('chai').assert
var factorial = require('../lib/factorial.js')

describe('factorial', function() {
  context('factorial function', function() {
    it('it can calculate the factorial of a number', function() {
      assert.equal(factorial(5), 120)
    })
  })
});
