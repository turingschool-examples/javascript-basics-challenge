const assert = require('chai').assert;
const isTriangle = require('../triangles');

describe('is it a triangle', function(){
  context('is triangle', function(){
    it('can determine if three sides make a triangle', function(){
      assert.equal(isTriangle(-2, 1, 3), "False, because a triangle can't have 0 negative sides")
      assert.equal(isTriangle(0,0,0), "False, because a triangle can't have 0 length sides")
      assert.equal(isTriangle(4,4,4), "True, an equilateral triangle")
      assert.equal(isTriangle(6, 8, 10), "True, a right triangle")
      assert.equal(isTriangle(8, 6, 10), "True, a right triangle")
      assert.equal(isTriangle(10, 8 ,6), "True, a right triangle")
      assert.equal(isTriangle(4,8, 50), "False, no such triangle exists")
    });
  });
});
