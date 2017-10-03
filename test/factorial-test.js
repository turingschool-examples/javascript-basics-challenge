const assert = require('chai').assert;
const factorial = require('../lib/factorial.js')


describe('Factorial functionality', function(){
  it('factorial returns the factorial', function(){
    assert.equal(factorial.factorial(4), 24);
  });
});
