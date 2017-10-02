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
});
