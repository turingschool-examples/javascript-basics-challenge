const assert = require('chai').assert
const factorial = require('../factorial')

it('returns factorial', function() {
  assert.equal(factorial(4), 24);
  assert.equal(factorial(0), 1);
});
