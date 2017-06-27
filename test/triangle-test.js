const assert = require('chai').assert
const triangle = require('../triangle')

describe('triangle tests', function() {
  context('math trig', function(){
    it('can compute the area of a rectangle', function(){
      assert.isTrue(triangle.isTriangle(4,4,4))
      assert.isFalse(triangle.isTriangle(4,8,50))
      assert.isTrue(triangle.isTriangle(8,6,10))
    });
  });
});
