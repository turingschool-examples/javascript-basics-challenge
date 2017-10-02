const assert = require('chai').assert;
const area   = require('../rectangles').area
const perimeter = require('../rectangles').perimeter
const diagonal = require('../rectangles').diagonal
const isSquare = require('../rectangles').isSquare

describe("rectange functions", function(){
  it("returns the area of a rectangle", function(){
    var rectangle = {width: 10, height: 20};
    assert.equal(area(rectangle), 200)
  });

  it("returns the perimeter of a rectangle", function(){
    var rectangle = { width: 10, height: 20 };
    assert.equal(perimeter(rectangle), 60)
  });

  it("returns the diagonal of a rectangle", function() {
    var rectangel = { width: 10, height: 20 };
    assert.equal(diagonal(rectangel), 22)
  });

  it("returns true if a rectangle is a square", function() {
    var rectangle = { width: 10, height: 20 };
    assert.equal(isSquare(rectangle), false)
  });
});
