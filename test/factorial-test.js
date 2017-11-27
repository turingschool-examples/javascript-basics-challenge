const assert    = require('chai').assert
const factorial = require('../factorial').factorial

describe('factorial', function() {
  it('can calculate the factorial for a positive number', function () {
    assert.equal(factorial(4), 24);
  })
  it('can calculate the factorial for 0', function () {
    assert.equal(factorial(0), 1);
  })
  it('returns a string for non-positive numbers', function () {
    assert.equal(factorial(-1), "number must be non-negative");
  })
})
