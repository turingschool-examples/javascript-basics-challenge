var assert = require('chai').assert;
var factorial = require('../factorial.js')

describe('find factorials', function() {
  it('can find the factorial of a positive number', function() {
    assert.equal(factorial(4), 24);
  })

  it('return an error for a number <= 0', function() {
    assert.equal(factorial(-2), "I can only factorialize positive numbers. Please try again.");
  })

  it('returns an error for non-numbers', function() {
    assert.equal(factorial("I am not a number"), "Wrong.");
  })
})
