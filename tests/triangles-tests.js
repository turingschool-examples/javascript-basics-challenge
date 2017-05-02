const assert = require('chai').assert;
const triangle = require('../scripts/triangles');
var pry = require('pryjs');

describe('triangle', function(){
  context('isTriangle', function(){
    it('returns true if it is an equilateral triangle', function(){
      assert.isTrue(triangle.isTriangle(4, 4, 4))
    });

    it('returns true if it is a right triangle', function(){
      assert.isTrue(triangle.isTriangle(6, 8, 10))
    });

    it('returns true if it is a right triangle', function(){
      assert.isTrue(triangle.isTriangle(8, 6, 10))
    });

    it('returns true if it is a right triangle', function(){
      assert.isTrue(triangle.isTriangle(10, 8, 6))
    });

    it('returns false if a side is 0', function(){
      assert.isFalse(triangle.isTriangle(0, 0, 0))
    });

    it('returns false if a side has negative number', function(){
      assert.isFalse(triangle.isTriangle(-2, 1, 5))
    });

    it('returns false if not a triangle', function(){
      assert.isFalse(triangle.isTriangle(4, 8, 50))
    });
  });
});
