/*jshint esversion: 6 */

const assert = require('chai').assert;
const factorial = require('../factorial');

describe('Factorial', function() {
  it('will return the factorial of a non-negative integer', function() {
    assert.equal(factorial(0), 1);
    assert.equal(factorial(1), 1);
    assert.equal(factorial(2), 2);
    assert.equal(factorial(3), 6);
    assert.equal(factorial(4), 24);
    assert.equal(factorial(5), 120);
    assert.equal(factorial(10), 3628800);
    assert.equal(factorial(20), 2432902008176640000);
  });
});
