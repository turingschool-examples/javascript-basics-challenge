var assert = require('chai').assert;
var rectanglar = require('../rectangle')

describe("it can measure a rectangle, specifically: ", function() {
  it("the area", function() {
    var rectangle = {width: 10, height: 20};
    var rectanglify = new rectanglar;
    assert.equal(rectanglify.area(rectangle), 200);
  })

  it("the perimeter", function() {
    var rectangle = {width: 10, height: 20};
    var rectanglify = new rectanglar;
    assert.equal(rectanglify.perimeter(rectangle), 60);
  })

  it("the diagonal", function() {
    var rectangle = {width: 7, height: 24};
    var rectanglify = new rectanglar;
    assert.equal(rectanglify.diagonal(rectangle), 25)
  })
})

describe("it can determine the shape", function() {
  it("square", function() {
    var rectangle = {width: 7, height: 7};
    var rectanglify = new rectanglar;
    assert.equal(rectanglify.isSquare(rectangle), true);
  })

  it("rectangle", function() {
    var rectangle = {width: 10, height: 20};
    var rectanglify = new rectanglar;
    assert.equal(rectanglify.isSquare(rectangle), false);
  })
})
