const assert = require('chai').assert
const factorials = require('../factorials')

describe('factorials calulation', function() {
  context('factorials', function(){
    it('calculate the factorials of a number', function(){
      assert.equal(factorials.factorial(4), 24)
      assert.equal(factorials.factorial(0), 1)
      assert.isUndefined(factorials.factorial(-1))
    });
  });
});
