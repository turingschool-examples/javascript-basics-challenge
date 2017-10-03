const assert = require('chai').assert;
const factorial = require('../factorial');

describe('factorial function', function(){
  it('returns the correct factorial per number', function(){
    assert.equal(factorial(4), 24)
    assert.equal(factorial(3), 6)
  });
});
