const assert = require('chai').assert;
const factorial = require('../factorial.js');

it('is a function', function() {
  assert.isFunction(factorial, 'this is a function');
});

it('can find the factorial of 0 as 1', function() {
  assert.deepEqual(factorial(0), 1);
});
