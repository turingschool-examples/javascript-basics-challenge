const assert = require('chai').assert;
const factorial = require('../factorial')

describe("factorial", function() {
  it("will return a factorial for a number greater than 1", function() {
    assert.deepEqual(factorial(3), 6)
  })
  it("will return 1 for 0", function() {
    assert.deepEqual(factorial(0), 1)
  })
  it("will return a string for a number under 1", function() {
    assert.deepEqual(factorial(-1), "You must pick a positive integer.")
  })
})
