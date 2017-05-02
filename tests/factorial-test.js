const assert = require('chai').assert;
const factorial = require('../scripts/factorial');
var pry = require('pryjs')

describe('factorial', function(){
  context('calculates factorial of number', function(){
    it('return the product of all integers up to that number', function(){
      assert.equal(factorial(7), 5040)
    });
  });
});
