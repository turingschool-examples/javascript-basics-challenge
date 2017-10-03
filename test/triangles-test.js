const assert = require('chai').assert;
const isTriangle = require('../lib/triangles/isTriangle');

describe('isTriangle', function() {
  context('given three side lengths', function() {
    it('returns true if lengths can formulate a triangle', function() {

      assert.isTrue(isTriangle(6, 8, 10));
      assert.isFalse(isTriangle(0, 0, 0));
    });
  });
});
