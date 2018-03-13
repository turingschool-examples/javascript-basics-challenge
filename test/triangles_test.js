const assert = require('chai').assert
var isTriangle = require('../triangles.js')

describe('triangle', function() {
  context('isTriangle function', function() {
    it('it can determine if a triangle can be created from equal lengths', function() {
      assert.equal(isTriangle(4, 4, 4), "true")
    });
    it('it can determine that a triangle can not be created from with 0 length', function() {
      assert.equal(isTriangle(4, 0, 0), "false")
    });
    it('it can determine that a triangle can not be created from with negative length', function() {
      assert.equal(isTriangle(4, -10, -3), "false")
    });
    it('it can determine that a triangle can not be created if lengths do not work', function() {
      assert.equal(isTriangle(4, 8, 50), "false")
    })
  })
});
