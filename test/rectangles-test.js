const assert = require('chai').assert;
const area = require('../rectangles').area
const perimeter = require('../rectangles').perimeter
const diagonal = require('../rectangles').diagonal


describe("rectangle functions", function() {
  it("returns the area of the rectangle", function() {
    var rectangle = {width: 10, height: 20};
    var expected = 200;
    var actual = area(rectangle);
    assert.equal(expected, actual);
  })

  it("returns the perimeter of the rectangle", function(){
    var rectangle = {width: 10, height: 20};
    var expected = 60;
    var actual = perimeter(rectangle);
    assert.equal(expected, actual);
  })

  it("returns the length of the rectangle's diagonal", function(){
    var rectangle = {width: 10, height: 20};
    var expected = 22.360679774997898;
    var actual = diagonal(rectangle);
    assert.equal(expected, actual);
  })

  it("returns true if the rectangle is a square", function(){
    var rectangle = {width: 10, height: 10};
    var expected = true;
    var actual = isSquare(rectangle);
    assert.equal(expected, actual);
  })

  it("returns false if the rectangle is not a square", function(){
    var rectangle = {width: 10, height: 20};
    var expected = false;
    var actual = isSquare(rectangle);
    assert.equal(expected, actual);
  })
})


// isSquare(rectangle) - returns true if the rectangle is a square and false otherwise