const assert = require('chai').assert
const triangles = require('../triangles')

describe("it returns traingle authentication", function() {
  it("returns true with valid numbers", function() {
    assert.deepEqual(triangles.isTriangle(0,0,0), "it works!");
  });
});
