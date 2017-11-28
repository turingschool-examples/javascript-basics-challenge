const assert = require('chai').assert;
const isTriangle = require('../lib/triangle');

describe('Triangle', () => {
  context('is a triangle', () => {
    it('returns true for equilateral triangle', () => {
    assert.isTrue(isTriangle(2,2,2));
  });

  it('returns true for right triangle', () => {
        assert.isTrue(isTriangle(6,8,10));
      });

      it('returns true for same right triangle', () => {
        assert.isTrue(isTriangle(10,8,6));
      });
    });

  context('is not a triangle', () => {
    it('is false for side with 0 length',() => {
      assert.isFalse(isTriangle(0,2,6));
    });

    it('is false for negative side length', () => {
      assert.isFalse(isTriangle(-2, 1, 5));
    });

    it('is false for non-existent triangle', () => {
      assert.isFalse(isTriangle(4, 8, 50));
    });
  })
});
