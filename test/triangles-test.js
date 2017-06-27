var assert = require('chai').assert;
const triangles = require('../triangles')



describe("triangle", function() {
  it("returns true if obj is triangle", function(){
    assert.isFalse(triangles.isTriangle(0,0,0))
    assert.isTrue(triangles.isTriangle(6, 8, 10))
    assert.isFalse(triangles.isTriangle(4, 8, 50))
  })
})
