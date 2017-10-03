const assert = require('chai').assert;
const factorial = require('../lib/factorial');

describe('Factorial', function() {
  it('finds the factorial of a number', function() {
    assert.equal(factorial(4), 24);
  });

  it('returns 1 when given 0', function() {
    assert.equal(factorial(0), 1);
  });
});
