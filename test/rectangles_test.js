const rectangleF = require('../lib/rectangles.js')
const assert = require('chai').assert

describe('With a suite of geometric functions', function() {

  it('can calcuate the area of a rectangle', function() {
    var actual = rectangleF.area(2, 3);
    var expected = 6;

    assert.equal(actual, expected);
  });

  it('can calcuate the perimeter of a rectabgle', function() {
    var actual = rectangleF.perimeter(2, 3);
    var expected = 10;
    assert.equal(actual, expected);

  });

  it('can calcuate the diagonal of a rectangle', function() {
    var actual = rectangleF.diagonal(2, 3);
    var expected = Math.sqrt(13);
    assert.equal(actual, expected);

  });

  it('can determine if a shape is a square', function() {
    assert.equal(rectangleF.isSquare(2, 3), false);
    assert.equal(rectangleF.isSquare(3, 3), true);
  });

})

// You're expected to write the following functions:
//
// area(rectangle) - returns the area of the rectangle
// perimeter(rectangle) - returns the perimeter of the rectangle
// diagonal(rectangle) - returns the length of the rectangle's diagonal
// isSquare(rectangle) - returns true if the rectangle is a square and false otherwise
