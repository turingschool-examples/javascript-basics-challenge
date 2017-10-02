var assert = require('chai').assert
var rectangle = require('../rectangles')

describe("it tests rectangles", function() {
  it("returns the rectangle", function() {
    assert.deepEqual(rectangle[area]({width: 10, height: 20}), 200);
  });

  it("returns the rectangle", function() {
    assert.deepEqual(perimeter({width: 10, height: 20}), 60);
  });
});
