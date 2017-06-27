const assert = require('chai').assert
const countNumbersBetween = require('../countNumbersBetween')

describe('countNumbersBetween', function() {
  context('numbersBetween', function(){
    it('count the numbers between the bounds', function(){
      assert.equal(countNumbersBetween.countNumbersBetween([1, 2, 3], 0, 10), 3)
      assert.equal(countNumbersBetween.countNumbersBetween([], 0, 10), 0)
    });
  });
});
