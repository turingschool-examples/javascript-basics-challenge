let assert = require('chai').assert
let factorial = require('../lib/factorial')

describe('factorial function', function(){
  it('returns the factorial value for a valid integer', function(){
    assert.equal(factorial(4), 24);
  });
});
