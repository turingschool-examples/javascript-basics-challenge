const factorial = require('./factorial');
const assert = require('chai').assert;

describe('Factorial Tests', function() {
  context('can take factorial', function() {
    it('once', function() {
      assert.equal(factorial(4), 24);
    });

    it('twice', function() {
      assert.equal(factorial(7), 5040);
    });

    it('with zero', function() {
      assert.equal(factorial(0), 1);
    });

    it('with negative', function() {
      assert.equal(factorial(-10), undefined);
    });
  });
});
