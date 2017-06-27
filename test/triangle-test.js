const assert = require('chai').assert;
const triangle = require('../triangle');

describe('triangle functions', function() {

    it('is a function', function() {
      assert.isFunction(triangle.isTriangle);
    });

    it('can determine not a triangle', function() {
      assert.isFalse(triangle.isTriangle(0,0,0));
      assert.isFalse(triangle.isTriangle(-2,1,5));
      assert.isFalse(triangle.isTriangle(4,8,50));
      assert.isFalse(triangle.isTriangle(50,8,4));
      assert.isFalse(triangle.isTriangle(8,50,4));
    });

    it('can determine a triangle', function() {
      assert.isTrue(triangle.isTriangle(4,4,4));
      assert.isTrue(triangle.isTriangle(6,8,10));
      assert.isTrue(triangle.isTriangle(8,6,10));
      assert.isTrue(triangle.isTriangle(10,8,6));
    });

});
