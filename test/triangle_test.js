const assert = require('chai').assert
const triangles = require('../triangles')

describe("isTriangle function", function(){
  it("returns false with a 0 input", function(){
    assert.equal(triangles.isTriangle(2, 3, 0), false)
  });
});

describe("isTriangle function", function(){
  it("returns false with a negative input", function(){
    assert.equal(triangles.isTriangle(-1, 3, 4), false)
  });
});

describe("isTriangle function", function(){
  it("returns true if equal, positive inputs", function(){
    assert.equal(triangles.isTriangle(2, 2, 2), true)
  });
});

describe("isTriangle function", function(){
  it("returns true if non-equilateral right triangle is possible from inputs", function(){
    assert.equal(triangles.isTriangle(10, 6, 8), true)
  });
});

describe("isTriangle function", function(){
  it("returns false if triangle is not possible from inputs", function(){
    assert.equal(triangles.isTriangle(1, 2, 50000000), false)
  });
});
