assert = require('chai').assert;
const factorial = require('../lib/factorial');

describe("Factorial Calculations", function() {
  it("can determine factorial of 4", function() {
    assert.deepEqual(factorial(4), 24)
  })

  it("can determine factorial of 0", function() {
    assert.deepEqual(factorial(0), 1)
  })

  it("returns null for negative number", function() {
    assert.deepEqual(factorial(-4), null)
  })

  it("returns null for character", function() {
    assert.deepEqual(factorial("a"), null)
  })
})