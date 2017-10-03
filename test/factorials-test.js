const assert = require('chai').assert;
const factorial = require('../lib/factorials/factorials');

describe('factorials', function() {
  it('calculates factorial of a given integer', function() {

    assert(factorial(4), 24);
  });
});
