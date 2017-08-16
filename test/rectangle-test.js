var assert = require('chai').assert;
var rectangleBits = require('../rectangle')

describe("it can measure a rectangle, specifically: ", function() {
  it("the area", function() {
    var rectangle = {width: 6, height: 7};
    var rectangleArea = new rectangleBits;
    assert.equal(rectangleArea.area(rectangle), 42);
  })

  it("the perimeter", function() {
    var rectangle = {width: 5, height: 6};
    var rectanglePerim = new rectangleBits;
    assert.equal(rectanglePerim.perimeter(rectangle), 22);
  })

  it("the diagonal", function() {
    var rectangle = {width: 7, height: 24};
    var rectangleDiagonal = new rectangleBits;
    assert.equal(rectangleDiagonal.diagonal(rectangle), 25)
  })
})

describe("it can determine the shape", function() {
  it("square", function() {
    var rectangle = {width: 7, height: 7};
    var rectangleSq = new rectangleBits;
    assert.equal(rectangleSq.isSquare(rectangle), true);
  })

  it("rectangle", function() {
    var rectangle = {width: 10, height: 20};
    var rectangler = new rectangleBits;
    assert.equal(rectangler.isSquare(rectangle), false);
  })
})
