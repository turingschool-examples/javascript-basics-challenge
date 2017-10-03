const assert = require('chai').assert
const rectangle = require('../rectangles')

describe("it tests rectangles", function() {
  it("returns the area", function() {
    assert.deepEqual(rectangle.area({width: 10, height: 20}), 200);
  });

  it("returns the perimeter", function() {
    assert.deepEqual(rectangle.perimeter({width: 10, height: 20}), 60);
  });

  it("returns the diagonal", function() {
    assert.deepEqual(rectangle.diagonal({width: 3, height: 4}), 5);
  });

  it("returns if is a square", function() {
    assert.deepEqual(rectangle.isSquare({width: 3, height: 4}), false);
    assert.deepEqual(rectangle.isSquare({width: 3, height: 3}), true);
    assert.deepEqual(rectangle.isSquare({width: 4, height: 4}), true);
  });
});
