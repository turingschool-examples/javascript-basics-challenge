const assert = require('chai').assert
const rectangles = require('../lib/rectangles')

describe("Area", function() {
  it("returns the area", function() {
    let rectangle = {width: 10, height: 20}
    let result = rectangles.area(rectangle)
    assert.equal(result, 200)
  });
});

describe("Perimeter", function() {
  it("returns the perimter", function() {
    let rectangle = {width: 10, height: 20}
    let result = rectangles.perimeter(rectangle)
    assert.equal(result, 60)
  });
});

describe("Diagonal", function() {
  it("returns the diagonal", function() {
    let rectangle = {width: 10, height: 20}
    let result = rectangles.diagonal(rectangle)
    assert.equal(result, 500)
  });
});

describe("Square", function() {
  it("returns true if it's a square", function() {
    let rectangle = {width: 10, height: 20}
    let result = rectangles.isSquare(rectangle)
    assert.equal(result, false)

    let square = {width: 10, height: 10}
    result = rectangles.isSquare(square)
    assert.equal(result, true)
  });
});
