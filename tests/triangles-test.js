const assert = require('chai').assert
const triangles = require('../triangles')

describe("it returns traingle authentication", function() {
  it("returns true with valid numbers", function() {
    assert.deepEqual(triangles.isTriangle(4,4,4), true);
    assert.deepEqual(triangles.isTriangle(6,8,10), true);
    assert.deepEqual(triangles.isTriangle(8,6,10), true);
    assert.deepEqual(triangles.isTriangle(10,8,6), true);
  });

  it("returns false with valid numbers", function() {
    assert.deepEqual(triangles.isTriangle(0,0,0), false);
    assert.deepEqual(triangles.isTriangle(-2,1,5), false);
    assert.deepEqual(triangles.isTriangle(4,8,50), false);
  });
});
