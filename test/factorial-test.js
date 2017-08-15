const assert = require('chai').assert;
const factorial = require('../factorial.js');

it('is a function', function() {
  assert.isFunction(factorial, 'this is a function');
});
